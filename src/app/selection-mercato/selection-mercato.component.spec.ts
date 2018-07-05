import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionMercatoComponent } from './selection-mercato.component';

describe('SelectionMercatoComponent', () => {
  let component: SelectionMercatoComponent;
  let fixture: ComponentFixture<SelectionMercatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionMercatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionMercatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
