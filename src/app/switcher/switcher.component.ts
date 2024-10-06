import {Component, DestroyRef, effect, ElementRef, inject, OnInit, signal, ViewChild, model} from '@angular/core';
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
  constructor() {
  }
  coffeeDates : Date[];
  protected destroyRef = inject(DestroyRef);
  switcherControl = new FormControl(false);
  ngOnInit(): void {
    this.switcherControl.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((value)=>{
      if (value) {
        const daysArray = localStorage?.getItem('coffeDays');
        this.coffeeDates = daysArray ? daysArray;
        localStorage.setItem('coffeDays', dFns.format(new Date(), 'dd-mm-yyyy'));
      }
    })

  }



}
