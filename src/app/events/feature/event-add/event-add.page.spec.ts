import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventAddPage } from './event-add.page';

describe('EventAddPage', () => {
  let component: EventAddPage;
  let fixture: ComponentFixture<EventAddPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EventAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
