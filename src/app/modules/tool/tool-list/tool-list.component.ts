import { ToolDialogRemoveComponent } from './../tool-dialog-remove/tool-dialog-remove.component';
import { MatDialog } from '@angular/material/dialog';
import { Tool } from './../../../class/tool';
import { ToolService } from './../tool.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tool-list',
  templateUrl: './tool-list.component.html',
  styleUrls: ['./tool-list.component.css']
})
export class ToolListComponent implements OnInit {

  private _projectStructure: any;
  public tools : Tool[] = [];
  public tag: string = null;
  public animal: string;
  public name: string;

  constructor(
    private toolService: ToolService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {

    this.project = {
       title: 'VUTTR',
       subtitle: 'Very Useful Tools to Remember'
    }

    this.toolService.findToolByTag("").subscribe(response=>{
      this.tools = response;
    })
  }

  openDialog(toolId: number): void {
    const dialogRef = this.dialog.open(ToolDialogRemoveComponent, {
      width: '500px',
      data: {id: toolId}
    });
  }

  public get project(): any {
    return this._projectStructure;
  }

  public set project(value: any) {
    this._projectStructure = value;
  }
}
