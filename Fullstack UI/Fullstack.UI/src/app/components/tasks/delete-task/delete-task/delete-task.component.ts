import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TasksService } from '../../../../services/tasks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-task',
  standalone: true,
  imports: [],
  templateUrl: './delete-task.component.html',
  styleUrl: './delete-task.component.css'
})

export class DeleteTaskComponent implements OnInit {
  private id:string=""
  constructor(private route: ActivatedRoute, private tasksService: TasksService, private router:Router){}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.tasksService.deleteTask(this.id).subscribe({
      next:(response)=>{
        console.log(response);
        this.router.navigate(['/task-list'])
      },
      error:(error)=>{
        console.log(error);
        this.router.navigate(['/task-list'])

      },
      complete: () => {
        console.log('Observable completed');
        this.router.navigate(['/task-list'])

      }
    })
  }
}
