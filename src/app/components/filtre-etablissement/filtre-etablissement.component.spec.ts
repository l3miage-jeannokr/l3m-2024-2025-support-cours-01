import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltreEtablissementComponent } from './filtre-etablissement.component';

describe('FiltreEtablissementComponent', () => {
  let component: FiltreEtablissementComponent;
  let fixture: ComponentFixture<FiltreEtablissementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltreEtablissementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltreEtablissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
