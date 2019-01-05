import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Video0Component } from './video0.component';

describe('Video0Component', () => {
  let component: Video0Component;
  let fixture: ComponentFixture<Video0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Video0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Video0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
