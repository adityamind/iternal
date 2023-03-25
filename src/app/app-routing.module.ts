import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  {
    path:'signin',
    loadChildren:()=>import('./modules/users/users.module').then(m=>m.UsersModule)
  },
  {
    path:'home',
    loadChildren:()=>import('./modules/main/main.module').then(m=>m.MainModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
