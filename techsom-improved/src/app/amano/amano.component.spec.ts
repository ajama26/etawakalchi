/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AmanoComponent } from './amano.component';

describe('AmanoComponent', () => {
  let component: AmanoComponent;
  let fixture: ComponentFixture<AmanoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmanoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
