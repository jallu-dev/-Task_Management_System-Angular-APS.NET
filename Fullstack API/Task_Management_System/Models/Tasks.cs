using System.ComponentModel.DataAnnotations;

namespace Task_Management_System.Models
{
    public class Tasks
    {
        [Key]
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string DueDate { get; set; }
        public string Status { get; set; }
    }
}
