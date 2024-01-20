import { HttpClient } from '@angular/common/http'; // Import HttpClient
import { Injectable } from '@angular/core';
import { TaskWithId, TaskWithoutId } from '../models/task.model';
import { Observable } from 'rxjs';

interface TaskResponse {
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  baseApiUrl:string = "http://localhost:5193" //environment.baseApiUrl;
  constructor(private http:HttpClient) { }

  public getAlltasks():Observable<TaskWithId[]>{
    return this.http.get<TaskWithId[]>(`${this.baseApiUrl}/api/v1/Tasks/GetTasks`) 
  }

  public getTask(id:string):Observable<TaskWithId>{
    return this.http.get<TaskWithId>(`${this.baseApiUrl}/api/v1/Tasks/GetTask?id=${id}`)
  }

  public addTask(data:TaskWithoutId):Observable<TaskResponse>{
    return this.http.post<TaskResponse>(`${this.baseApiUrl}/api/v1/Tasks/AddTask`,data)
  }

  public deleteTask(id:string):Observable<TaskResponse>{
    return this.http.delete<TaskResponse>(`${this.baseApiUrl}/api/v1/Tasks/DeleteTask?id=${id}`)
  }

  public updateTask(task:TaskWithId):Observable<TaskResponse>{
    return this.http.put<TaskResponse>(`${this.baseApiUrl}/api/v1/Tasks/UpdateTask`,task)
  }
}
