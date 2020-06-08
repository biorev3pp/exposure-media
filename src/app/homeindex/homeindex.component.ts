import { Component, OnInit } from '@angular/core';
import { HmindexService } from '../services/hmindex.service';

@Component({
  selector: 'app-homeindex',
  templateUrl: './homeindex.component.html',
  styleUrls: ['./homeindex.component.css']
})
export class HomeindexComponent implements OnInit {

  searchHome:string = "";
  data = [];
  route: any;

  constructor(private hmindexService:HmindexService) { }

  ngOnInit() {
    this.getIndexHomeData();
  }

  getIndexHomeData() {
    
    this.hmindexService.getHomeData().subscribe(data => {
      this.data.push(data);
      console.log(this.data);
      }, error => console.error(error));

    }
  
}
