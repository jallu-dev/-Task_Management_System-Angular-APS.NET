import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TasksService } from '../../../../services/tasks.service';
import { TaskWithId } from '../../../../models/task.model';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-task.component.html',
  styleUrl: './update-task.component.css'
})

export class UpdateTaskComponent implements OnInit {
  private id:string = ""
  newTaskFormData:TaskWithId ={
    id:"",
    title: "" ,
    description: "",
    dueDate: '',
    status: ''
  }  
  
  constructor(private activatedRoute:ActivatedRoute, private tasksService:TasksService,private router:Router){}
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get("id") || "";

    this.tasksService.getTask(this.id).subscribe({
      next:(response)=>{
        this.newTaskFormData = response  
      }
    })
  }

  updateTask(){
    this.tasksService.updateTask(this.newTaskFormData).subscribe({
      next:(response)=>{
        console.log(response);
        this.router.navigate(['/task-list'])
      }
    })
  }
}
