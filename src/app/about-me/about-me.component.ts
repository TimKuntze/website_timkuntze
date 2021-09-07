import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  panelOpenState = false
  popuphtml = false
  popupcss = false
  popupjs = false
  popupangular = false
  popupgithub = false
  popupscrum = false
  popupvue = false
  constructor() { }

  ngOnInit(): void {
  }

}
