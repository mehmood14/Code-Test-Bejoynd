import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AlertService } from 'ngx-alerts';
import { Observable } from 'rxjs';
import { ApiServiceModule } from 'src/app/core/services/api-service/api-service.module';
import { PoemModalComponent } from 'src/app/shared-components/poem-modal/poem-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  poems: any = [];
  favPoems: any = [];
  favCount: number = 0;
  state$: Observable<object> | undefined;
  displayLoader: boolean = false;

  constructor(
    private api: ApiServiceModule,
    private router: Router,
    public dialog: MatDialog,

    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    if (history.state.data) {
      this.poems = history.state.data;
      this.favPoems = history.state.data2;
      this.favCount = this.favPoems.length;
    } else {
      this.fetchPoems();
    }
  }

  fetchPoems() {
    this.displayLoader = true;
    this.api.getPoems().subscribe(
      (response: any) => {
        // if (!response.success) {
        //   this.alertService.warning('Something Went Wrong!');
        //   return;
        // }
        this.poems = response;
        this.displayLoader = false;
      },
      (error: any) => {
        this.alertService.danger('Something Went Wrong!');
        this.displayLoader = false;
        this.router.navigate(['']);
      }
    );
  }

  addToFav(poem: any) {
    this.favPoems.push(poem);
    this.favCount = this.favPoems.length;
    this.poems = this.poems.filter(function (obj: any) {
      return obj.title !== poem.title;
    });

    this.alertService.success('Poem added to favourite!');
  }

  favPoemsComp() {
    this.router.navigate(['/favourite'], {
      state: { data: this.favPoems, data2: this.poems },
    });
  }

  viewDetails(poem: any) {
    this.dialog.open(PoemModalComponent, {
      data: {
        poem,
      },
    });
  }
}
