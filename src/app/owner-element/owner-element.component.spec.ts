import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerElementComponent } from './owner-element.component';

describe('OwnerElementComponent', () => {
  let component: OwnerElementComponent;
  let fixture: ComponentFixture<OwnerElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
