using DeepBot.Data.Enums;
using DeepBot.Data.Generic;
using System;
using System.Collections.Generic;

namespace DeepBot.Data.Model.MapComponent.Interactives
{
    public class InteractiveObjectManager : Singleton<InteractiveObjectManager>
    {
        private readonly Dictionary<InteractiveObjectIdEnum, Func<int, int, InteractiveObject>> Interactives;
        private readonly Dictionary<int, InteractiveObjectIdEnum> Gfx;

        public InteractiveObjectManager()
        {
            Interactives = new Dictionary<InteractiveObjectIdEnum, Func<int, int, InteractiveObject>>();
            Gfx = new Dictionary<int, InteractiveObjectIdEnum>();
            Initialize();
        }

        public void Initialize()
        {
            // Autre
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_ZAAP, (mapId, cellId) => new WayPoint(mapId, cellId));
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_POUBELLE, (mapId, cellId) => new TrashCan(mapId, cellId));
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_PHOENIX, (mapId, cellId) => new Pheonix(mapId, cellId));

            // Craft
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_SCIE, (mapId, cellId) => new CraftPlan(mapId, cellId));
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_ENCLUME, (mapId, cellId) => new CraftPlan(mapId, cellId));
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_MACHINE_A_COUDRE, (mapId, cellId) => new CraftPlan(mapId, cellId));
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_MACHINE_A_COUDRE_1, (mapId, cellId) => new CraftPlan(mapId, cellId));
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_ATELIER, (mapId, cellId) => new CraftPlan(mapId, cellId));
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_ETABLI, (mapId, cellId) => new CraftPlan(mapId, cellId));
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_ETABLI_EN_BOIS, (mapId, cellId) => new CraftPlan(mapId, cellId));
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_ENCLUME_A_BOUCLIERS, (mapId, cellId) => new CraftPlan(mapId, cellId));
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_PLAN_DE_TRAVAIL, (mapId, cellId) => new CraftPlan(mapId, cellId));
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_PLAN_DE_TRAVAIL_1, (mapId, cellId) => new CraftPlan(mapId, cellId));
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_PLAN_DE_TRAVAIL_2, (mapId, cellId) => new CraftPlan(mapId, cellId));
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_PLAN_DE_TRAVAIL_3, (mapId, cellId) => new CraftPlan(mapId, cellId));
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_ALAMBIC, (mapId, cellId) => new CraftPlan(mapId, cellId));
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_ATELIER_DE_BRICOLAGE, (mapId, cellId) => new CraftPlan(mapId, cellId));
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_CONCASSEUR, (mapId, cellId) => new CraftPlan(mapId, cellId));
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_ETABLI_PYROTECHNIQUE, (mapId, cellId) => new CraftPlan(mapId, cellId));
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_FILEUSE, (mapId, cellId) => new CraftPlan(mapId, cellId));
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_FOUR, (mapId, cellId) => new CraftPlan(mapId, cellId));

            // Alchemiste
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_LIN, (mapId, cellId) => new HarvestableResource(mapId, cellId, 421, 10, true));
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_CHANVRE, (mapId, cellId) => new HarvestableResource(mapId, cellId, 428, 10, true));
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_TREFLE_A_5_FEUILLES, (mapId, cellId) => new HarvestableResource(mapId, cellId, 395, 10, true));
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_MENTHE_SAUVAGE, (mapId, cellId) => new HarvestableResource(mapId, cellId, 380, 10, true));
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_ORCHIDEE_FREYESQUE, (mapId, cellId) => new HarvestableResource(mapId, cellId, 593, 10, true));
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_EDELWEISS, (mapId, cellId) => new HarvestableResource(mapId, cellId, 594, 10, true));
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_PANDOUILLE, (mapId, cellId) => new HarvestableResource(mapId, cellId, 7059, 10, true));

            // Bois
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_FRENE, (mapId, cellId) => new HarvestableResource(mapId, cellId, 303, 10));
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_CHATAIGNIER, (mapId, cellId) => new HarvestableResource(mapId, cellId, 473, 10));
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_IF, (mapId, cellId) => new HarvestableResource(mapId, cellId, 461, 10));
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_ERABLE, (mapId, cellId) => new HarvestableResource(mapId, cellId, 471, 10));
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_CHARME, (mapId, cellId) => new HarvestableResource(mapId, cellId, 472, 10));
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_CHENE, (mapId, cellId) => new HarvestableResource(mapId, cellId, 460, 10));
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_NOYER, (mapId, cellId) => new HarvestableResource(mapId, cellId, 476, 10));
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_EBENE, (mapId, cellId) => new HarvestableResource(mapId, cellId, 449, 10));
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_KALIPTUS, (mapId, cellId) => new HarvestableResource(mapId, cellId, 303, 10));
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_MERISIER, (mapId, cellId) => new HarvestableResource(mapId, cellId, 474, 10));
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_ORME, (mapId, cellId) => new HarvestableResource(mapId, cellId, 470, 10));
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_BAMBOU_SACRE, (mapId, cellId) => new HarvestableResource(mapId, cellId, 7014, 10));
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_BAMBOU_SOMBRE, (mapId, cellId) => new HarvestableResource(mapId, cellId, 7016, 10));
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_BAMBOU, (mapId, cellId) => new HarvestableResource(mapId, cellId, 7013, 10));
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_BOMBU, (mapId, cellId) => new HarvestableResource(mapId, cellId, 2358, 10));
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_OLIVIOLET, (mapId, cellId) => new HarvestableResource(mapId, cellId, 2357, 10));

            // Paysan
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_BLE, (mapId, cellId) => new HarvestableResource(mapId, cellId, 289, 10, true));
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_ORGE, (mapId, cellId) => new HarvestableResource(mapId, cellId, 400, 10, true));
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_AVOINE, (mapId, cellId) => new HarvestableResource(mapId, cellId, 533, 10, true));
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_HOUBLON, (mapId, cellId) => new HarvestableResource(mapId, cellId, 401, 10, true));
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_RIZ, (mapId, cellId) => new HarvestableResource(mapId, cellId, 7018, 10, true));
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_SEIGLE, (mapId, cellId) => new HarvestableResource(mapId, cellId, 532, 10, true));
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_MALT, (mapId, cellId) => new HarvestableResource(mapId, cellId, 405, 10, true));

            // Pêcheur
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_PETITS_POISSONS_MER, (mapId, cellId) => new HarvestableResource(mapId, cellId, 289, 10));
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_POISSONS_RIVIERE, (mapId, cellId) => new HarvestableResource(mapId, cellId, 289, 10));
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_PETITS_POISSONS_RIVIERE, (mapId, cellId) => new HarvestableResource(mapId, cellId, 1782, 10));
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_GROS_POISSONS_RIVIERE, (mapId, cellId) => new HarvestableResource(mapId, cellId, 289, 10));
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_POISSONS_MER, (mapId, cellId) => new HarvestableResource(mapId, cellId, 289, 10));
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_GROS_POISSONS_MER, (mapId, cellId) => new HarvestableResource(mapId, cellId, 289, 10));
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_POISSONS_GEANTS_RIVIERE, (mapId, cellId) => new HarvestableResource(mapId, cellId, 289, 10));
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_POISSONS_GEANTS_MER, (mapId, cellId) => new HarvestableResource(mapId, cellId, 289, 10));

            // Mineur
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_FER, (mapId, cellId) => new HarvestableResource(mapId, cellId, 312, 10));
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_PIERRE_CUIVREE, (mapId, cellId) => new HarvestableResource(mapId, cellId, 441, 10));
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_BRONZE, (mapId, cellId) => new HarvestableResource(mapId, cellId, 442, 10));
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_PIERRE_DE_KOBALTE, (mapId, cellId) => new HarvestableResource(mapId, cellId, 443, 10));
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_ARGENT, (mapId, cellId) => new HarvestableResource(mapId, cellId, 350, 10));
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_OR, (mapId, cellId) => new HarvestableResource(mapId, cellId, 313, 10));
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_PIERRE_DE_BAUXITE, (mapId, cellId) => new HarvestableResource(mapId, cellId, 446, 10));
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_ETAIN, (mapId, cellId) => new HarvestableResource(mapId, cellId, 444, 10));
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_MANGANESE, (mapId, cellId) => new HarvestableResource(mapId, cellId, 445, 10));
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_DOLOMITE, (mapId, cellId) => new HarvestableResource(mapId, cellId, 7033, 10));
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_SILICATE, (mapId, cellId) => new HarvestableResource(mapId, cellId, 7032, 10));

            // Enclos 
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_ENCLOS, (mapId, cellId) => new PaddockDoor(mapId, cellId));

            // Porte
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_PORTE, (mapId, cellId) => new HouseDoor(mapId, cellId));

            // Coffre
            Interactives.Add(InteractiveObjectIdEnum.INTERACTIVE_COFFRE, (mapId, cellId) => new Chest(mapId, cellId));

            Gfx.Add(7500, InteractiveObjectIdEnum.INTERACTIVE_FRENE);
            Gfx.Add(7003, InteractiveObjectIdEnum.INTERACTIVE_SCIE);
            Gfx.Add(7503, InteractiveObjectIdEnum.INTERACTIVE_CHENE);
            Gfx.Add(7011, InteractiveObjectIdEnum.INTERACTIVE_TABLE_DE_CONFECTION);
            Gfx.Add(7008, InteractiveObjectIdEnum.INTERACTIVE_ATELIER);
            Gfx.Add(7009, InteractiveObjectIdEnum.INTERACTIVE_ATELIER);
            Gfx.Add(7010, InteractiveObjectIdEnum.INTERACTIVE_ATELIER);
            Gfx.Add(7013, InteractiveObjectIdEnum.INTERACTIVE_ETABLI);
            Gfx.Add(7000, InteractiveObjectIdEnum.INTERACTIVE_ZAAP);
            Gfx.Add(7026, InteractiveObjectIdEnum.INTERACTIVE_ZAAP);
            Gfx.Add(7029, InteractiveObjectIdEnum.INTERACTIVE_ZAAP);
            Gfx.Add(4287, InteractiveObjectIdEnum.INTERACTIVE_ZAAP);
            Gfx.Add(7520, InteractiveObjectIdEnum.INTERACTIVE_FER);
            Gfx.Add(7001, InteractiveObjectIdEnum.INTERACTIVE_FOUR);
            Gfx.Add(7526, InteractiveObjectIdEnum.INTERACTIVE_ARGENT);
            Gfx.Add(7527, InteractiveObjectIdEnum.INTERACTIVE_OR);
            Gfx.Add(7528, InteractiveObjectIdEnum.INTERACTIVE_PIERRE_DE_BAUXITE);
            Gfx.Add(7002, InteractiveObjectIdEnum.INTERACTIVE_MOULE);
            Gfx.Add(7505, InteractiveObjectIdEnum.INTERACTIVE_IF);
            Gfx.Add(7507, InteractiveObjectIdEnum.INTERACTIVE_EBENE);
            Gfx.Add(7509, InteractiveObjectIdEnum.INTERACTIVE_ORME);
            Gfx.Add(7504, InteractiveObjectIdEnum.INTERACTIVE_ERABLE);
            Gfx.Add(7508, InteractiveObjectIdEnum.INTERACTIVE_CHARME);
            Gfx.Add(7501, InteractiveObjectIdEnum.INTERACTIVE_CHATAIGNIER);
            Gfx.Add(7502, InteractiveObjectIdEnum.INTERACTIVE_NOYER);
            Gfx.Add(7506, InteractiveObjectIdEnum.INTERACTIVE_MERISIER);
            Gfx.Add(7525, InteractiveObjectIdEnum.INTERACTIVE_PIERRE_DE_KOBALTE);
            Gfx.Add(7511, InteractiveObjectIdEnum.INTERACTIVE_BLE);
            Gfx.Add(7512, InteractiveObjectIdEnum.INTERACTIVE_HOUBLON);
            Gfx.Add(7005, InteractiveObjectIdEnum.INTERACTIVE_MEULE);
            Gfx.Add(7513, InteractiveObjectIdEnum.INTERACTIVE_LIN);
            Gfx.Add(7515, InteractiveObjectIdEnum.INTERACTIVE_ORGE);
            Gfx.Add(7516, InteractiveObjectIdEnum.INTERACTIVE_SEIGLE);
            Gfx.Add(7517, InteractiveObjectIdEnum.INTERACTIVE_AVOINE);
            Gfx.Add(7514, InteractiveObjectIdEnum.INTERACTIVE_CHANVRE);
            Gfx.Add(7518, InteractiveObjectIdEnum.INTERACTIVE_MALT);
            Gfx.Add(7510, InteractiveObjectIdEnum.INTERACTIVE_TAS_DE_PATATES);
            Gfx.Add(7006, InteractiveObjectIdEnum.INTERACTIVE_TABLE_A_PATATES);
            Gfx.Add(7007, InteractiveObjectIdEnum.INTERACTIVE_CONCASSEUR);
            Gfx.Add(7521, InteractiveObjectIdEnum.INTERACTIVE_ETAIN);
            Gfx.Add(7522, InteractiveObjectIdEnum.INTERACTIVE_PIERRE_CUIVREE);
            Gfx.Add(7524, InteractiveObjectIdEnum.INTERACTIVE_MANGANESE);
            Gfx.Add(7523, InteractiveObjectIdEnum.INTERACTIVE_BRONZE);
            Gfx.Add(7004, InteractiveObjectIdEnum.INTERACTIVE_SOURCE_DE_JOUVENCE);
            Gfx.Add(7012, InteractiveObjectIdEnum.INTERACTIVE_ENCLUME);
            Gfx.Add(7014, InteractiveObjectIdEnum.INTERACTIVE_MACHINE_A_COUDRE_1);
            Gfx.Add(7016, InteractiveObjectIdEnum.INTERACTIVE_MACHINE_A_COUDRE_1);
            Gfx.Add(7017, InteractiveObjectIdEnum.INTERACTIVE_MARMITE);
            Gfx.Add(7536, InteractiveObjectIdEnum.INTERACTIVE_EDELWEISS);
            Gfx.Add(7534, InteractiveObjectIdEnum.INTERACTIVE_MENTHE_SAUVAGE);
            Gfx.Add(7533, InteractiveObjectIdEnum.INTERACTIVE_TREFLE_A_5_FEUILLES);
            Gfx.Add(7535, InteractiveObjectIdEnum.INTERACTIVE_ORCHIDEE_FREYESQUE);
            Gfx.Add(6700, InteractiveObjectIdEnum.INTERACTIVE_PORTE);
            Gfx.Add(6701, InteractiveObjectIdEnum.INTERACTIVE_PORTE);
            Gfx.Add(6702, InteractiveObjectIdEnum.INTERACTIVE_PORTE);
            Gfx.Add(6703, InteractiveObjectIdEnum.INTERACTIVE_PORTE);
            Gfx.Add(6704, InteractiveObjectIdEnum.INTERACTIVE_PORTE);
            Gfx.Add(6705, InteractiveObjectIdEnum.INTERACTIVE_PORTE);
            Gfx.Add(6706, InteractiveObjectIdEnum.INTERACTIVE_PORTE);
            Gfx.Add(6707, InteractiveObjectIdEnum.INTERACTIVE_PORTE);
            Gfx.Add(6708, InteractiveObjectIdEnum.INTERACTIVE_PORTE);
            Gfx.Add(6709, InteractiveObjectIdEnum.INTERACTIVE_PORTE);
            Gfx.Add(6710, InteractiveObjectIdEnum.INTERACTIVE_PORTE);
            Gfx.Add(6711, InteractiveObjectIdEnum.INTERACTIVE_PORTE);
            Gfx.Add(6713, InteractiveObjectIdEnum.INTERACTIVE_PORTE);
            Gfx.Add(6714, InteractiveObjectIdEnum.INTERACTIVE_PORTE);
            Gfx.Add(6715, InteractiveObjectIdEnum.INTERACTIVE_PORTE);
            Gfx.Add(6716, InteractiveObjectIdEnum.INTERACTIVE_PORTE);
            Gfx.Add(6717, InteractiveObjectIdEnum.INTERACTIVE_PORTE);
            Gfx.Add(6718, InteractiveObjectIdEnum.INTERACTIVE_PORTE);
            Gfx.Add(6719, InteractiveObjectIdEnum.INTERACTIVE_PORTE);
            Gfx.Add(6720, InteractiveObjectIdEnum.INTERACTIVE_PORTE);
            Gfx.Add(6721, InteractiveObjectIdEnum.INTERACTIVE_PORTE);
            Gfx.Add(6722, InteractiveObjectIdEnum.INTERACTIVE_PORTE);
            Gfx.Add(6723, InteractiveObjectIdEnum.INTERACTIVE_PORTE);
            Gfx.Add(6724, InteractiveObjectIdEnum.INTERACTIVE_PORTE);
            Gfx.Add(6725, InteractiveObjectIdEnum.INTERACTIVE_PORTE);
            Gfx.Add(6726, InteractiveObjectIdEnum.INTERACTIVE_PORTE);
            Gfx.Add(6729, InteractiveObjectIdEnum.INTERACTIVE_PORTE);
            Gfx.Add(6730, InteractiveObjectIdEnum.INTERACTIVE_PORTE);
            Gfx.Add(6731, InteractiveObjectIdEnum.INTERACTIVE_PORTE);
            Gfx.Add(6732, InteractiveObjectIdEnum.INTERACTIVE_PORTE);
            Gfx.Add(6733, InteractiveObjectIdEnum.INTERACTIVE_PORTE);
            Gfx.Add(6734, InteractiveObjectIdEnum.INTERACTIVE_PORTE);
            Gfx.Add(6735, InteractiveObjectIdEnum.INTERACTIVE_PORTE);
            Gfx.Add(6736, InteractiveObjectIdEnum.INTERACTIVE_PORTE);
            Gfx.Add(6737, InteractiveObjectIdEnum.INTERACTIVE_PORTE);
            Gfx.Add(6738, InteractiveObjectIdEnum.INTERACTIVE_PORTE);
            Gfx.Add(6739, InteractiveObjectIdEnum.INTERACTIVE_PORTE);
            Gfx.Add(6740, InteractiveObjectIdEnum.INTERACTIVE_PORTE);
            Gfx.Add(6741, InteractiveObjectIdEnum.INTERACTIVE_PORTE);
            Gfx.Add(6742, InteractiveObjectIdEnum.INTERACTIVE_PORTE);
            Gfx.Add(6743, InteractiveObjectIdEnum.INTERACTIVE_PORTE);
            Gfx.Add(6744, InteractiveObjectIdEnum.INTERACTIVE_PORTE);
            Gfx.Add(6745, InteractiveObjectIdEnum.INTERACTIVE_PORTE);
            Gfx.Add(6746, InteractiveObjectIdEnum.INTERACTIVE_PORTE);
            Gfx.Add(6747, InteractiveObjectIdEnum.INTERACTIVE_PORTE);
            Gfx.Add(6748, InteractiveObjectIdEnum.INTERACTIVE_PORTE);
            Gfx.Add(6753, InteractiveObjectIdEnum.INTERACTIVE_PORTE);
            Gfx.Add(6749, InteractiveObjectIdEnum.INTERACTIVE_PORTE);
            Gfx.Add(6750, InteractiveObjectIdEnum.INTERACTIVE_PORTE);
            Gfx.Add(6751, InteractiveObjectIdEnum.INTERACTIVE_PORTE);
            Gfx.Add(6752, InteractiveObjectIdEnum.INTERACTIVE_PORTE);
            Gfx.Add(6754, InteractiveObjectIdEnum.INTERACTIVE_PORTE);
            Gfx.Add(6756, InteractiveObjectIdEnum.INTERACTIVE_PORTE);
            Gfx.Add(6755, InteractiveObjectIdEnum.INTERACTIVE_PORTE);
            Gfx.Add(6757, InteractiveObjectIdEnum.INTERACTIVE_PORTE);
            Gfx.Add(6758, InteractiveObjectIdEnum.INTERACTIVE_PORTE);
            Gfx.Add(6764, InteractiveObjectIdEnum.INTERACTIVE_PORTE);
            Gfx.Add(6765, InteractiveObjectIdEnum.INTERACTIVE_PORTE);
            Gfx.Add(6768, InteractiveObjectIdEnum.INTERACTIVE_PORTE);
            Gfx.Add(6759, InteractiveObjectIdEnum.INTERACTIVE_PORTE);
            Gfx.Add(6760, InteractiveObjectIdEnum.INTERACTIVE_PORTE);
            Gfx.Add(6761, InteractiveObjectIdEnum.INTERACTIVE_PORTE);
            Gfx.Add(6762, InteractiveObjectIdEnum.INTERACTIVE_PORTE);
            Gfx.Add(6769, InteractiveObjectIdEnum.INTERACTIVE_PORTE);
            Gfx.Add(6770, InteractiveObjectIdEnum.INTERACTIVE_PORTE);
            Gfx.Add(4516, InteractiveObjectIdEnum.INTERACTIVE_PORTE);
            Gfx.Add(6773, InteractiveObjectIdEnum.INTERACTIVE_PORTE);
            Gfx.Add(6774, InteractiveObjectIdEnum.INTERACTIVE_PORTE);
            Gfx.Add(6775, InteractiveObjectIdEnum.INTERACTIVE_PORTE);
            Gfx.Add(6776, InteractiveObjectIdEnum.INTERACTIVE_PORTE);
            Gfx.Add(7530, InteractiveObjectIdEnum.INTERACTIVE_PETITS_POISSONS_MER);
            Gfx.Add(7532, InteractiveObjectIdEnum.INTERACTIVE_POISSONS_RIVIERE);
            Gfx.Add(7529, InteractiveObjectIdEnum.INTERACTIVE_PETITS_POISSONS_RIVIERE);
            Gfx.Add(7537, InteractiveObjectIdEnum.INTERACTIVE_GROS_POISSONS_RIVIERE);
            Gfx.Add(7531, InteractiveObjectIdEnum.INTERACTIVE_POISSONS_MER);
            Gfx.Add(7538, InteractiveObjectIdEnum.INTERACTIVE_GROS_POISSONS_MER);
            Gfx.Add(7539, InteractiveObjectIdEnum.INTERACTIVE_POISSONS_GEANTS_RIVIERE);
            Gfx.Add(7540, InteractiveObjectIdEnum.INTERACTIVE_POISSONS_GEANTS_MER);
            Gfx.Add(7519, InteractiveObjectIdEnum.INTERACTIVE_PUITS);
            Gfx.Add(7350, InteractiveObjectIdEnum.INTERACTIVE_COFFRE);
            Gfx.Add(7351, InteractiveObjectIdEnum.INTERACTIVE_COFFRE);
            //Gfx.Add(7352, InteractiveObjectIdEnum.INTERACTIVE_COFFRE);
            Gfx.Add(7353, InteractiveObjectIdEnum.INTERACTIVE_COFFRE);
            Gfx.Add(7015, InteractiveObjectIdEnum.INTERACTIVE_MACHINE_A_COUDRE);
            Gfx.Add(7018, InteractiveObjectIdEnum.INTERACTIVE_ETABLI_EN_BOIS);
            Gfx.Add(7019, InteractiveObjectIdEnum.INTERACTIVE_ALAMBIC);
            Gfx.Add(7020, InteractiveObjectIdEnum.INTERACTIVE_ENCLUME_MAGIQUE);
            Gfx.Add(7021, InteractiveObjectIdEnum.INTERACTIVE_CONCASSEUR_MUNSTER);
            Gfx.Add(7022, InteractiveObjectIdEnum.INTERACTIVE_PLAN_DE_TRAVAIL_2);
            Gfx.Add(7025, InteractiveObjectIdEnum.INTERACTIVE_PLAN_DE_TRAVAIL);
            Gfx.Add(7024, InteractiveObjectIdEnum.INTERACTIVE_PLAN_DE_TRAVAIL_1);
            Gfx.Add(7023, InteractiveObjectIdEnum.INTERACTIVE_PLAN_DE_TRAVAIL_3);
            Gfx.Add(7541, InteractiveObjectIdEnum.INTERACTIVE_BOMBU);
            Gfx.Add(7543, InteractiveObjectIdEnum.INTERACTIVE_OMBRE_ETRANGE);
            Gfx.Add(7544, InteractiveObjectIdEnum.INTERACTIVE_PICHON);
            Gfx.Add(7542, InteractiveObjectIdEnum.INTERACTIVE_OLIVIOLET);
            Gfx.Add(7546, InteractiveObjectIdEnum.INTERACTIVE_MACHINE_DE_FORCE);
            Gfx.Add(7547, InteractiveObjectIdEnum.INTERACTIVE_MACHINE_DE_FORCE);
            Gfx.Add(7028, InteractiveObjectIdEnum.INTERACTIVE_ETABLI_PYROTECHNIQUE);
            Gfx.Add(7549, InteractiveObjectIdEnum.INTERACTIVE_KOINKOIN);
            Gfx.Add(7352, InteractiveObjectIdEnum.INTERACTIVE_POUBELLE);
            Gfx.Add(7030, InteractiveObjectIdEnum.INTERACTIVE_ZAAPI);
            Gfx.Add(7031, InteractiveObjectIdEnum.INTERACTIVE_ZAAPI);
            Gfx.Add(7027, InteractiveObjectIdEnum.INTERACTIVE_ENCLUME_A_BOUCLIERS);
            Gfx.Add(7553, InteractiveObjectIdEnum.INTERACTIVE_BAMBOU);
            Gfx.Add(7554, InteractiveObjectIdEnum.INTERACTIVE_BAMBOU_SOMBRE);
            Gfx.Add(7552, InteractiveObjectIdEnum.INTERACTIVE_BAMBOU_SACRE);
            Gfx.Add(7550, InteractiveObjectIdEnum.INTERACTIVE_RIZ);
            Gfx.Add(7551, InteractiveObjectIdEnum.INTERACTIVE_PANDOUILLE);
            Gfx.Add(7555, InteractiveObjectIdEnum.INTERACTIVE_DOLOMITE);
            Gfx.Add(7556, InteractiveObjectIdEnum.INTERACTIVE_SILICATE);
            Gfx.Add(7036, InteractiveObjectIdEnum.INTERACTIVE_MACHINE_A_COUDRE_MAGIQUE);
            Gfx.Add(7038, InteractiveObjectIdEnum.INTERACTIVE_ATELIER_MAGIQUE);
            Gfx.Add(7037, InteractiveObjectIdEnum.INTERACTIVE_TABLE_MAGIQUE);
            Gfx.Add(7035, InteractiveObjectIdEnum.INTERACTIVE_LISTE_DES_ARTISANS);
            Gfx.Add(6766, InteractiveObjectIdEnum.INTERACTIVE_ENCLOS);
            Gfx.Add(6767, InteractiveObjectIdEnum.INTERACTIVE_ENCLOS);
            Gfx.Add(6763, InteractiveObjectIdEnum.INTERACTIVE_ENCLOS);
            Gfx.Add(6772, InteractiveObjectIdEnum.INTERACTIVE_ENCLOS);
            Gfx.Add(7557, InteractiveObjectIdEnum.INTERACTIVE_KALIPTUS);
            Gfx.Add(7039, InteractiveObjectIdEnum.INTERACTIVE_ATELIER_DE_BRICOLAGE);
            Gfx.Add(7041, InteractiveObjectIdEnum.INTERACTIVE_LEVIER);
            Gfx.Add(7042, InteractiveObjectIdEnum.INTERACTIVE_LEVIER);
            Gfx.Add(7043, InteractiveObjectIdEnum.INTERACTIVE_LEVIER);
            Gfx.Add(7044, InteractiveObjectIdEnum.INTERACTIVE_LEVIER);
            Gfx.Add(7045, InteractiveObjectIdEnum.INTERACTIVE_LEVIER);
            Gfx.Add(1853, InteractiveObjectIdEnum.INTERACTIVE_STATUE_DE_CLASSE);
            Gfx.Add(1854, InteractiveObjectIdEnum.INTERACTIVE_STATUE_DE_CLASSE);
            Gfx.Add(1855, InteractiveObjectIdEnum.INTERACTIVE_STATUE_DE_CLASSE);
            Gfx.Add(1856, InteractiveObjectIdEnum.INTERACTIVE_STATUE_DE_CLASSE);
            Gfx.Add(1857, InteractiveObjectIdEnum.INTERACTIVE_STATUE_DE_CLASSE);
            Gfx.Add(1858, InteractiveObjectIdEnum.INTERACTIVE_STATUE_DE_CLASSE);
            Gfx.Add(1859, InteractiveObjectIdEnum.INTERACTIVE_STATUE_DE_CLASSE);
            Gfx.Add(1860, InteractiveObjectIdEnum.INTERACTIVE_STATUE_DE_CLASSE);
            Gfx.Add(1861, InteractiveObjectIdEnum.INTERACTIVE_STATUE_DE_CLASSE);
            Gfx.Add(1862, InteractiveObjectIdEnum.INTERACTIVE_STATUE_DE_CLASSE);
            Gfx.Add(1845, InteractiveObjectIdEnum.INTERACTIVE_STATUE_DE_CLASSE);
            Gfx.Add(2319, InteractiveObjectIdEnum.INTERACTIVE_STATUE_DE_CLASSE);

            Gfx.Add(4638, InteractiveObjectIdEnum.INTERACTIVE_PHOENIX);
        }

        public bool Exists(int gfx)
        {
            return Gfx.ContainsKey(gfx) && Interactives.ContainsKey(Gfx[gfx]);
        }

        public InteractiveObject Generate(int gfx, int mapId, int cellId)
        {
            return Interactives[Gfx[gfx]](mapId, cellId);
        }
    }
}
