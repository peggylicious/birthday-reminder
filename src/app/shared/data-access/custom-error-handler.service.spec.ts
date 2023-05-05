import { TestBed } from '@angular/core/testing';

import { CustomErrorHandler } from './custom-error-handler.service';

describe('CustomErrorHandlerService', () => {
  let errorHandler: CustomErrorHandler;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    errorHandler = TestBed.inject(CustomErrorHandler);
  });

  it('should be created', () => {
    expect(errorHandler).toBeTruthy();
  });
});
