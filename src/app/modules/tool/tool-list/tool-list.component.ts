import { ToolDialogRemoveComponent } from './../tool-dialog-remove/tool-dialog-remove.component';
import { MatDialog } from '@angular/material/dialog';
import { Tool } from './../../../class/tool';
import { ToolService } from './../tool.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ToolDialogAddComponent } from '../tool-dialog-add/tool-dialog-add.component';

@Component({
  selector: 'app-tool-list',
  templateUrl: './tool-list.component.html',
  styleUrls: ['./tool-list.component.css']
})
export class ToolListComponent implements OnInit {

  private _dialogRemoveStructure: any;
  public tools : Tool[] = [];
  public tag: string = null;
  public animal: string;
  public name: string;

  constructor(
    private toolService: ToolService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {

    this.dialogRemove = {
       title: 'VUTTR',
       subtitle: 'Very Useful Tools to Remember',
       checkbox: 'search in tags only!'
    }
    
    this.findTools();
  }
  
  findTools(){
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

  openAdd(): void {
    const dialogRef = this.dialog.open(ToolDialogAddComponent, {
      width: '550px'
      });
  }

  public get dialogRemove(): any {
    return this._dialogRemoveStructure;
  }

  public set dialogRemove(value: any) {
    this._dialogRemoveStructure = value;
  }
}
