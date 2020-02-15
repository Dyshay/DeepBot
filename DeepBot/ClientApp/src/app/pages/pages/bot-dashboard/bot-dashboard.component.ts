import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-bot-dashboard',
    templateUrl: './bot-dashboard.component.html',
    styleUrls: ['./bot-dashboard.component.scss']
})
/** bot-dashboard component*/
export class BotDashboardComponent implements OnInit {
  id:number
    /** bot-dashboard ctor */
  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = + params.get('id');
      console.log(params);
    });
  }
}
