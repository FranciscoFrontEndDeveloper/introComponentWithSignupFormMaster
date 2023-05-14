import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrormessgeComponent } from './errormessge.component';

describe('ErrormessgeComponent', () => {
  let component: ErrormessgeComponent;
  let fixture: ComponentFixture<ErrormessgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrormessgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrormessgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
