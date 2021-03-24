import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  popuphtml = false
  popupcss = false
  popupjs = false
  popupangular = false
  popupgithub = false
  popupscrum = false
  constructor() { }

  ngOnInit(): void {
  }

}
