import { ToolService } from './../tool.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tool-dialog-remove',
  templateUrl: './tool-dialog-remove.component.html',
  styleUrls: ['./tool-dialog-remove.component.css']
})
export class ToolDialogRemoveComponent implements OnInit {

  private _dialogStructure: any;

  constructor(
    public dialogRef: MatDialogRef<ToolDialogRemoveComponent>,
    public toolService: ToolService
  ) { }

  ngOnInit() {

    this.dialog = {
      title: 'Remove tool',
      subtitle: 'Are you sure want to remove hotel?',
      option: {
        yes: 'Yes, remove',
        no: 'Cancel'
      }
   }
  }

  
  public get dialog(): any {
    return this._dialogStructure;
  }

  public set dialog(value: any) {
    this._dialogStructure = value;
  }

  cancel(): void {
    this.dialogRef.close();
  }

  remove(): void{
    // this.toolService
  }

}
