import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnyadirTareaComponent } from './anyadir-tarea.component';

describe('AnyadirTareaComponent', () => {
  let component: AnyadirTareaComponent;
  let fixture: ComponentFixture<AnyadirTareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnyadirTareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnyadirTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
