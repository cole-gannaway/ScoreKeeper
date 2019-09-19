import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeopardyScoreboardComponent } from './jeopardy-scoreboard.component';

describe('JeopardyScoreboardComponent', () => {
  let component: JeopardyScoreboardComponent;
  let fixture: ComponentFixture<JeopardyScoreboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeopardyScoreboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeopardyScoreboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
