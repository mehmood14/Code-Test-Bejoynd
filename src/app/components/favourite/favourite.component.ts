import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'ngx-alerts';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
})
export class FavouriteComponent implements OnInit {
  state$: Observable<object> | undefined;
  favPoems: any = [];
  poems: any = [];

  constructor(private router: Router, private alertService: AlertService) {}

  ngOnInit(): void {
    if (history.state.data) {
      this.favPoems = history.state.data;
    } else {
      this.router.navigate(['']);
    }
  }

  remove(poem: any) {
    history.state.data2.push(poem);
    this.favPoems = this.favPoems.filter(function (obj: any) {
      return obj.title !== poem.title;
    });
    this.alertService.success('Poem removed from favourite!');
  }

  homeComp() {
    this.router.navigate(['/home'], {
      state: { data: history.state.data2, data2: this.favPoems },
    });
  }
}
