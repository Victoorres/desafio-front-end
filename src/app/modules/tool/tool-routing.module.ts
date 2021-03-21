import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolListComponent } from './tool-list/tool-list.component';

const routes: Routes = [
  { path: '', component: ToolListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToolRoutingModule { }
