import { Component, ElementRef, ViewChild } from '@angular/core';
import { Toolbar } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';
import Typed from 'typed.js';



@Component({
  selector: 'app-home',
  imports: [ AvatarModule, ButtonModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


  @ViewChild('typedElement') typedElement!: ElementRef;
  @ViewChild('angular') angular!: ElementRef;

  ngAfterViewInit(): void {
    const options = {
      strings: ["FrontEnd Angular" , "Freelance" , "Full Stack Developer" ,"BackEnd(ASP.NetCore)" ],
      typeSpeed: 50,
      backspeed:50,
      loop:true,
    };

    new Typed(this.typedElement.nativeElement, options);
    this.angularanimation()
  }
 
  angularanimation(): void {
    const options = {
      strings: ["Angular 19 Using NGRX ","RXJS" 
         , 
         "Create Library ", "PWA","Unit Testing ","Nx Monorepo", 
         "Amination" , "Angular material"],
      typeSpeed: 50,
      backspeed:50,
      loop:true,
    };

    new Typed(this.angular.nativeElement, options);
  }
 
  
  
}
