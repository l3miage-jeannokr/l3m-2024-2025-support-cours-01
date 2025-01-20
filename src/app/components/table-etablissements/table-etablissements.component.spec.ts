import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableEtablissementsComponent } from './table-etablissements.component';

describe('TableEtablissementsComponent', () => {
  let component: TableEtablissementsComponent;
  let fixture: ComponentFixture<TableEtablissementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableEtablissementsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableEtablissementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
