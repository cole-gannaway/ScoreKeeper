import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OhhellComponent } from './ohhell.component';

describe('OhhellComponent', () => {
  let component: OhhellComponent;
  let fixture: ComponentFixture<OhhellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OhhellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OhhellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
