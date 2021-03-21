import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolListComponent } from './tool-list/tool-list.component';
import { ToolRoutingModule } from './tool-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ToolService } from './tool.service';

@NgModule({
  declarations: [ ToolListComponent ],
  imports: [
    CommonModule,
    ToolRoutingModule,
    MatCardModule,
    MatIconModule,
    MatInputModule
  ],
  providers: [
    ToolService
  ]
})
export class ToolModule { }
