import { TestBed } from '@angular/core/testing';

import { EventsResolverResolver } from './events-resolver.resolver';

describe('EventsResolverResolver', () => {
  let resolver: EventsResolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(EventsResolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
