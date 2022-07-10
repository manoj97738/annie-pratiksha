import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'jseval-admin-subcourse',
  templateUrl: './subcourse.dashboard.html',
  styleUrls: ['./subcourse.dashboard.scss']
})
export class AdminSubCourseComponent {
  title = 'student-mgmt';
  constructor(public activatedRoute: ActivatedRoute) {
    console.log(this.activatedRoute)
    const subcourseid = this.activatedRoute.snapshot.paramMap.get('subcourseid');
    this.activatedRoute.data
      .subscribe((data) => {
        console.log("data", data)
      })
    this.activatedRoute.url
      .subscribe((data) => {
        console.log("url", data)
      })
    console.log("subcourseid");
    alert(subcourseid)
    sessionStorage.setItem("isediting", "true");
  }
  ngAfterViewInit() {

  }
}
