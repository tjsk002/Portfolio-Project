import {Component, OnInit, ViewChild} from '@angular/core';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper/core';
SwiperCore.use([Navigation, Pagination, Autoplay]);
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
