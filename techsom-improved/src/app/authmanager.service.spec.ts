/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthmanagerService } from './authmanager.service';

describe('AuthmanagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthmanagerService]
    });
  });

  it('should ...', inject([AuthmanagerService], (service: AuthmanagerService) => {
    expect(service).toBeTruthy();
  }));
});
