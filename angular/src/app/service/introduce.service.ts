import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IntroduceService {

  // 프로젝트 리스트 (개인 프로젝트, 회사 프로젝트)
  introduce: any = {
    // title: ['웹 브라우저로 사람을 연결하는 개발자', '00에 대해 알아보세요 !'],
    // 요약 아이콘
    icon: [
      {
        img: 'assets/image/introduce/leaf.png',
        text: ['사회새싹', '주니어']
      },
      {
        img: 'assets/image/introduce/language.png',
        text: ['매력적인', 'Javascript']
      },
      {
        img: 'assets/image/introduce/flow.png',
        text: ['문제의식', '해결과정']
      },
      {
        img: 'assets/image/introduce/root.png',
        text: ['뿌리깊은', '개발자']
      },
      {
        img: 'assets/image/introduce/trust.png',
        text: ['핵심가치', '신뢰']
      },
    ],
    // 개발자 소개
    aboutMe: [
      '웹 브라우저를 통해 사람을 연결하고 현실 문제를 해결, 개선하는 매력에 푹 빠져 웹 개발을 길을 걷고 있습니다.',
      'Java로 프로그래밍을 시작하여 Javascript의 매력에 푹빠져있고 사회와 코딩을 조금씩 알아가고 있는 사회 초년생입니다.',
      '문제의식과 해결의 과정으로 성장하고 있으며 항상 새로운 기술에 적극적으로 도전합니다.',
      '',
      '다양한 개발 스코프를 공부하면서 웹 기획부터 배포·유지보수까지의 과정에 대해 경험해 보았습니다.',
      '최근에는 프론트엔드에 관심을 가지고 뿌리깊은 개발자를 목표로 노력하고 있습니다.',
      '',
      '반갑습니다, 신뢰를 가장 중요시하는 개발자 00입니다.'
    ],
    aboutSkills: [
      '현업에서 사용하여 프로젝트를 진행하거나 관심있게 학습해본 경험이 있는 기술스택입니다.',
      '실무·토이는 해당 언어를 사용하여 결과물을 도출해본 경험이 있으며 개발된 소스코드를 이해할 수 있습니다.',
      '기초 단계는 관심있게 학습 중이며 일정 학습정도가 되면 토이 프로젝트를 진행할 계획이 있습니다.'
    ],
    skills: [
      {
        skillType: 'Frontend',
        content: '퍼블리싱 & SPA 프레임워크',
        skillList: [
          {
            skillNm: 'HTML',
            level: '실무',
            content: '태그를 활용한 마크업',
            img: 'assets/image/introduce/skill_springboot.png'
          },
          {
            skillNm: 'HTML',
            level: '연습',
            content: '태그를 활용한 마크업',
            img: 'assets/image/introduce/skill_git.png'
          },
          {
            skillNm: 'HTML',
            level: '기초',
            content: '태그를 활용한 마크업',
            img: 'assets/image/introduce/skill_css.png'
          },
          {
            skillNm: 'HTML',
            level: '실무',
            content: '태그를 활용한 마크업',
            img: 'assets/image/introduce/skill_html.png'
          },
          {
            skillNm: 'HTML',
            level: '기초',
            content: '태그를 활용한 마크업',
            img: 'assets/image/introduce/skill_java.png'
          },
          {
            skillNm: 'HTML',
            level: '실무',
            content: '태그를 활용한 마크업',
            img: 'assets/image/introduce/skill_javascript.png'
          },
        ]
      },
      {
        skillType: 'Backend',
        content: 'MVC웹 개발 & RestAPI 서버 구축',
        skillList: [
          {
            skillNm: 'HTML',
            level: '실무',
            content: '태그를 활용한 마크업',
            img: 'assets/image/introduce/skill_springboot.png'
          },
          {
            skillNm: 'HTML',
            level: '기초',
            content: '태그를 활용한 마크업',
            img: 'assets/image/introduce/skill_git.png'
          },
          {
            skillNm: 'HTML',
            level: '실무',
            content: '태그를 활용한 마크업',
            img: 'assets/image/introduce/skill_css.png'
          },
          {
            skillNm: 'HTML',
            level: '연습',
            content: '태그를 활용한 마크업',
            img: 'assets/image/introduce/skill_html.png'
          },
          {
            skillNm: 'HTML',
            level: '기초',
            content: '태그를 활용한 마크업',
            img: 'assets/image/introduce/skill_java.png'
          },
          {
            skillNm: 'HTML',
            level: '연습',
            content: '태그를 활용한 마크업',
            img: 'assets/image/introduce/skill_javascript.png'
          },
        ]
      },
      {
        skillType: 'Devops',
        content: '형상관리와 유지보수 & 서버 구축',
        skillList: [
          {
            skillNm: 'HTML',
            level: '실무',
            content: '태그를 활용한 마크업',
            img: 'assets/image/introduce/skill_springboot.png'
          },
          {
            skillNm: 'HTML',
            level: '연습',
            content: '태그를 활용한 마크업',
            img: 'assets/image/introduce/skill_git.png'
          },
          {
            skillNm: 'HTML',
            level: '실무',
            content: '태그를 활용한 마크업',
            img: 'assets/image/introduce/skill_css.png'
          },
          {
            skillNm: 'HTML',
            level: '기초',
            content: '태그를 활용한 마크업',
            img: 'assets/image/introduce/skill_html.png'
          },
          {
            skillNm: 'HTML',
            level: '연습',
            content: '태그를 활용한 마크업',
            img: 'assets/image/introduce/skill_java.png'
          },
          {
            skillNm: 'HTML',
            level: '실무',
            content: '태그를 활용한 마크업',
            img: 'assets/image/introduce/skill_javascript.png'
          },
        ]
      }
    ],
    introduceMeHeader: [
      '어떤 사람인지, 어떤 것에 열정적인지를 파악하여 확립한 펄스널 브랜딩입니다.',
      '세상에 많은 개발자들 중 \'00\'가 추구하는 가치를 브랜드화 하였습니다.'
    ],
    introduceMe: [
      '',
      '',
      '000은 이런이런 사람입니다.',
      '자기 소개 기능을 넣었습니다.',
      '여기에 너가 어떤 사람인지 작성해줏에요. 엔터 기능을 ',
      '넣고 싶다면 배열에 빈값을 넣어주세요.',
      '',
      '빈값은 엔터기능입니다.',
      '기능 추가 및 기능 수정은',
      '000에게 개인적으로 연락주세요.',
      '',
      '감사합니다.'
    ],
    img: 'assets/image/introduce/joseph.jpg'
  };




  constructor() { }
}
