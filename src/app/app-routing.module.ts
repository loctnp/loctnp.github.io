import { NgModule } from '@angular/core';
import { Routes, RouterModule,provideRouter, withComponentInputBinding } from '@angular/router'; // CLI imports router
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { BlogComponent } from './components/blog/blog.component';
import { NewBlogComponent } from './components/new-blog/new-blog.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'blog', component: BlogComponent},
  {path:':username/new-blog', component: NewBlogComponent},
  // {path:'', redirectTo:"/home",pathMatch:'full'},

]; // sets up routes constant where you define your routes

@NgModule({
  providers:[
    provideRouter(routes, withComponentInputBinding())
  ],
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
