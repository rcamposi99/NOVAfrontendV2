import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoBuscarComponent } from './dialogo-buscar.component';

describe('DialogoBuscarComponent', () => {
  let component: DialogoBuscarComponent;
  let fixture: ComponentFixture<DialogoBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogoBuscarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogoBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
