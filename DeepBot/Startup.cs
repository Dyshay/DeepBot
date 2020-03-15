
using AspNetCore.Identity.Mongo;
using DeepBot.ControllersModel;
using DeepBot.Core.Hubs;
using DeepBot.Core.Network;
using DeepBot.Data.Database;
using DeepBot.Data.Database.Loaders;
using DeepBot.Data.Driver;
using DeepBot.Data.Model;
using DeepBot.Data.Model.CharacterInfo;
using DeepBot.Data.Model.IA;
using DeepBot.Data.Model.MapComponent;
using DeepBot.Data.Model.Path;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using MongoDB.Bson.Serialization;
using MongoDB.Driver;
using System;
using System.Text;
using System.Threading.Tasks;

namespace DeepBot
{
    public class Startup
    {
        private string ConnectionString => Configuration.GetConnectionString("DefaultConnection");

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddSignalR();
            services.AddCors();
            services.AddAuthorization();
            // In production, the Angular files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/dist";
            });


            services.AddMvc(option => option.EnableEndpointRouting = false)
                .AddJsonOptions(opt =>
                {
                    opt.JsonSerializerOptions.MaxDepth = 10;
                    opt.JsonSerializerOptions.WriteIndented = true;
                });

            /* object nested */
            BsonClassMap.RegisterClassMap<Account>();
            BsonClassMap.RegisterClassMap<Character>();
            BsonClassMap.RegisterClassMap<Proxy>();
            BsonClassMap.RegisterClassMap<PathAction>();
            BsonClassMap.RegisterClassMap<BankAction>();
            BsonClassMap.RegisterClassMap<CaptureMonsterQuantity>();
            BsonClassMap.RegisterClassMap<FightAction>();
            BsonClassMap.RegisterClassMap<GatherAction>();
            BsonClassMap.RegisterClassMap<InteractionAction>();
            BsonClassMap.RegisterClassMap<MapAction>();
            BsonClassMap.RegisterClassMap<MoveAction>();
            BsonClassMap.RegisterClassMap<SpecificMonsterLevel>();
            BsonClassMap.RegisterClassMap<SpecificMonsterQuantity>();
            BsonClassMap.RegisterClassMap<UseItemAction>();
            BsonClassMap.RegisterClassMap<ZaapAction>();
            BsonClassMap.RegisterClassMap<ZaapiAction>();
            BsonClassMap.RegisterClassMap<SpellAction>();
            BsonClassMap.RegisterClassMap<ConditionalAction>();

            services.AddIdentityMongoDbProvider<UserDB,RoleDB>(identity =>
            {
                identity.Password.RequireDigit = false;
                identity.Password.RequireLowercase = false;
                identity.Password.RequireNonAlphanumeric = false;
                identity.Password.RequireUppercase = false;
                identity.Password.RequiredLength = 1;
                identity.Password.RequiredUniqueChars = 0;
                identity.SignIn.RequireConfirmedEmail = true;
            },
                mongo =>
                {
                    mongo.ConnectionString = ConnectionString;
                }).AddDefaultTokenProviders();
            //Inject appseetings
            services.Configure<ApplicationSettings>(Configuration.GetSection("ApplicationSettings"));


            //Jwt Authentiication
            var key = Encoding.UTF8.GetBytes(Configuration["ApplicationSettings:JWT_Secret"].ToString());
            services.AddAuthentication(x =>
            {
                x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(x =>
            {
                x.SaveToken = false;
                x.TokenValidationParameters = new Microsoft.IdentityModel.Tokens.TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(key),
                    ValidateIssuer = false,
                    ValidateAudience = false,
                    ClockSkew = TimeSpan.Zero
                };
                x.Events = new JwtBearerEvents
                {
                    OnMessageReceived = Context =>
                    {
                        var accessToken = Context.Request.Query["access_token"];

                        var path = Context.HttpContext.Request.Path;
                        if (!string.IsNullOrEmpty(accessToken) && (path.StartsWithSegments("/deeptalk")))
                        {
                            // Read the token out of the query string
                            Context.Token = accessToken;
                        }
                        return Task.CompletedTask;
                    }
                };
            });

            if (Database.Maps.FindSync(FilterDefinition<MapDB>.Empty).FirstOrDefault() == null)
            {
                Console.WriteLine("Maps not imported, processing import");
                Loader.LoadMaps();
            }
            if (Database.Items.FindSync(FilterDefinition<ItemDB>.Empty).FirstOrDefault() == null)
            {
                Console.WriteLine("Items not imported, processing import");
                Loader.LoadItems();
            }
            if (Database.Spells.FindSync(FilterDefinition<SpellDB>.Empty).FirstOrDefault() == null)
            {
                Console.WriteLine("Spells not imported, processing import");
                Loader.LoadSpells();
            }
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {


            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }



            app.UseHttpsRedirection();
            app.UseStaticFiles();
            if (!env.IsDevelopment())
            {
                app.UseSpaStaticFiles();
            }

            //Launch Handler Core
            Receiver.Initialize();

            //DataInit.SeedAndCreateRoles();

            app.UseRouting();
            //Identity
            app.UseAuthentication();
            app.UseAuthorization();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller}/{action=Index}/{id?}");
                endpoints.MapHub<DeepTalk>("/deeptalk");
            });

            app.UseSpa(spa =>
            {
                // To learn more about options for serving an Angular SPA from ASP.NET Core,
                // see https://go.microsoft.com/fwlink/?linkid=864501

                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseAngularCliServer(npmScript: "start");
                }
            });

            ///* création des roles si non présent */
            //DataInit.SeedAndCreateRoles(app.ApplicationServices).GetAwaiter().GetResult();
        }
    }
}