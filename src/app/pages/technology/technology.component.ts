import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from 'src/app/service/newsapiservices.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

  technologyDisplay: any = [];

  // function is defined that will be called when response arrives, for that subscribe function is there.
  constructor(private services: NewsapiservicesService) {
    this.services.technologyNews().subscribe((response) => {
      console.log(response)
      this.technologyDisplay = response.articles;
    });
  }

  ngOnInit(): void {


  }
}