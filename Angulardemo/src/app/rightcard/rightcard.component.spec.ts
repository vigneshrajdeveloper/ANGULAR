import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightcardComponent } from './rightcard.component';

describe('RightcardComponent', () => {
  let component: RightcardComponent;
  let fixture: ComponentFixture<RightcardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RightcardComponent]
    });
    fixture = TestBed.createComponent(RightcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
