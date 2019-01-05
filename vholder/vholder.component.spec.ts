import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VholderComponent } from './vholder.component';

describe('VholderComponent', () => {
  let component: VholderComponent;
  let fixture: ComponentFixture<VholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
