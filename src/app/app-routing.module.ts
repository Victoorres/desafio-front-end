import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolsListComponent } from './modules/tools-list/tools-list.component';

const routes: Routes = [
  {
    path:'', redirectTo:'list-tools', pathMatch: 'full'
  },
  {
    path:'list-tools', component:ToolsListComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
