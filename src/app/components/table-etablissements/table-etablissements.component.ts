import { Component, computed, input, model } from '@angular/core';
import { College } from '../../data/college.interface';

@Component({
  selector: 'app-table-etablissements',
  imports: [],
  templateUrl: './table-etablissements.component.html',
  styleUrl: './table-etablissements.component.scss'
})
export class TableEtablissementsComponent {
  public readonly data = input.required<readonly College[]>();
  public readonly nbParPage = input<number>(10);
  public readonly page = model<number>(0);

  protected readonly nbPages = computed(
    () => Math.ceil(this.data().length / this.nbParPage())
  );

  private readonly indiceDepartEtablissements = computed<number>(
    () => this.page() * this.nbParPage()
  )

  protected readonly etablissements = computed(
    () => this.data().slice(
      this.indiceDepartEtablissements(),
      this.indiceDepartEtablissements() + this.nbParPage()
    )
  )

  /**
   * Méthodes de nvigation dans la pagination
   */
  protected previousPage() {
    this.page.set(
      this.page() - 1
    )
  }

  protected nextPage() {
    this.page.update( p => p + 1 )
  }
}
