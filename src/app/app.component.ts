import { Component, OnInit } from '@angular/core';
import {
  faLinkedin,
  faGithub,
  faGoogle,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'client';
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faGoogle = faGoogle;
  
  constructor(){}
  ngOnInit(): void {
    
  }
}
