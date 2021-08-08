
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
//import { Chart } from 'chart.js';
import {Chart} from 'node_modules/chart.js';




@Component({
  selector: 'app-water-page',
  templateUrl: './water-page.page.html',
  styleUrls: ['./water-page.page.scss'],
})
export class WaterPagePage implements OnInit {

  bars: any;

ngOnInit() {
  this.bars = new Chart("barChart", {
    type: 'bar',
    data: {
      labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
      datasets: [{
        label: 'Viewers in millions',
        data: [2.5, 3.8, 5, 6.9, 6.9, 7.5, 10, 17],
        backgroundColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
        borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
            beginAtZero: true
        }
    }
    }
  });

 
}

createBarChart() {

}
  
}


 


