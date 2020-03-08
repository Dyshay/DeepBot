using System.Collections.Generic;

namespace DeepBot.Data.Model.Global
{
    public class Job
    {
        public JobIdEnum Id { get; set; } = JobIdEnum.JOB_NONE;
        public double ExperienceActual { get; set; } = 0;
        public double ExperienceMinLevel { get; set; } = 0;
        public double ExperienceLevelUp { get; set; } = 0;
        public List<JobSkill> Skills { get; set; } = new List<JobSkill>();
    }
}
