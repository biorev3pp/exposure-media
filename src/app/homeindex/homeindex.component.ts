import { Component, OnInit } from '@angular/core';
import { HmindexService } from '../services/hmindex.service';
import { Homes } from '../classes/homes';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-homeindex',
  templateUrl: './homeindex.component.html',
  styleUrls: ['./homeindex.component.css']
})
export class HomeindexComponent implements OnInit {

  groupFilter:Homes[];
  typeSelected: Number;
  filteredHomes: Homes[];
  searchHome:string = "";
  data = [];
  route: any;
  form: FormGroup;

  constructor(private hmindexService:HmindexService, private httpClient: HttpClient, public filter: FormBuilder) {
    this.form = this.filter.group({
      title: '',
      type: '',
      address: '',
      bedroom: [''],
      bathroom: ['']
    })
   }

  ngOnInit() {

    // To get the Home images on index page
    this.getIndexHomeData();

    // To get the data on select tag of homes in index page
    // this.hmindexService.getGroupFilter().subscribe (
    //   data=>
    //   {
    //     this.groupFilter = data;
    //     // console.log(this.groupFilter);
    //   }
    // )

  }

  getIndexHomeData() {
    
    this.hmindexService.getHomeData().subscribe(data => {
      this.data.push(data);
      // console.log(this.data);
      }, error => console.error(error));

    }

  // ontypeSelected(selectedTypeId:any):void {
  //   this.hmindexService.getHomesFortypeSelectedbyparameter(selectedTypeId).subscribe(data => {
  //     this.filteredHomes = data;
  //     console.log(this.filteredHomes);
  //   })
  // }

//   onClickSubmit(formData) {
//     alert('Your values are : ' + formData.title + " " + formData.address + " " + formData.type  + " " + formData.bedroom  + " " + formData.bathroom);
//  }

onClickSubmit() {
var formData: any = new FormData();
  formData.append("title", this.form.get('title').value);
  formData.append("address", this.form.get('address').value);
  formData.append("type", this.form.get('type').value);
  formData.append("bedroom", this.form.get('bedroom').value);
  formData.append("bathroom", this.form.get('bathroom').value);

  console.log(formData.title);

  this.httpClient.post('http://localhost/ExposureMedia/admin/public/api/HomeHouseListFilter', formData).subscribe(
    (response) => console.log(response),
    (error) => console.log(error)
    )
}

}
