import { Component, OnInit } from '@angular/core';
import { Chart, ChartModule } from 'angular-highcharts';

@Component({
  selector: 'app-top-three-products',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './top-three-products.component.html',
  styleUrl: './top-three-products.component.scss'
})
export class TopThreeProductsComponent {
  chart: Chart;

  constructor() {
    this.chart = new Chart({
      chart: {
        type: 'bar' ,// Change this to your desired chart type
        height:200
        
      },
      
      title: {
        text: 'top three products'
      },
      xAxis:{
        categories:[
          'shoes',
          'Cars',
          'Smartphones'
         
      
        ]
      },
      yAxis:{
        title:{
          text:''
        }

      },
      series:[
        
        {
          
          type:'bar',
          data:[
            {
              name:'shoes',
              y:91.0,
              color:'red'
            
          },
          {
            name:'Cars',
            y:20,
            color:'yellow'
          
        },
          {
            name:'smartphones',
            y:115,
            color:'#ede9e20'
          
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
