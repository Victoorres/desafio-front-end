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
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [ ToolListComponent, ToolDialogRemoveComponent ],
  imports: [
    CommonModule,
    ToolRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule
  
  ],
  providers: [
    ToolService
  ]
})
export class ToolModule { }
