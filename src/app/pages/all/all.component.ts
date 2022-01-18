import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from 'src/app/service/newsapiservices.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  allNewsDisplay: any = [];

  constructor(private services: NewsapiservicesService) {
    this.services.allNews().subscribe((response) => {
      console.log(response)
      this.allNewsDisplay = response.articles;
    });
  }

  ngOnInit(): void {


  }

}
