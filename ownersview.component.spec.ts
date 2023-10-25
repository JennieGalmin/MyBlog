import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnersviewComponent } from './ownersview.component';

describe('OwnersviewComponent', () => {
  let component: OwnersviewComponent;
  let fixture: ComponentFixture<OwnersviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnersviewComponent]
    });
    fixture = TestBed.createComponent(OwnersviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
