import { MatSnackBar } from '@angular/material/snack-bar';
import { ToolService } from '../tool.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Tool } from 'src/app/class/tool';
export interface DialogData {
  id: number;
}

@Component({
  selector: 'app-tool-dialog-add',
  templateUrl: './tool-dialog-add.component.html',
  styleUrls: ['./tool-dialog-add.component.css']
})


export class ToolDialogAddComponent implements OnInit {

  private _dialogAddStructure: any;
  tagForm: FormGroup;


  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  tagCtrl = new FormControl();
  tags: string[] = [];

  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor( 
    private toolService: ToolService,
    public dialog: MatDialog,
    protected builder: FormBuilder,
    public dialogRef: MatDialogRef<ToolDialogAddComponent>,
    private _snackBar: MatSnackBar

) {  }

ngOnInit(){
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
    title: null,
    link: null,
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

    // Add our fruit
    if ((value || '').trim()) {
      this.tags.push(value.trim());
    }

    // Reset the input value
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

  addTool(tagForm: Tool): void{
    this.toolService.save(tagForm).subscribe();
    this.openSnackBar("Created", "OK")
    setTimeout(() => {
      this.dialogRef.close();
    }, 400);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  public get dialogAdd(): any {
    return this._dialogAddStructure;
  }

  public set dialogAdd(value: any) {
    this._dialogAddStructure = value;
  }
}