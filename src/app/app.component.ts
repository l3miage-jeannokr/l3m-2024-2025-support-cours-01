import { Component, computed, effect, inject, signal } from '@angular/core';
import { DataProcessService } from './services/data-process.service';
import { College } from './data/college.interface';
import { TableEtablissementsComponent } from "./components/table-etablissements/table-etablissements.component";
import { FormsModule } from "@angular/forms"
import { FctFiltreEta, FiltreEtablissementComponent } from './components/filtre-etablissement/filtre-etablissement.component';
@Component({
    selector: 'app-root',
    imports: [
      TableEtablissementsComponent,
      FiltreEtablissementComponent,
      FormsModule
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  private readonly dataProcessSrv = inject(DataProcessService);

  protected filtreCourant = signal<FctFiltreEta>(c => true)
  
  protected readonly colleges = computed(
    () => this.dataProcessSrv.colleges().filter(this.filtreCourant())
  )
  
  protected nbParPage = signal<number>(5);
  
  protected page = signal<number>(0);

}
