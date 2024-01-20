import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../../../../services/tasks.service';
import { TaskWithoutId } from '../../../../models/task.model';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})

export class AddTaskComponent implements OnInit {
  taskFormData:TaskWithoutId ={
    title: "" ,
    description: "",
    dueDate: '',
    status: ''
  }

  constructor(private tasksService:TasksService){}

  addTask() {
    this.taskFormData.title = this.taskFormData.title
    this.taskFormData.description = this.taskFormData.description
    this.taskFormData.dueDate = this.taskFormData.dueDate
    this.taskFormData.status = this.taskFormData.status


    this.tasksService.addTask(this.taskFormData).subscribe({
      next:(response)=>{
         if(response.message == "Task Added"){
           return window.location.replace("/task-list");
         }
      }
    })
  }

  ngOnInit(): void {
    
  }
}
