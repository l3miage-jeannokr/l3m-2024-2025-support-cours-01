import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataProcessService } from './services/data-process.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly dataProcessSrv = inject(DataProcessService);
}
