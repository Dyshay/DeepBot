using System;
using System.Collections.Generic;
using System.Text;

namespace DeepBot.Data.Model.IA
{
    public class ConditionalAction
    {
        public OperatorType  Operator { get; set; }
        public ConditionalType ConditionalType { get; set; }
        public int ComparaValue { get; set; } /* 0 = true , 1 false  pour les conditioon de type bool*/
    }

    public enum ConditionalType
    {
        PA = 0,
        PM = 1,
        Life = 2,
        IsInvoc=3,
        EnemyRange=4,
        AllyRange=5,
        NbEnemy=6,
        NbAlly=7,
        AllyLife=8,
        Enemylife=9,
        IsBoss=10,
        NbEnemyHitted=11,
        Turn=12
    }
    public enum OperatorType
    {
        Inferior=0,
        InferiorEqual=1,
        Superior=2,
        SuperiorEqual=3,
        Equal=4
    }
}
