import { Component, computed, effect, inject, signal } from '@angular/core';
import { DataProcessService } from './services/data-process.service';
import { College } from './data/college.interface';

@Component({
    selector: 'app-root',
    imports: [],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  private readonly dataProcessSrv = inject(DataProcessService);

  // Système de pagination
  private readonly _currentPage = signal(0);
  protected readonly currentPage = this._currentPage.asReadonly();
  
  private readonly _nbElementsPerPage = signal(10);
  protected readonly nbPages = computed(
    () => Math.ceil( this.colleges().length / this._nbElementsPerPage() )
  )

  // Dériver un signal des 10 premiers établissements
  protected readonly colleges = computed<readonly College[]>(
    () => {
      const start = this._currentPage() * this._nbElementsPerPage();
      return this.dataProcessSrv.colleges().slice(start, start + this._nbElementsPerPage())
    }
  )

  protected previousPage() {
    this._currentPage.set(
      this._currentPage() - 1
    )
  }

  protected nextPage() {
    this._currentPage.set(
      this._currentPage() + 1
    )
  }
}
