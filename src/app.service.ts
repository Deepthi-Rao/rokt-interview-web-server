import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {
    
  }
  getAllImages(apiString: string): Observable<any> {
    const url = apiString ? apiString : 'https://api.pexels.com/v1/curated?page=1&per_page=10';
    let apiKey = '563492ad6f91700001000001e37a468ccc244367a5dae071a392cd00';
    return this.httpService.get(url, {headers: {Authorization: apiKey}});

  }
}