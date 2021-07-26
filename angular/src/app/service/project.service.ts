import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {


  // 프로젝트 리스트 (개인 프로젝트, 회사 프로젝트)
  readonly projectList: any = {
    companyProject: [
      {
        projectNm: 'inPHRchild(APP)',
        skills: 'VueJS, NodeJS, Bootsrap, JQuery, MYSQL',
        projectDate: '2020.01 ~ 2021.03',
        contents: '소아비만 관리 앱',
        part: ['비즈니스 DB 구축 및 CRM 웹 애플리케이션 개발', '화면설계·퍼블리싱·백엔드·테스트'],
        partner: '개발 인원 4인',
        img: 'assets/image/project/childLogo.svg',
        url: 'www.naver.com'
      },
      {
        projectNm: 'inPHRchild(WEB)',
        skills: 'VueJS, NodeJS, Bootsrap, JQuery, MYSQL',
        projectDate: '2020.01 ~ 2021.03',
        contents: '소아비만 관리 앱',
        part: ['비즈니스 DB 구축 및 CRM 웹 애플리케이션 개발', '화면설계·퍼블리싱·백엔드·테스트'],
        partner: '개발 인원 4인',
        img: 'assets/image/project/childLogo.svg',
        url: 'www.naver.com'
      },
      {
        projectNm: 'inPHR 소개 홈페이지',
        skills: 'VueJS, NodeJS, Bootsrap, JQuery, MYSQL',
        projectDate: '2020.01 ~ 2021.03',
        contents: '소아비만 관리 앱',
        part: ['비즈니스 DB 구축 및 CRM 웹 애플리케이션 개발', '화면설계·퍼블리싱·백엔드·테스트'],
        partner: '개발 인원 4인',
        img: 'assets/image/project/inphrLogo.png',
        url: 'www.naver.com'
      },
      {
        projectNm: 'inPHRpill(WEB)',
        skills: 'VueJS, NodeJS, Bootsrap, JQuery, MYSQL',
        projectDate: '2020.01 ~ 2021.03',
        contents: '소아비만 관리 앱',
        part: ['비즈니스 DB 구축 및 CRM 웹 애플리케이션 개발', '화면설계·퍼블리싱·백엔드·테스트'],
        partner: '개발 인원 4인',
        img: 'assets/image/project/pillLogo.svg',
        url: 'www.naver.com'
      },
      {
        projectNm: 'inPHRsym(APP)',
        skills: 'VueJS, NodeJS, Bootsrap, JQuery, MYSQL',
        projectDate: '2020.01 ~ 2021.03',
        contents: '소아비만 관리 앱',
        part: ['비즈니스 DB 구축 및 CRM 웹 애플리케이션 개발', '화면설계·퍼블리싱·백엔드·테스트'],
        partner: '개발 인원 4인',
        img: 'assets/image/project/symLogo.svg',
        url: 'www.naver.com'
      },
      {
        projectNm: 'inPHRsym(WEB)',
        skills: 'VueJS, NodeJS, Bootsrap, JQuery, MYSQL',
        projectDate: '2020.01 ~ 2021.03',
        contents: '소아비만 관리 앱',
        part: ['비즈니스 DB 구축 및 CRM 웹 애플리케이션 개발', '화면설계·퍼블리싱·백엔드·테스트'],
        partner: '개발 인원 4인',
        img: 'assets/image/project/symLogo.svg',
        url: 'www.naver.com'
      },
      {
        projectNm: 'inPHRcare 리뉴얼(WEB)',
        skills: 'VueJS, NodeJS, Bootsrap, JQuery, MYSQL',
        projectDate: '2020.01 ~ 2021.03',
        contents: '소아비만 관리 앱',
        part: ['비즈니스 DB 구축 및 CRM 웹 애플리케이션 개발', '화면설계·퍼블리싱·백엔드·테스트'],
        partner: '개발 인원 4인',
        img: 'assets/image/project/inphrCareLogo.png',
        url: 'www.naver.com'
      }
    ],
    personalProject: [
      {
        projectNm: '포트폴리오 홈페이지',
        skills: 'VueJS, NodeJS, Bootsrap, JQuery, MYSQL',
        projectDate: '2020.01 ~ 2021.03',
        img: 'assets/image/project/childLogo.svg',
        url: 'www.naver.com'
      },
      {
        projectNm: '포트폴리오 홈페이지',
        skills: 'VueJS, NodeJS, Bootsrap, JQuery, MYSQL',
        projectDate: '2020.01 ~ 2021.03',
        img: 'assets/image/project/symLogo.svg',
        url: 'www.naver.com'
      }
    ]
  };


  constructor() { }
}
