import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './page/main/main.component';
import {ProjectComponent} from './page/project/project.component';
import {IntroduceComponent} from './page/introduce/introduce.component';
import {RegIntroduceComponent} from './page/reg/reg-introduce/reg-introduce.component';
import {HistoryComponent} from './page/history/history.component';
import {SkillsComponent} from './page/skills/skills.component';

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
    path: 'skills',
    component: SkillsComponent
  },
  {
    path: 'regIntroduce',
    component: RegIntroduceComponent
  },
  {
    path: 'history',
    component: HistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
