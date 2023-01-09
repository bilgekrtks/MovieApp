import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Upcoming } from 'src/app/models/upcoming';
import { UpcomingService } from 'src/app/services/upcoming.service';
import { AlertifyService } from 'src/app/services/alertify.service';
@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css'],
  providers: [UpcomingService]
})
export class UpcomingComponent implements OnInit, OnDestroy {
  upcoming: Upcoming[] = []
  unsubscribe$: Subject<any> = new Subject();
  
  error: any;

  constructor(private alertify: AlertifyService, private upcomingService: UpcomingService) { }

  ngOnInit(): void {
    this.upcomingService.getUpcoming().pipe(takeUntil(this.unsubscribe$)).subscribe(data => {
      this.upcoming = data.results

    })
  }



  addToList($event: any, upcoming: Upcoming) {
    if ($event.target.classList.contains('btn-success')) {
      $event.target.innerText = "Listeden Çıkar";
      $event.target.classList.remove('btn-success')
      $event.target.classList.add('btn-danger')
      this.alertify.success(upcoming.title + 'listeye eklendi')
    } else {
      $event.target.innerText = "Listeye Ekle";
      $event.target.classList.remove('btn-danger')
      $event.target.classList.add('btn-success')
      this.alertify.error(upcoming.title + 'listeden çıkarıldı')
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(null)
    this.unsubscribe$.complete()
  }
}
