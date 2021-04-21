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


    // When the user scrolls the page, execute myFunction
    window.onscroll = function () { myFunction() };

    // Get the navbar
    var navbar = document.getElementById("navbar");
    var arrow = document.getElementById("arrow");
    var navbarmobile = document.getElementById("navbar-mobile"); 
    
    

    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;
    var stickymobile = navbarmobile.offsetTop;
    var rotate = arrow.offsetTop;

    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
      if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky");
        navbarmobile.classList.add("sticky-mobile");
        arrow.classList.add("rotate");
      } else {
        navbar.classList.remove("sticky");
        arrow.classList.remove("rotate");
        navbarmobile.classList.remove("sticky-mobile");
      }

    }

  }

  updateImage() {
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;
      setTimeout(() => {
        this.showImage = true;
      }, 10)
    }, 11450);
  }

}
