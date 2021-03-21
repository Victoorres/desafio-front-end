import { ToolService } from './../tool.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tool-list',
  templateUrl: './tool-list.component.html',
  styleUrls: ['./tool-list.component.css']
})
export class ToolListComponent implements OnInit {

  private _projectStructure: any;

  constructor(
    private toolService: ToolService
  ) { }

  ngOnInit() {

    this.project = {
       title: 'VUTTR',
       subtitle: 'Very Useful Tools to Remember'
    }

    this.toolService.findToolByTag("").subscribe(response=>{
      console.log(response);
      
    })
  }

  public get project(): any {
    return this._projectStructure;
  }

  public set project(value: any) {
    this._projectStructure = value;
  }

}
