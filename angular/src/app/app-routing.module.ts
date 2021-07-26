import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './page/main/main.component';
import {ProjectComponent} from './page/project/project.component';
import {IntroduceComponent} from './page/introduce/introduce.component';
import {RegIntroduceComponent} from './page/reg/reg-introduce/reg-introduce.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'project',
    component: ProjectComponent
  },
  {
    path: 'introduce',
    component: IntroduceComponent
  },
  {
    path: 'regIntroduce',
    component: RegIntroduceComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }