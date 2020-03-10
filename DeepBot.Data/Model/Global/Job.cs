using System.Collections.Generic;

namespace DeepBot.Data.Model.Global
{
    public class Job
    {
        public JobIdEnum Id { get; set; } = JobIdEnum.JOB_NONE;
        public int Level { get; set; } = 0;
        public int ExperienceActual { get; set; } = 0;
        public int ExperienceMinLevel { get; set; } = 0;
        public int ExperienceLevelUp { get; set; } = 0;
        public List<JobSkill> Skills { get; set; } = new List<JobSkill>();
    }
}
