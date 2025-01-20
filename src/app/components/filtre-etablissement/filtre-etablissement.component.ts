import { Component, computed, effect, output, signal } from '@angular/core';
import { College } from '../../data/college.interface';
import { FormsModule } from '@angular/forms';

export type FctFiltreEta = (c: College) => boolean;

@Component({
  selector: 'app-filtre-etablissement',
  imports: [
    FormsModule
  ],
  templateUrl: './filtre-etablissement.component.html',
  styleUrl: './filtre-etablissement.component.scss'
})
export class FiltreEtablissementComponent {
  public readonly filtre = output<FctFiltreEta>();

  protected readonly filtreNom = signal<string>("");

  private readonly _filtreNomMinuscule = computed(
    () => this.filtreNom().toLowerCase()
  )
  /**
   * Quand le signal filtreNom est modifié, je veux émettre un évennement
   * un nouveau filtre
   */
  private readonly _effFiltrage = effect(
    () => {
      this.filtre.emit(
        c => c.denomination_principale.toLowerCase().indexOf( this._filtreNomMinuscule() ) !== -1
      )
    }
  )
}
