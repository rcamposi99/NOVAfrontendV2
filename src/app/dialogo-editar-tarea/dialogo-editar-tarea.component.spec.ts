import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoEditarTareaComponent } from './dialogo-editar-tarea.component';

describe('DialogoEditarTareaComponent', () => {
  let component: DialogoEditarTareaComponent;
  let fixture: ComponentFixture<DialogoEditarTareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogoEditarTareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogoEditarTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
