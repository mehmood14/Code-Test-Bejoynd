import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  favouriteData: any = 0;
  @Input() favCount: number | undefined;
  constructor() {}

  ngOnInit(): void {}
}
