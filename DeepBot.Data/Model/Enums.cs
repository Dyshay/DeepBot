﻿namespace DeepBot.Data.Model
{
    #region Etat character enum 
    public enum CharacterState
    {
        DISCONNECTED = 0,
        CONNECTING = 1,
        IDLE = 2,
        WALKING = 3,
        GATHERING = 4,
        FIGHTING = 5,
        DIALOGING = 6,
        REGENERATING = 7,
        BANKING = 8,
        TRADING = 9,
    }
    #endregion

    #region Type item enum
    public enum ItemTypeEnum
    {
        TYPE_AMULETTE = 1,
        TYPE_ARC = 2,
        TYPE_BAGUETTE = 3,
        TYPE_BATON = 4,
        TYPE_DAGUES = 5,
        TYPE_EPEE = 6,
        TYPE_MARTEAU = 7,
        TYPE_PELLE = 8,
        TYPE_ANNEAU = 9,
        TYPE_CEINTURE = 10,
        TYPE_BOTTES = 11,
        TYPE_POTION = 12,
        TYPE_APRCHO_EXP = 13,
        TYPE_DONS = 14,
        TYPE_RESSOURCE = 15,
        TYPE_COIFFE = 16,
        TYPE_CAPE = 17,
        TYPE_FAMILIER = 18,
        TYPE_HACHE = 19,
        TYPE_OUTIL = 20,
        TYPE_PIOCHE = 21,
        TYPE_FAUX = 22,
        TYPE_DOFUS = 23,
        TYPE_QUETES = 24,
        TYPE_DOCUMENT = 25,
        TYPE_FM_POTION = 26,
        TYPE_TRANSFORM = 27,
        TYPE_BOOST_FOOD = 28,
        TYPE_BENEDICTION = 29,
        TYPE_MALEDICTION = 30,
        TYPE_RP_BUFF = 31,
        TYPE_PERSO_SUIVEUR = 32,
        TYPE_PAIN = 33,
        TYPE_CEREALE = 34,
        TYPE_FLEUR = 35,
        TYPE_PLANTE = 36,
        TYPE_BIERE = 37,
        TYPE_BOIS = 38,
        TYPE_MINERAIS = 39,
        TYPE_ALLIAGE = 40,
        TYPE_POISSON = 41,
        TYPE_BONBON = 42,
        TYPE_POTION_OUBLIE = 43,
        TYPE_POTION_METIER = 44,
        TYPE_POTION_SORT = 45,
        TYPE_FRUIT = 46,
        TYPE_OS = 47,
        TYPE_POUDRE = 48,
        TYPE_COMESTI_POISSON = 49,
        TYPE_PIERRE_PRECIEUSE = 50,
        TYPE_PIERRE_BRUTE = 51,
        TYPE_FARINE = 52,
        TYPE_PLUME = 53,
        TYPE_POIL = 54,
        TYPE_ETOFFE = 55,
        TYPE_CUIR = 56,
        TYPE_LAINE = 57,
        TYPE_GRAINE = 58,
        TYPE_Peau = 59,
        TYPE_HUILE = 60,
        TYPE_PELUCHE = 61,
        TYPE_POISSON_VIDE = 62,
        TYPE_VIANDE = 63,
        TYPE_VIANDE_CONSERVEE = 64,
        TYPE_QUEUE = 65,
        TYPE_METARIA = 66,
        TYPE_LEGUME = 68,
        TYPE_VIANDE_COMESTIBLE = 69,
        TYPE_TEINTURE = 70,
        TYPE_EQUIP_ALCHIMIE = 71,
        TYPE_OEUF_FAMILIER = 72,
        TYPE_MAITRISE = 73,
        TYPE_FEE_ARTIFICE = 74,
        TYPE_APRCHEMIN_SORT = 75,
        TYPE_APRCHEMIN_CARAC = 76,
        TYPE_CERTIFICAT_CHANIL = 77,
        TYPE_RUNE_FORGEMAGIE = 78,
        TYPE_BOISSON = 79,
        TYPE_OBJET_MISSION = 80,
        TYPE_SAC_DOS = 81,
        TYPE_BOUCLIER = 82,
        TYPE_PIERRE_AME = 83,
        TYPE_CLEFS = 84,
        TYPE_PIERRE_AME_PLEINE = 85,
        TYPE_POPO_OUBLI_PERCEP = 86,
        TYPE_APRCHO_RECHERCHE = 87,
        TYPE_PIERRE_MAGIQUE = 88,
        TYPE_CADEAUX = 89,
        TYPE_FANTOME_FAMILIER = 90,
        TYPE_DRAGODINDE = 91,
        TYPE_BOUFTOU = 92,
        TYPE_OBJET_ELEVAGE = 93,
        TYPE_OBJET_UTILISABLE = 94,
        TYPE_PLANCHE = 95,
        TYPE_ECORCE = 96,
        TYPE_CERTIF_MONTURE = 97,
        TYPE_RACINE = 98,
        TYPE_FILET_CAPTURE = 99,
        TYPE_SAC_RESSOURCE = 100,
        TYPE_ARBALETE = 102,
        TYPE_APTTE = 103,
        TYPE_AILE = 104,
        TYPE_OEUF = 105,
        TYPE_OREILLE = 106,
        TYPE_CARAAPCE = 107,
        TYPE_BOURGEON = 108,
        TYPE_OEIL = 109,
        TYPE_GELEE = 110,
        TYPE_COQUILLE = 111,
        TYPE_PRISME = 112,
        TYPE_OBJET_VIVANT = 113,
        TYPE_ARME_MAGIQUE = 114,
        TYPE_FRAGM_AME_SHUSHU = 115,
        TYPE_POTION_FAMILIER = 116,
    }
    #endregion

    #region Type slot enum
    public enum ItemSlotEnum
    {
        SLOT_INVENTORY = -1,
        SLOT_AMULET = 0,
        SLOT_WEAPON = 1,
        SLOT_LEFT_RING = 2,
        SLOT_BELT = 3,
        SLOT_RIGHT_RING = 4,
        SLOT_BOOTS = 5,
        SLOT_HAT = 6,
        SLOT_CAPE = 7,
        SLOT_PET = 8,
        SLOT_DOFUS_1 = 9,
        SLOT_DOFUS_2 = 10,
        SLOT_DOFUS_3 = 11,
        SLOT_DOFUS_4 = 12,
        SLOT_DOFUS_5 = 13,
        SLOT_DOFUS_6 = 14,
        SLOT_SHIELD = 15,
        SLOT_MOUNT = 16,

        SLOT_BOOST_MUTATION = 20,
        SLOT_BOOST_FOOD = 21,
        SLOT_BOOST_BENEDICTION = 22,
        SLOT_BOOST_BENEDICTION_1 = 23,
        SLOT_BOOST_MALEDICTION = 24,
        SLOT_BOOST_MALEDICTION_1 = 25,
        SLOT_BOOST_ROLEPLAY_BUFF = 26,
        SLOT_BOOST_FOLLOWER = 27,

        SLOT_ITEMBAR_1 = 35,
        SLOT_ITEMBAR_2 = 36,
        SLOT_ITEMBAR_3 = 37,
        SLOT_ITEMBAR_4 = 38,
        SLOT_ITEMBAR_5 = 39,
        SLOT_ITEMBAR_6 = 40,
        SLOT_ITEMBAR_7 = 41,
        SLOT_ITEMBAR_8 = 42,
        SLOT_ITEMBAR_9 = 43,
        SLOT_ITEMBAR_10 = 44,
        SLOT_ITEMBAR_11 = 45,
        SLOT_ITEMBAR_12 = 46,
        SLOT_ITEMBAR_13 = 47,
        SLOT_ITEMBAR_14 = 48,
    }
    #endregion

    #region Type effet List
    public enum EffectEnum : int
    {
        None = -1,

        // Armures
        AddArmorNeutral = -2,
        AddArmorEarth = -3,
        AddArmorFire = -4,
        AddArmorWater = -5,
        AddArmorAir = -6,

        Teleport = 4,
        PushBack = 5,
        PushFront = 6,
        Transpose = 8,
        Evasion = 9,
        DamageBrut = -7,

        TurnPass = 140,

        MPSteal = 77,
        MPBonus = 78,
        EcaflipChance = 79,
        LifeSteal = 82,
        APSteal = 84,
        ChanceSteal = 266,
        VitalitySteal = 267,
        AgilitySteal = 268,
        IntelligenceSteal = 269,
        WisdomSteal = 270,
        StrengthSteal = 271,

        DamageLifeWater = 85,
        DamageLifeEarth = 86,
        DamageLifeAir = 87,
        DamageLifeFire = 88,
        DamageLifeNeutral = 89,
        DamageDropLife = 90,
        StealWater = 91,
        StealEarth = 92,
        StealAir = 93,
        StealFire = 94,
        StealNeutral = 95,
        DamageWater = 96,
        DamageEarth = 97,
        DamageAir = 98,
        DamageFire = 99,
        DamageNeutral = 100,
        AddArmor = 105,
        AddArmorBis = 265,

        AddReflectDamageItem = 220,
        ReflectSpell = 106,
        AddReflectDamage = 107,
        Heal = 108,
        SelfDamage = 109,
        AddLife = 110,
        AddAP = 111,
        AddDamage = 112,
        MultiplyDamage = 114,

        AddAPBis = 120,
        AddAgility = 119,
        AddChance = 123,
        AddDamagePercent = 138,
        SubDamagePercent = 186,
        AddDamageCritic = 115,
        AddDamagePiege = 225,
        //AddDamagePiegePercent = 225,
        AddDamagePhysic = 142,
        AddDamageMagic = 143,
        AddEchecCritic = 122,
        AddAPDodge = 160,
        AddMPDodge = 161,
        AddStrength = 118,
        AddInitiative = 174,
        AddIntelligence = 126,
        AddInvocationMax = 182,
        AddMP = 128,
        AddPO = 117,
        AddPods = 158,
        AddProspection = 176,
        AddWisdom = 124,
        AddHealCare = 178,
        AddVitality = 125,
        SubAgility = 154,

        DamagePerAP = 131,
        IncreaseSpellDamage = 293,
        Mastery = 165,
        POSteal = 320,
        Punition = 672,
        Sacrifice = 765,

        SubChance = 152,
        SubDamage = 164,
        SubDamageCritic = 171,
        SubDamageMagic = 172,
        SubDamagePhysic = 173,
        SubAPDodge = 162,
        SubMPDodge = 163,
        SubStrength = 157,
        SubInitiative = 175,
        SubIntelligence = 155,
        SubAPDodgeable = 101,
        SubMPDodgeable = 127,
        SubAP = 168,
        SubMP = 169,
        SubPO = 116,
        SubPods = 159,
        SubProspection = 177,
        SubWisdom = 156,
        SubHealCare = 179,
        SubVitality = 153,

        InvocDouble = 180,
        Invocation = 181,
        InvocationStatic = 185,

        AddReduceDamagePhysic = 183,
        AddReduceDamageMagic = 184,

        AddReduceDamagePercentWater = 211,
        AddReduceDamagePercentEarth = 210,
        AddReduceDamagePercentAir = 212,
        AddReduceDamagePercentFire = 213,
        AddReduceDamagePercentNeutral = 214,
        AddReduceDamagePercentPvPWater = 251,
        AddReduceDamagePercentPvPEarth = 250,
        AddReduceDamagePercentPvPAir = 252,
        AddReduceDamagePercentPvPFire = 253,
        AddReduceDamagePercentPvPNeutral = 254,

        AddReduceDamageWater = 241,
        AddReduceDamageEarth = 240,
        AddReduceDamageAir = 242,
        AddReduceDamageFire = 243,
        AddReduceDamageNeutral = 244,
        AddReduceDamagePvPWater = 261,
        AddReduceDamagePvPEarth = 260,
        AddReduceDamagePvPAir = 262,
        AddReduceDamagePvPFire = 263,
        AddReduceDamagePvPNeutral = 264,

        SubReduceDamagePercentWater = 216,
        SubReduceDamagePercentEarth = 215,
        SubReduceDamagePercentAir = 217,
        SubReduceDamagePercentFire = 218,
        SubReduceDamagePercentNeutral = 219,
        SubReduceDamagePercentPvPWater = 255,
        SubReduceDamagePercentPvPEarth = 256,
        SubReduceDamagePercentPvPAir = 257,
        SubReduceDamagePercentPvPFire = 258,
        SubReduceDamagePercentPvpNeutral = 259,
        SubReduceDamageWater = 246,
        SubReduceDamageEarth = 245,
        SubReduceDamageAir = 247,
        SubReduceDamageFire = 248,
        SubReduceDamageNeutral = 249,

        PandaCarrier = 50,
        PandaLaunch = 51,
        Perception = 202,
        ChangeSkin = 149,
        SpellBoost = 293,
        UseTrap = 400,
        UseGlyph = 401,
        DoNothing = 666,
        PushFear = 783,
        AddChatiment = 788,
        AddState = 950,
        RemoveState = 951,
        Stealth = 150,
        DeleteAllBonus = 132,

        /* Potion rappel */
        TeleportSavedZaap = 600,

        /* Parchemins */
        AddJob = 603,
        AddSpell = 604,
        AddExperience = 605,
        AddCaractStrength = 607,
        AddCaractWisdom = 678,
        AddCaractChance = 608,
        AddCaractAgility = 609,
        AddCaractVitality = 610,
        AddCaractIntelligence = 611,
        AddCaractPoint = 612,
        AddSpellPoint = 613,

        /* Gateaux */
        AddEnergy = 139,

        /* Bourses */
        AddKamas = 194,

        /* Bonbons boosts combats */
        AddBoost = 811,

        InvocationInformations = 628,

        SoulStoneStats = 705,
        MountCaptureProba = 706,

        SoulCaptureBonus = 750,
        MountExpBonus = 751,

        RenameGuild = 725,


        LastEat = 808,

        LaunchFight = 905,

        AlignmentChange = 188,
        AlignmentId = 960,
        AlignmentGrade = 961,
        TargetLevel = 962,
        CreateTime = 963,
        TargetName = 964,

        LivingGfxId = 970,
        LivingMood = 971,
        LivingSkin = 972,
        LivingType = 973,
        LivingXp = 974,

        CanBeExchange = 983,
        MadeBy = 988,
        Owner = 987,
        MountOwner = 996,
        Name = 997,

        /* ACTION SPECIALES BDD SCRIPT */
        BddDialogReply = 2000,
        BddDialogLeave = 2001,
        BddOpenBank = 2002,
        BddAddStatistic = 2003,
        BddAddItem = 2004,
        BddTeleport = 2005,
        BddResetStats = 2006,
        BddResetSpells = 2007,
        BddAddJob = 2008,
        BddRemoveItem = 2009,
        BddCreateGuild = 2010,
        BddLaunchFight = 2011,
    }
    #endregion

    #region Cell type enum
    public enum CellTypes
    {
        NOT_WALKABLE = 0,
        INTERACTIVE_OBJECT = 1,
        TELEPORT_CELL = 2,
        UNKNOWN1 = 3,
        WALKABLE = 4,
        UNKNOWN2 = 5,
        PATH_1 = 6,
        PATH_2 = 7
    }
    #endregion

    #region Movement direction enum
    public enum MovementDirection
    {
        NONE,
        TOP,
        BOTTOM,
        LEFT,
        RIGHT,
    }
    #endregion

    #region Classe
    public enum Classe
    {
        Cra = 0,
        Enutrof = 1,
        Osamodas = 2,
        Iop = 3,
        Xelor = 4,
    }

    #endregion

    #region JobIdEnum
    public enum JobIdEnum
    {
        JOB_NONE = 0,
        JOB_BASE = 1,
        JOB_BUCHERON = 2,
        JOB_FORGEUR_EPEES = 11,
        JOB_SCULPTEUR_ARCS = 13,
        JOB_FORGEUR_DE_MARTEAUX = 14,
        JOB_CORDONNIER = 15,
        JOB_BIJOUTIER = 16,
        JOB_FORGEUR_DE_DAGUES = 17,
        JOB_SCULPTEUR_DE_BATONS = 18,
        JOB_SCULPTEUR_DE_BAGUETTES = 19,
        JOB_FORGEUR_DE_PELLES = 20,
        JOB_MINEUR = 24,
        JOB_BOULANGER = 25,
        JOB_ALCHIMISTE = 26,
        JOB_TAILLEUR = 27,
        JOB_PAYSAN = 28,
        JOB_FORGEUR_DE_HACHES = 31,
        JOB_PECHEUR = 36,
        JOB_CHASSEUR = 41,
        JOB_FORGEMAGE_DE_DAGUES = 43,
        JOB_FORGEMAGE_EPEES = 44,
        JOB_FORGEMAGE_DE_MARTEAUX = 45,
        JOB_FORGEMAGE_DE_PELLES = 46,
        JOB_FORGEMAGE_DE_HACHES = 47,
        JOB_SCULPTEMAGE_ARCS = 48,
        JOB_SCULPTEMAGE_DE_BAGUETTES = 49,
        JOB_SCULPTEMAGE_DE_BATONS = 50,
        JOB_BOUCHER = 56,
        JOB_POISSONNIER = 58,
        JOB_FORGEUR_DE_BOUCLIERS = 60,
        JOB_CORDOMAGE = 62,
        JOB_JOAILLOMAGE = 63,
        JOB_COSTUMAGE = 64,
        JOB_BRICOLEUR = 65,
        JOB_JOAILLIER = 66,
        JOB_BIJOUTIER_1 = 67,
        JOB_PAYSAN_1 = 70,
        JOB_PAYSAN_2 = 71,
        JOB_COUPE = 72,
    }
    #endregion

    #region SkillIdEnum
    public enum SkillIdEnum
    {
        SKILL_ACCEDER = 175,
        SKILL_ACHETER = 97,
        SKILL_ACHETER_ENCLOS = 176,
        SKILL_ACTIONNER = 179,
        SKILL_AMELIORER_DES_BOTTES = 163,
        SKILL_AMELIORER_UN_ANNEAU = 168,
        SKILL_AMELIORER_UN_CHAPEAU = 166,
        SKILL_AMELIORER_UN_SAC = 167,
        SKILL_AMELIORER_UNE_AMULETTE = 169,
        SKILL_AMELIORER_UNE_CAPE = 165,
        SKILL_AMELIORER_UNE_CEINTURE = 164,
        SKILL_BRICOLER = 171,
        SKILL_BRISER_UN_OBJET = 181,
        SKILL_COLLECTER_FER = 24,
        SKILL_COLLECTER_CUIVRE = 25,
        SKILL_COLLECTER_BRONZE = 26,
        SKILL_COLLECTER_KOBALTE = 28,
        SKILL_COLLECTER_ARGENT = 29,
        SKILL_COLLECTER_OR = 30,
        SKILL_COLLECTER_BAUXITE = 31,
        SKILL_COLLECTER_ETAIN = 55,
        SKILL_COLLECTER_MANGANESE = 56,
        SKILL_COLLECTER_DOLOMITE = 161,
        SKILL_COLLECTER_SILICATE = 162,
        SKILL_COLLECTER_11 = 192,
        SKILL_CONCASSER_DES_RESSOURCES = 121,
        SKILL_CONFECTIONNER_DES_BOTTES = 13,
        SKILL_CONFECTIONNER_UNE_CEINTURE = 14,
        SKILL_CONFECTIONNER_UNE_CLEF = 182,
        SKILL_CONSULTER = 170,
        SKILL_COUDRE_UN_CHAPEAU = 63,
        SKILL_COUDRE_UN_SAC = 123,
        SKILL_COUDRE_UNE_CAPE = 64,
        SKILL_COUPER_FRENE = 6,
        SKILL_COUPER_CHENE = 10,
        SKILL_COUPER_IF = 33,
        SKILL_COUPER_EBENE = 34,
        SKILL_COUPER_ORME = 35,
        SKILL_COUPER_ERABLE = 37,
        SKILL_COUPER_CHARME = 38,
        SKILL_COUPER_CHATAIGNER = 39,
        SKILL_COUPER_NOYER = 40,
        SKILL_COUPER_MERISIER = 41,
        SKILL_COUPER_BOMBU = 139,
        SKILL_COUPER_OLIVIOLET = 141,
        SKILL_COUPER_BAMBOU = 154,
        SKILL_COUPER_BAMBOUSACRE = 155,
        SKILL_COUPER_BAMBOUSOMBRE = 158,
        SKILL_COUPER_KALIPTUS = 174,
        SKILL_COUPER_16 = 190,
        SKILL_CREER_UN_ANNEAU = 11,
        SKILL_CREER_UNE_AMULETTE = 12,
        SKILL_CUEILLIR_LIN = 68,
        SKILL_CUEILLIR_CHANVRE = 69,
        SKILL_CUEILLIR_TREFLE = 71,
        SKILL_CUEILLIR_MENTHE = 72,
        SKILL_CUEILLIR_ORCHIDEE = 73,
        SKILL_CUEILLIR_EDELWEISS = 74,
        SKILL_CUEILLIR_PANDOUILLE = 160,
        SKILL_CUEILLIR_7 = 188,
        SKILL_CUIRE_DU_PAIN = 27,
        SKILL_DEVERROUILLER = 100,
        SKILL_DEVERROUILLER_1 = 106,
        SKILL_EGRENER = 122,
        SKILL_ENTRER = 84,
        SKILL_EPLUCHER = 22,
        SKILL_FAIRE_DE_LA_BIERE = 96,
        SKILL_FAIRE_DES_BONBONS = 109,
        SKILL_FAUCHER_BLE = 45,
        SKILL_FAUCHER_HOUBLON = 46,
        SKILL_FAUCHER_LIN = 50,
        SKILL_FAUCHER_SEIGLE = 52,
        SKILL_FAUCHER_ORGE = 53,
        SKILL_FAUCHER_CHANVRE = 54,
        SKILL_FAUCHER_AVOINE = 57,
        SKILL_FAUCHER_MALT = 58,
        SKILL_FAUCHER_RIZ = 159,
        SKILL_FAUCHER_9 = 191,
        SKILL_FILER = 95,
        SKILL_FONDRE = 32,
        SKILL_FORGER_UN_BOUCLIER = 156,
        SKILL_FORGER_UN_MARTEAU = 19,
        SKILL_FORGER_UNE_DAGUE = 18,
        SKILL_FORGER_UNE_EPEE = 20,
        SKILL_FORGER_UNE_FAUX = 66,
        SKILL_FORGER_UNE_HACHE = 65,
        SKILL_FORGER_UNE_PELLE = 21,
        SKILL_FORGER_UNE_PIOCHE = 67,
        SKILL_FOUILLER = 153,
        SKILL_INVOQUER_UNE_FEE = 151,
        SKILL_JOUER = 150,
        SKILL_MODIFIER_LE_PRIX_DE_VENTE = 108,
        SKILL_MODIFIER_LE_PRIX_DE_VENTE_1 = 178,
        SKILL_MOUDRE = 47,
        SKILL_OUVRIR = 104,
        SKILL_POLIR_UNE_PIERRE = 48,
        SKILL_PREPARER = 132,
        SKILL_PREPARER_UN_POISSON = 135,
        SKILL_PREPARER_UNE_VIANDE = 134,
        SKILL_PREPARER_UNE_POTION = 23,
        SKILL_PUISER = 102,
        SKILL_PECHER_GOUJON = 124,
        SKILL_PECHER_TRUITE = 125,
        SKILL_PECHER_POISSONCHATON = 126,
        SKILL_PECHER_BROCHET = 127,
        SKILL_PECHER_GREUVETTE = 128,
        SKILL_PECHER_CRABESOURIMI = 129,
        SKILL_PECHER_POISSONPANE = 130,
        SKILL_PECHER_SARDINEBRILLANTE = 131,
        SKILL_PECHER_PICHONEUDCOMPET = 136,
        SKILL_PECHER_KRALAMOURE = 140,
        SKILL_PECHER_SARDINEBRILLANTE_1 = 189,
        SKILL_PECHER_KOINKOIN = 152,
        SKILL_RAMASSER = 42,
        SKILL_REFORGER_UN_MARTEAU = 116,
        SKILL_REFORGER_UNE_DAGUE = 1,
        SKILL_REFORGER_UNE_EPEE = 113,
        SKILL_REFORGER_UNE_HACHE = 115,
        SKILL_REFORGER_UNE_PELLE = 117,
        SKILL_RESCULPTER_UN_ARC = 118,
        SKILL_RESCULPTER_UN_BATON = 120,
        SKILL_RESCULPTER_UNE_BAGUETTE = 119,
        SKILL_REPARER_UN_ARC = 149,
        SKILL_REPARER_UN_BATON = 147,
        SKILL_REPARER_UN_MARTEAU = 144,
        SKILL_REPARER_UNE_BAGUETTE = 148,
        SKILL_REPARER_UNE_DAGUE = 142,
        SKILL_REPARER_UNE_EPEE = 145,
        SKILL_REPARER_UNE_HACHE = 143,
        SKILL_REPARER_UNE_PELLE = 146,
        SKILL_SAUVEGARDER = 44,
        SKILL_SCIER = 101,
        SKILL_SCULPTER_UN_ARC = 15,
        SKILL_SCULPTER_UN_BATON = 17,
        SKILL_SCULPTER_UNE_BAGUETTE = 16,
        SKILL_SE_FAIRE_TRANSPORTER = 157,
        SKILL_SE_RENDRE_A_INCARNAM = 183,
        SKILL_SE_REGENERER = 62,
        SKILL_SE_REGENERER_1 = 111,
        SKILL_SORTIR = 187,
        SKILL_UTILISER_ZAAP = 114,
        SKILL_UTILISER = 184,
        SKILL_UTILISER_ETABLI = 110,
        SKILL_VENDRE = 98,
        SKILL_VENDRE_1 = 177,
        SKILL_VERROUILLER = 81,
        SKILL_VERROUILLER_1 = 105,
        SKILL_VIDER_POISSON = 133,
        SKILL_REF_COFFREMAISON = 185,
        SKILL_REF_MAISON = 186,

        SKILL_USE_PHOENIX = 300,
    }
    #endregion

    #region ExchangeTypeEnum
    public enum ExchangeTypeEnum
    {
        EXCHANGE_SHOP = 0, // Merchant/npc
        EXCHANGE_PLAYER = 1,
        EXCHANGE_NPC = 2,
        EXCHANGE_CRAFTPLAN = 3,
        EXCHANGE_MERCHANT = 4,
        EXCHANGE_STORAGE = 5,
        EXCHANGE_TAXCOLLECTOR = 8,
        EXCHANGE_PERSONAL_SHOP_EDIT = 6,
        EXCHANGE_AUCTION_HOUSE_SELL = 10,
        EXCHANGE_AUCTION_HOUSE_BUY = 11,
        EXCHANGE_MOUNT_STORAGE = 16,
        EXCHANGE_MOUNT = 15
    }
    #endregion
}
