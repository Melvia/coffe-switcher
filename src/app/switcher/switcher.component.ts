import {
  Component,
  DestroyRef,
  effect,
  ElementRef,
  inject,
  OnInit,
  signal,
  ViewChild,
  model,
  output
} from '@angular/core';
import * as dFns from 'date-fns';
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {takeUntil, toArray} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-switcher',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './switcher.component.html',
  styleUrl: './switcher.component.scss'
})
export class SwitcherComponent implements OnInit {

  checked = model(false);
  coffeOutputDate = output<Date>();
  protected destroyRef = inject(DestroyRef);
  ngOnInit(): void {

  }

  onCheckedSelected(value: boolean) {
    if (value) {
      this.coffeOutputDate.emit(new Date());
    }

  }



}
