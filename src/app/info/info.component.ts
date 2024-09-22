import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss'
})
export class InfoComponent implements OnInit {

  count: string|null = '';
  ngOnInit(): void {

   this.count = localStorage.getItem('countDays');
    if (!this.count) {
      localStorage.setItem('countDays', '6');
    }
  }



}
