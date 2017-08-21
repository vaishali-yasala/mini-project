import { TestBed, inject } from '@angular/core/testing';

import { MyServiceNameService } from './myservicename.service';

describe('MyservicenameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyServiceNameService]
    });
  });

  it('should be created', inject([MyServiceNameService], (service: MyServiceNameService) => {
    expect(service).toBeTruthy();
  }));
});
