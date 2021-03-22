import { MatSnackBar } from '@angular/material/snack-bar';
import { ToolService } from '../tool.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-tool-dialog-add',
  templateUrl: './tool-dialog-add.component.html',
  styleUrls: ['./tool-dialog-add.component.css']
})

export class ToolDialogAddComponent implements OnInit {

  private _dialogAddStructure: any;

  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  tagCtrl = new FormControl();
  tags: string[] = [];
  tagForm: FormGroup;

  constructor(
    private toolService: ToolService,
    public dialog: MatDialog,
    protected builder: FormBuilder,
    public dialogRef: MatDialogRef<ToolDialogAddComponent>,
    private _snackBar: MatSnackBar,
    @Inject(DOCUMENT) private document: Document

  ) { }

  ngOnInit() {
    this.dialogAdd = {
      title: 'Add new tool',
      option: {
        yes: 'Add tool',
        no: 'Cancel'
      }
    }

    this.tagForm = this.builder.group(
      {
        id: null,
        title: [null, Validators.required],
        link: [null, Validators.required],
        description: null,
        tags: [
          this.tags
        ]
      },
      {}
    );
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.tags.push(value.trim());
    }

    if (input) {
      input.value = '';
    }

    this.tagCtrl.setValue(null);
  }

  remove(tag: string): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }

  addTool(tagForm: FormGroup): void {
    if (tagForm.valid) {
      this.toolService.save(tagForm.value).subscribe();
      this.openSnackBar("Created", "")
      setTimeout(() => {
        this.dialogRef.close();
        this.someMethode();
      }, 1000);
    } else {
      this.openSnackBar("Form invalid", "OK")
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
      panelClass: ['snackbar']
    });
  }

  public get dialogAdd(): any {
    return this._dialogAddStructure;
  }

  public set dialogAdd(value: any) {
    this._dialogAddStructure = value;
  }

  someMethode() {
    this.document.location.reload();
  }

}