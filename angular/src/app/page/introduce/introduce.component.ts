import { Component, OnInit } from '@angular/core';
import {IntroduceService} from '../../service/introduce.service';

@Component({
  selector: 'app-introduce',
  templateUrl: './introduce.component.html',
  styleUrls: ['./introduce.component.css']
})
export class IntroduceComponent implements OnInit {

  introduceVo: any = this.introduceService.introduce;
  br = '<br>';
  constructor(
    public introduceService: IntroduceService
  ) { }

  ngOnInit(): void {
  }

}
