import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DishComponent } from './domain/views/dish/dish.component';
import { HomeComponent } from './domain/views/home/home.component';
import { LoginComponent } from './domain/views/login/login.component';
import { NotFoundPage } from './domain/views/notFound/notFound.component';
import { RegisterComponent } from './domain/views/register/register.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'inicio', component:HomeComponent},
  {path:'dish', component:DishComponent},
  {path:'register', component:RegisterComponent},
  {path:'**',component:NotFoundPage}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
