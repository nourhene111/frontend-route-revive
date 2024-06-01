import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSComponent } from './header-s.component';

describe('HeaderSComponent', () => {
  let component: HeaderSComponent;
  let fixture: ComponentFixture<HeaderSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
