import { MatSnackBar } from '@angular/material/snack-bar';
import { ToolService } from './../tool.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Input, OnInit, Inject, Output, EventEmitter } from '@angular/core';

export interface DialogData {
  id: number;
}

@Component({
  selector: 'app-tool-dialog-remove',
  templateUrl: './tool-dialog-remove.component.html',
  styleUrls: ['./tool-dialog-remove.component.css']
})


export class ToolDialogRemoveComponent implements OnInit {

  private _dialogRemoveStructure: any;

  constructor(
    public dialogRef: MatDialogRef<ToolDialogRemoveComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public toolService: ToolService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {

    this.dialogRemove = {
      title: 'Remove tool',
      subtitle: 'Are you sure want to remove hotel?',
      option: {
        yes: 'Yes, remove',
        no: 'Cancel'
      }
   }
  }
  
  public get dialogRemove(): any {
    return this._dialogRemoveStructure;
  }

  public set dialogRemove(value: any) {
    this._dialogRemoveStructure = value;
  }

  cancel(): void {
    this.dialogRef.close();
  }

  remove(): void{
    this.toolService.deleteTool(this.data.id).subscribe();
    this.openSnackBar("Removed", "OK")
    setTimeout(() => {
      this.dialogRef.close();
    }, 400);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
