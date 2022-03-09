import { TestBed } from '@angular/core/testing';

import { FileUploadInterceptor } from './file-upload.interceptor';

describe('FileUploadInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      FileUploadInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: FileUploadInterceptor = TestBed.inject(FileUploadInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
