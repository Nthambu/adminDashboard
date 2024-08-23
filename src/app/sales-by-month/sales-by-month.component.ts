import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

import { ChartModule } from 'angular-highcharts';

@Component({
  selector: 'app-sales-by-month',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './sales-by-month.component.html',
  styleUrl: './sales-by-month.component.scss'
})

  
  export class SalesByMonthComponent {
    chart: Chart;

    constructor() {
      this.chart = new Chart({
        chart: {
          type: 'line' ,// Change this to your desired chart type
          height:200
          
        },
        
        title: {
          text: 'sales by month'
        },
        xAxis:{
          categories:[
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
          ]
        },
        yAxis:{
          title:{
            text:'Revenue in $'
          }

        },
        series:[
          {
            name:'arizona',
            type:'line',
            data:[70,69,95,145,182,215,252,265,233,183,139]
          },
          {
            name:'prevalence',
            type:'line',
            color:'black',
            data:[120,39,94,145,182,215,152,35,213,83,19]
          }
        ],
        
        credits:{
          enabled:false
        }
      });
    }
  }