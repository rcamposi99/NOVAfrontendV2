import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoAnyadirTareaComponent } from './dialogo-anyadir-tarea.component';

describe('DialogoAnyadirTareaComponent', () => {
  let component: DialogoAnyadirTareaComponent;
  let fixture: ComponentFixture<DialogoAnyadirTareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogoAnyadirTareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogoAnyadirTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
