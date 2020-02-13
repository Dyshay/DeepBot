using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DeepBot.Data.Database;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DeepBot.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GroupController : ControllerBase
    {

        [HttpPost]
        [Authorize]
        [Route("CreateGroup")]
        public GroupDB CreateGroup(GroupDB group)
        {
            return null;
        }
    }
}