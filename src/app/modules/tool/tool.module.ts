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
import {MatCheckboxDefaultOptions, MatCheckboxModule, MAT_CHECKBOX_DEFAULT_OPTIONS} from '@angular/material/checkbox';
import { ToolDialogAddComponent } from './tool-dialog-add/tool-dialog-add.component';
import {MatChipsModule} from '@angular/material/chips';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ ToolListComponent, ToolDialogRemoveComponent, ToolDialogAddComponent ],
  imports: [
    CommonModule,
    ToolRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    MatChipsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    ToolService,
  ]
})
export class ToolModule { }
