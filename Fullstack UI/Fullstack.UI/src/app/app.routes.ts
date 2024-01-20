import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TaskListComponent } from './components/tasks/task-list/task-list.component';
import { AddTaskComponent } from './components/tasks/add-task/add-task/add-task.component';
import { DeleteTaskComponent } from './components/tasks/delete-task/delete-task/delete-task.component';
import { UpdateTaskComponent } from './components/tasks/update-task/update-task/update-task.component';

export const routes: Routes = [{
    path:"",
    component:TaskListComponent
},{
    path:"task-list",
    component:TaskListComponent
},{
    path:"tasks/add",
    component:AddTaskComponent
},{
    path:"tasks/delete/:id",
    component:DeleteTaskComponent
},{
    path:"tasks/update/:id",
    component:UpdateTaskComponent
}];

