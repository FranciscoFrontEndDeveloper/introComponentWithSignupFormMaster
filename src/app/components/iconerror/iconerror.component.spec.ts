import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconerrorComponent } from './iconerror.component';

describe('IconerrorComponent', () => {
  let component: IconerrorComponent;
  let fixture: ComponentFixture<IconerrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconerrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconerrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
