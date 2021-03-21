import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'', redirectTo:'tool-list', pathMatch: 'full'
  },
  {
    path: 'tool-list',
    loadChildren: () => import('./modules/tool/tool.module').then(m => m.ToolModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
