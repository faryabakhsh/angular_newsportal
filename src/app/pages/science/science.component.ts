import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from 'src/app/service/newsapiservices.service';
@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {

  scienceDisplay: any = [];

  // function is defined that will be called when response arrives, for that subscribe function is there.
  constructor(private services: NewsapiservicesService) {
    this.services.scienceNews().subscribe((response) => {
      console.log(response)
      this.scienceDisplay = response.articles;
    });
  }

  ngOnInit(): void {


  }
}