import { ToolDialogRemoveComponent } from './../tool-dialog-remove/tool-dialog-remove.component';
import { MatDialog } from '@angular/material/dialog';
import { Tool } from './../../../class/tool';
import { ToolService } from './../tool.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToolDialogAddComponent } from '../tool-dialog-add/tool-dialog-add.component';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-tool-list',
  templateUrl: './tool-list.component.html',
  styleUrls: ['./tool-list.component.css']
})


export class ToolListComponent implements OnInit {

  private _projectStructure: any;
  public tools: Tool[] = [];
  public tag: string = null;
  public animal: string;
  public name: string;
  public filter: FormGroup;
  public checked: boolean = true;

  @ViewChild('search', { static: false })
  private searchInput: ElementRef

  constructor(
    private toolService: ToolService,
    public dialog: MatDialog,
    public builder: FormBuilder
  ) { }

  ngOnInit() {

    setTimeout(() => {
      fromEvent(this.searchInput.nativeElement, 'keyup').pipe(
        map((event: any) => event.target.value),
        debounceTime(300)
      ).subscribe((value: string) => this.search(value)
      )
    }, 500);

    this.projectStructure = {
      title: 'VUTTR',
      subtitle: 'Very Useful Tools to Remember',
      checkbox: 'search in tags only!'
    }

    this.findTools("");

    this.filter = this.builder.group({
      search: [null]
    })
  }

  findTools(tag: string) {
    this.toolService.findToolByTag(tag).subscribe(response => {
      this.tools = response;
    })
  }

  openDialog(toolId: number): void {
    const dialogRef = this.dialog.open(ToolDialogRemoveComponent, {
      width: '500px',
      data: { id: toolId }
    });
  }

  openAdd(): void {
    const dialogRef = this.dialog.open(ToolDialogAddComponent, {
      width: '550px'
    });
  }

  search(data: any): any {
    if (this.checked) {
      this.findTools(data);
    } else {
      this.tools = [];
      this.filterSearch(data);
    }
  }

  reset() {
    (document.getElementById('search') as HTMLInputElement).value = null
    this.findTools("");
  }

  filterSearch(data: string) {
    this.toolService.findToolByTitleLinkDescriptionTag(data).subscribe(response => {
      this.tools = response;
    })
  }

  public get projectStructure(): any {
    return this._projectStructure;
  }

  public set projectStructure(value: any) {
    this._projectStructure = value;
  }
}
