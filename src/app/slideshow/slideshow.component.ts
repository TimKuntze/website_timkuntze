import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  images = ['coding.jpg', 'laptop.jpeg', 'cv_picture.jpg'];
  headlines = [
    'Software developer',
    'Graduate of Developer Akademie',
    'Hands-on mentality'
  ];
  typewriterText = [
    "Welcome to my website! I'm programming since summer 2020 and eager to learn more.",
    'With the help of this young and awesome coding academy, I managed to have quite a steep learning curve.',
    "...and I'm never afraid to learn new and challenging things :)"
  ];

  currentImage = 0;
  showImage = true;

  ngOnInit() {
    this.updateImage();
  }

  updateImage() {
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;
      setTimeout(() => {
        this.showImage = true;
      }, 10)
    }, 8000);
  }

}
