import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from 'src/app/service/newsapiservices.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  businessDisplay: any = [];

  constructor(private services: NewsapiservicesService) {
    this.services.businessNews().subscribe((response) => {
      console.log(response)
      this.businessDisplay = response.articles;
    });
  }

  ngOnInit(): void {


  }
}