import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from 'src/app/service/newsapiservices.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  healthDisplay: any = [];

  // function is defined that will be called when response arrives, for that subscribe function is there.
  constructor(private services:NewsapiservicesService) {this.services.healthNews().subscribe((response) => {console.log(response)
    this.healthDisplay = response.articles;
  });
  } 

  ngOnInit(): void {
    

}
}