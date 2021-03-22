import { MatSnackBar } from '@angular/material/snack-bar';
import { ToolService } from './../tool.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

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
    private _snackBar: MatSnackBar,
    @Inject(DOCUMENT) private document: Document

  ) { }

  ngOnInit() {
    this.dialogRemove = {
      title: 'Remove tool',
      subtitle: 'Are you sure you want to remove hotel?',
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

  remove(): void {
    this.toolService.deleteTool(this.data.id).subscribe();
    this.openSnackBar("Removed")
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, null, {
      duration: 2000,
      panelClass: ['snackbar'],
    });
    setTimeout(() => {
      this.dialogRef.close();
      this.someMethode()
    }, 1000);
  }

  someMethode() {
    this.document.location.reload();
  }
}
