import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  borImg = 'http://dolphinaquatics.in/images/dolphin_startingblock.jpeg';
  unimg = 'assets/poorna.jpg';
  sir = 'assets/ankan.jpg';
  constructor() { }

  ngOnInit() {}

}
