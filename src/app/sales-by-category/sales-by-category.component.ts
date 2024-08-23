import { Component } from '@angular/core';
import { Chart, ChartModule } from 'angular-highcharts';

@Component({
  selector: 'app-sales-by-category',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './sales-by-category.component.html',
  styleUrl: './sales-by-category.component.scss'
})
export class SalesByCategoryComponent {
  chart: Chart;

  constructor() {
    this.chart = new Chart({
      chart: {
        type: 'pie' ,// Change this to your desired chart type
        height:200
        
      },
      
      title: {
        text: 'sales by category'
      },
      xAxis:{
        categories:[
          'Electronics',
          'Cosmetics',
          'Groceries',
          'Clothes',
          'Appliances'
      
        ]
      },
      yAxis:{
        title:{
          text:'Revenue in %'
        }

      },
      series:[
        
        {
          
          type:'pie',
          data:[
            {
              name:'Electronics',
              y:41.0,
              color:'red'
            
          },
          {
            name:'Groceries',
            y:22.0,
            color:'yellow'
          
        },
          {
            name:'Cosmetics',
            y:6.5,
            color:'#ede9e20'
          
        },
        {
          name:'Clothes',
          y:15.2,
          color:'#6920fb'
        
      },
      {
        name:'Appliances',
        y:3.5,
        color:'green'
      
    }
        ]
          
        }
      ],
      
      credits:{
        enabled:false
      }
    });
  }
}
