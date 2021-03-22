import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs/Observable';

import { Tool } from './../../class/tool';

@Injectable()
export class ToolService {
  protected url = `${environment.api.url}/tools`;

  constructor(public http: HttpClient) { }

  findToolByTag(tag: string): Observable<Tool[]> {
    return this.http.get<Tool[]>(`${this.url}?tag=${tag}`);
  }

  findToolByTitleLinkDescriptionTag(data: string): Observable<Tool[]> {
    return this.http.get<Tool[]>(`${this.url}/filter?data=${data}`);
  }

  findToolById(id: number): Observable<Tool> {
    return this.http.get<Tool>(`${this.url}/${id}`);
  }

  deleteTool(id: number): Observable<Tool> {
    return this.http.delete<Tool>(`${this.url}/${id}`);
  }

  save(data: Tool): Observable<Tool> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<Tool>(`${this.url}`, JSON.stringify(data), httpOptions);
  }
}
