import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
demo:string;
  constructor(private router: Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  this.route.params.subscribe(params => {this.demo=params['id'];
console.log(params);
});

  }


  gotoPage(){

    this.router.navigate(['second'],{queryParams:{"id":"22"}});
  }
}
