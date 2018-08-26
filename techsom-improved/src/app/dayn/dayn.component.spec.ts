/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DaynComponent } from './dayn.component';

describe('DaynComponent', () => {
  let component: DaynComponent;
  let fixture: ComponentFixture<DaynComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaynComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaynComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
