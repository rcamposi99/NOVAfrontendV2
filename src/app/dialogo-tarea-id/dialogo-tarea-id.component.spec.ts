import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoTareaIdComponent } from './dialogo-tarea-id.component';

describe('DialogoTareaIdComponent', () => {
  let component: DialogoTareaIdComponent;
  let fixture: ComponentFixture<DialogoTareaIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogoTareaIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogoTareaIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
