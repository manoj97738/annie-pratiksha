import { Component, Input } from '@angular/core';

@Component({
  selector: 'jseval-parents-dashboard',
  templateUrl: './parents.dashboard.html',
  styleUrls: ['./parents.dashboard.scss']
})
export class ParentDashboardComponent {
  title = 'student-mgmt';
  @Input("salary") salary: any;
  
}
