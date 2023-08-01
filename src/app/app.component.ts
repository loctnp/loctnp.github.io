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
  
  speed = 100;
  titles = ['Web Developer', 'Mobile Developer', 'Data Engineer'];
  index = 0;
  displayText = "";

  skills = [
    {
      name:"HTML/CSS",
      score:1,
    },
    {
      name:"Javascript",
      score:.8,
    },
    {
      name:"Angular",
      score:.8,
    },
    {
      name:"NodeJS",
      score:.8,
    },
    {
      name:"React/React Native",
      score:.6,
    },
    {
      name:"Python",
      score:.8,
    },
    {
      name:"Java",
      score:.8,
    },
    {
      name:"VueJS",
      score:.5,
    },
  ]
  constructor(){}
  nextText():void{
    if(this.displayText.length == this.titles[this.index].length){
      if(this.index >= this.titles.length-1){
        this.index = 0;
        this.displayText = "";
      }else{
        this.index++;
        this.displayText = "";
      }
    }else{
      this.displayText += this.titles[this.index].charAt(this.displayText.length)
    }
    
  }
  
  ngOnInit(): void {
    setInterval(()=>this.nextText(), this.speed);
  }
}
