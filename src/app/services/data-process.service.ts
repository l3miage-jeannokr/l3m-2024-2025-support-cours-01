import { Injectable } from '@angular/core';
import rawData from '../data/data-colleges.csv';

@Injectable({
  providedIn: 'root'
})
export class DataProcessService {

  constructor() {
    // Process raw data into a usable format
    console.log(rawData.split("\n"));
  }


}
