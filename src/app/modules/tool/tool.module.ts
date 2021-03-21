import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolListComponent } from './tool-list/tool-list.component';
import { ToolRoutingModule } from './tool-routing.module';
import { MatCardModule } from '@angular/material/card';
import { ToolService } from './tool.service';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ToolDialogRemoveComponent } from './tool-dialog-remove/tool-dialog-remove.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [ ToolListComponent, ToolDialogRemoveComponent ],
  imports: [
    CommonModule,
    ToolRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  providers: [
    ToolService
  ]
})
export class ToolModule { }
