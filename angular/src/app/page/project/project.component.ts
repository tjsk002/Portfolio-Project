import { Component, OnInit } from '@angular/core';
import {ProjectModel} from '../../model/project.model';
import {ProjectService} from '../../service/project.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {WebviewComponent} from '../modal/webview/webview.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  public projectList: ProjectModel = this.projectService.projectList;
  closeResult: string;
  constructor(
    private projectService: ProjectService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  open() {
    const modalRef = this.modalService.open(WebviewComponent, { size: 'lg' });
    modalRef.componentInstance.name = 'World';
  }

}
