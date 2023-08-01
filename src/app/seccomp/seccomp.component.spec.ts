import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccompComponent } from './seccomp.component';

describe('SeccompComponent', () => {
  let component: SeccompComponent;
  let fixture: ComponentFixture<SeccompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeccompComponent]
    });
    fixture = TestBed.createComponent(SeccompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
