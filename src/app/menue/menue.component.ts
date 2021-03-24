import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menue',
  templateUrl: './menue.component.html',
  styleUrls: ['./menue.component.scss']
})
export class MenueComponent implements OnInit {
  @Input() darkMode = true;
  constructor() { }

  ngOnInit(): void {
  }

}
