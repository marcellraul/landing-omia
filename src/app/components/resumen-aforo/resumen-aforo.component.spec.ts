import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenAforoComponent } from './resumen-aforo.component';

describe('ResumenAforoComponent', () => {
  let component: ResumenAforoComponent;
  let fixture: ComponentFixture<ResumenAforoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumenAforoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumenAforoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
