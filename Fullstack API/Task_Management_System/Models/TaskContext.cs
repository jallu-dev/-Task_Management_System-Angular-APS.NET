using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Task_Management_System.Models
{
    public class TaskContext:DbContext
    {
        public TaskContext(DbContextOptions options):base(options) { }
        public DbSet<Tasks> Tasks { get; set; }

    }
}
