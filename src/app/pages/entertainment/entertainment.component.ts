import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from 'src/app/service/newsapiservices.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {

  entertainmentDisplay: any = [];

  // function is defined that will be called when response arrives, for that subscribe function is there.
  constructor(private services: NewsapiservicesService) {
    this.services.entertainmentNews().subscribe((response) => {
      console.log(response)
      this.entertainmentDisplay = response.articles;
    });
  }

  ngOnInit(): void {


  }
}