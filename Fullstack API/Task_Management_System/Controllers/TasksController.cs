using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using Task_Management_System.Models;

namespace Task_Management_System.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class TasksController : ControllerBase
    {
        private readonly TaskContext taskContext;

        public TasksController(TaskContext taskContext)
        {
            this.taskContext = taskContext;
        }

        [HttpGet]
        [Route("GetTasks")]
        public async Task<List<Tasks>> GetTasks()
        {
            return await taskContext.Tasks.ToListAsync();
        }

        [HttpGet]
        [Route("GetTask")]
        public async Task<Tasks> GetTask(int id)
        {
            return await taskContext.Tasks.Where(task => task.Id == id).FirstOrDefaultAsync();
        }

        [HttpPost]
        [Route("AddTask")]
        public async Task<IActionResult> AddTask(Tasks task)
        {
            await taskContext.Tasks.AddAsync(task);
            await taskContext.SaveChangesAsync();
            return Ok(new { message = "Task Added" });
        }
        
        [HttpPut]
        [Route("UpdateTask")]
        public async Task<IActionResult> UpdateTask(Tasks task)
        {
            taskContext.Entry(task).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            await taskContext.SaveChangesAsync();
            return Ok(new { message = "Task Updated" });
        }

        [HttpDelete]
        [Route("DeleteTask")]
        public async Task<IActionResult> DeleteTask(string id)
        {
            if (!int.TryParse(id, out int taskId))
            {
                return BadRequest("Invalid task ID format");
            }

            Tasks task = await taskContext.Tasks.FindAsync(taskId);

            if (task == null)
            {
                return NotFound("Task not found");
            }

            System.Diagnostics.Debug.WriteLine($"Task found: {task.Title}");

            taskContext.Tasks.Remove(task);
            await taskContext.SaveChangesAsync();

            System.Diagnostics.Debug.WriteLine($"Task deletion logic executed");

            return Ok(new { message = "Task Deleted", task = task });
        }

    }
}
