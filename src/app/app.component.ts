
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlowbiteService } from './shared/services/flowbite/flowbite.service';
import { NavbarComponent } from "./feature/navbar/navbar.component";
import { FooterComponent } from "./feature/footer/footer.component";
import {  NgxParticlesModule } from "@tsparticles/angular"; // ✅ تأكد من استخدام NgParticlesModule
import { loadSlim } from "@tsparticles/slim"; // ✅ تحميل المكتبة المصغرة
import { Engine, Container , MoveDirection, OutMode } from "@tsparticles/engine"; // ✅ إضافة المحرك والجسيمات
import { loadFull } from 'tsparticles';
import { HomeComponent } from "./feature/home/home.component";
import { AboutComponent } from "./feature/about/about.component";

declare function initFlowbite(): void;

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, NgxParticlesModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Eman_Portfolio';

  constructor(private flowbiteService: FlowbiteService , ) {}

  async ngOnInit(): Promise<void> {
    if (typeof window !== 'undefined') {
      const { tsParticles } = await import("@tsparticles/engine"); // ✅ استخراج `tsParticles` بشكل صحيح
      await loadSlim(tsParticles);
      this.flowbiteService.loadFlowbite(() => {
        initFlowbite();
      });}



    // this.flowbiteService.loadFlowbite(() => {
    //   initFlowbite();
    // });
  }



  id = 'tsparticles';

  particlesOptions = {

    fullScreen: {
    enable: true,
    zIndex: 1
  },
    background: {
      // color: { value: '#000' },
    },
    fpsLimit: 120,
    interactivity: {
      
      events: {
        onClick: { enable: false, mode: 'push' },
        onHover: { enable: false, mode: 'repulse' },
        resize: { enable: true }
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 100, duration: 0.4 }
      },
    },
    particles: {
      color: { value: '#ffffff' },
      links: {
        color: '#black',
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1
      },
      move: {
        direction: MoveDirection.none, // ✅ تم التعديل هنا
        enable: true,
        outModes: { default: OutMode.bounce },
        random: false,
        speed: .5,
        straight: false,
      },
      number: {
        density: { enable: true, area: 800 },
        value: 200
      },
      opacity: { value: 0.5 },
      shape: { type: 'star' },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };

  async particlesInit(engine: Engine): Promise<void> {
    console.log('particlesInit', engine);
    await loadFull(engine);
  }

  particlesLoaded(container: Container): void {
    console.log('Particles loaded', container);
  }




  
  
}
  

