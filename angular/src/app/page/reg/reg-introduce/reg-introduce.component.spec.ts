import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegIntroduceComponent } from './reg-introduce.component';

describe('RegIntroduceComponent', () => {
  let component: RegIntroduceComponent;
  let fixture: ComponentFixture<RegIntroduceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegIntroduceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegIntroduceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
