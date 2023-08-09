import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroCarrosComponent } from './registro-carros.component';

describe('RegistroCarrosComponent', () => {
  let component: RegistroCarrosComponent;
  let fixture: ComponentFixture<RegistroCarrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroCarrosComponent]
    });
    fixture = TestBed.createComponent(RegistroCarrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
