import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BlogComponent } from './components/blog/blog.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { LoginComponent } from './components/login/login.component';
import { NewBlogComponent } from './components/new-blog/new-blog.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule,  } from './app-routing.module';
 

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    PortfolioComponent,
    LoginComponent,
    NewBlogComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
