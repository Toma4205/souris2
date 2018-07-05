import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MercatoComponent } from './mercato.component';

describe('MercatoComponent', () => {
  let component: MercatoComponent;
  let fixture: ComponentFixture<MercatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MercatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MercatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
