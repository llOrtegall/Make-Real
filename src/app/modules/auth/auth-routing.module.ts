import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAuthComponent } from './page-auth/page-auth.component';

const routes: Routes = [
  {
    path: '',
    component: PageAuthComponent
  },
  {
    path: '**',
    component: PageAuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
