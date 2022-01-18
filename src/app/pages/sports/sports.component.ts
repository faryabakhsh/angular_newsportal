import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from 'src/app/service/newsapiservices.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  sportsDisplay: any = [];

  // function is defined that will be called when response arrives, for that subscribe function is there.
  constructor(private services: NewsapiservicesService) {
    this.services.sportsNews().subscribe((response) => {
      console.log(response)
      this.sportsDisplay = response.articles;
    });
  }

  ngOnInit(): void {


  }
}