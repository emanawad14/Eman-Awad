import { Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';

export const routes: Routes = 
[
    {path:'', redirectTo:'home' , pathMatch:'full'},
    {path:'home' , loadComponent:()=>import('./feature/home/home.component').then((c)=>c.HomeComponent), title:'home'},
    {path:'about' , loadComponent:()=>import('./feature/about/about.component').then((c)=>c.AboutComponent) , title:'about'},
    {path:'projects' , loadComponent:()=>import('./feature/projects/projects.component').then((c)=>c.ProjectsComponent) , title:'projects'},
    {path:'developer' , loadComponent:()=>import('./feature/developer/developer.component').then((c)=>c.DeveloperComponent) ,title:'developer'},



];
