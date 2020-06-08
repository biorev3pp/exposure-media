import { Component, OnInit } from '@angular/core';
import { DevsearchService } from '../services/devsearch.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit {

  searchHome:string = "";
  data: any;
  search: any;
  v: any;

  constructor(private devsearchService:DevsearchService,private router: Router) { }

  ngOnInit() {
    this.getIndexHomeData();
  }

  getIndexHomeData() {
    this.v =this.router.url.split('=').pop();
    this.data={'search':this.v};
    this.devsearchService.sendPostRequest(this.data).subscribe(result => {
       this.search=result;
        // console.log(this.search);
      }
);

    }

}
