import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-group-dashboard',
    templateUrl: './group-dashboard.component.html',
    styleUrls: ['./group-dashboard.component.scss']
})
/** group-dashboard component*/
export class GroupDashboardComponent {
  id: number;
    /** group-dashboard ctor */
  constructor(private activatedRoute: ActivatedRoute) {

    }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = + params.get('id');
      console.log(params);
    });
  }
}
