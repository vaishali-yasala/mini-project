import { TestBed, inject } from '@angular/core/testing';

import { DetailInfoService } from './detailinfo.service';

describe('DetailInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetailInfoService]
    });
  });

  it('should be created', inject([DetailInfoService], (service: DetailInfoService) => {
    expect(service).toBeTruthy();
  }));
});
