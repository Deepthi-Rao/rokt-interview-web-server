import { Controller, Get, Param, Query } from '@nestjs/common';
import { map } from 'rxjs';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('all')
  getAll(@Query() query) {
    console.log(query && query.url ? query.url: '');
    return this.appService.getAllImages((query && query.url ? query.url: '')).pipe(
    map(response => response.data)
  );
  }
}
