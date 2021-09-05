import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  routeStrings: string;

  constructor(private route:ActivatedRoute,private router: Router,) { }

  ngOnInit(): void {
this.route.queryParams.subscribe(params => {

  this.routeStrings=params["id"]
})
console.log(this.routeStrings);

  }

}
