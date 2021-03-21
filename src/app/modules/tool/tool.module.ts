import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolListComponent } from './tool-list/tool-list.component';
import { ToolRoutingModule } from './tool-routing.module';

@NgModule({
  declarations: [ ToolListComponent ],
  imports: [
    CommonModule,
    ToolRoutingModule,
  ]
})
export class ToolModule { }
