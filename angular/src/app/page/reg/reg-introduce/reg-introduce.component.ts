import { Component, OnInit } from '@angular/core';
import {IntroduceService} from '../../../service/introduce.service';

@Component({
  selector: 'app-reg-introduce',
  templateUrl: './reg-introduce.component.html',
  styleUrls: ['./reg-introduce.component.css']
})
export class RegIntroduceComponent implements OnInit {

  introduceVo: any = this.introduceService.introduce;
  aboutMeVo: any = {
    flag: false,
    aboutMeList: []
  };

  br = '<br>';
  constructor(
    public introduceService: IntroduceService
  ) { }

  ngOnInit(): void {
    this.aboutMeVo.aboutMeList = [...this.introduceVo.aboutMe];
  }

}
