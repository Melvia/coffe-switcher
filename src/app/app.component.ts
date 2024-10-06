import {Component, Signal, signal, WritableSignal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {SwitcherComponent} from "./switcher/switcher.component";
import {InfoComponent} from "./info/info.component";
import  * as d from 'date-fns';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SwitcherComponent, InfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'coffe-switcher';
  coffeDates = signal<Date[]>([]);

  onOutputDates(value: Date): void {
    this.coffeDates.update((arrDates: Date[]) => {
      return arrDates.concat(value);
    })
    localStorage.setItem('coffeDates', d.formatDate(value, 'dd-mm-yyyy') );
  }
}
