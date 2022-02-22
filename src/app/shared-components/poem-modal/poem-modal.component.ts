import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-poem-modal',
  templateUrl: './poem-modal.component.html',
  styleUrls: ['./poem-modal.component.css'],
})
export class PoemModalComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
  ngOnInit(): void {}
}
