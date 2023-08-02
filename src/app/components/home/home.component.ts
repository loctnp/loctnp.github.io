import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  speed = 100;
  titles = ['Web Developer', 'Mobile Developer', 'Data Engineer'];
  index = 0;
  displayText = "";

  skills = [
    {
      name:"HTML/CSS",
      score:1,
      comment:""
    },
    {
      name:"Javascript",
      score:.8,
      comment:""
    },
    {
      name:"Angular",
      score:.8,
      comment:""
    },
    {
      name:"NodeJS",
      score:.8,
      comment:""
    },
    {
      name:"React/React Native",
      score:.6,
      comment:""
    },
    {
      name:"Python",
      score:.8,
      comment:""
    },
    {
      name:"Java",
      score:.8,
      comment:""
    },
    {
      name:"VueJS",
      score:.5,
      comment:""
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
