import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  
  constructor(private httpClient: HttpClient) { }

// news Api Url
  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&pageSize=6&apiKey=21295741d92048ceab0bfc00810b0173";

  // business Api Url
  businessApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=21295741d92048ceab0bfc00810b0173"

  // entertainmnet Api Url
  entertainmentApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=21295741d92048ceab0bfc00810b0173"

  // health Api Url
  healthApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=21295741d92048ceab0bfc00810b0173"

  // science Api Url
  scienceApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=21295741d92048ceab0bfc00810b0173"

  // sports Api Url
  sportsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=21295741d92048ceab0bfc00810b0173"

  // health Api Url
  technologyApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=21295741d92048ceab0bfc00810b0173"

  // allNews()
  allNews():Observable<any> {
    return this.httpClient.get(this.newsApiUrl);
  }

  // businessNews()
  businessNews():Observable<any> {
    return this.httpClient.get(this.businessApiUrl);
  }

  // entertainmentNews()
  entertainmentNews():Observable<any> {
    return this.httpClient.get(this.entertainmentApiUrl);
  }

  // scienceNews()
  scienceNews():Observable<any> {
    return this.httpClient.get(this.scienceApiUrl);
  }

  // sportsNews()
  sportsNews():Observable<any> {
    return this.httpClient.get(this.sportsApiUrl);
  }

  // technologyNews()
  technologyNews():Observable<any> {
    return this.httpClient.get(this.technologyApiUrl);
  }

  // healthNews()
  healthNews():Observable<any> {
    return this.httpClient.get(this.healthApiUrl);
  }

}
