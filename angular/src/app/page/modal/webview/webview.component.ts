import {Component, ElementRef, OnInit, Pipe, PipeTransform, ViewChild} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';


@Component({
  selector: 'app-webview',
  templateUrl: './webview.component.html',
  styleUrls: ['./webview.component.css']
})
export class WebviewComponent implements OnInit  {
  mapURL: SafeResourceUrl
  constructor(
    public activeModal: NgbActiveModal,
    private domSanitizer: DomSanitizer
  ) {

  }

  ngOnInit(): void {
    this.mapURL = this.domSanitizer.bypassSecurityTrustResourceUrl('www.naver.com');
  }

  close(){
    this.activeModal.close();
  }

}
