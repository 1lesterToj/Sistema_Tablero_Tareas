import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableroPublicoComponent } from './tablero-publico.component';

describe('TableroPublicoComponent', () => {
  let component: TableroPublicoComponent;
  let fixture: ComponentFixture<TableroPublicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableroPublicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableroPublicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
