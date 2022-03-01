import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoTragaperrasComponent } from './juego-tragaperras.component';

describe('JuegoTragaperrasComponent', () => {
  let component: JuegoTragaperrasComponent;
  let fixture: ComponentFixture<JuegoTragaperrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegoTragaperrasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoTragaperrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
