import { Component, OnInit } from '@angular/core';
import { TaskWithId } from '../../../models/task.model';
import { TasksService } from '../../../services/tasks.service';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {

  tasks:TaskWithId[]= [];
  constructor(private tasksService:TasksService){}

  ngOnInit(): void {
    this.tasksService.getAlltasks().subscribe({
       next:(tasks)=>{
        this.tasks = tasks
       },
       error:(error)=>{
        console.log(error);
       }
    })
  }
}
 