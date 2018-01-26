import { TestBed, inject } from '@angular/core/testing';

import { ToDoAPIService } from './to-do.api.service';

describe('ToDoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToDoAPIService]
    });
  });

  it(
    'should be created',
    inject([ToDoAPIService], (service: ToDoAPIService) => {
      expect(service).toBeTruthy();
    })
  );
});
