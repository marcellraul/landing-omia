import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexFill,
  ChartComponent,
  ApexDataLabels,
} from 'ng-apexcharts';
import { AforoActualService } from 'src/app/services/aforo-actual.service';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  colors: any;
  dataLabels: ApexDataLabels;
  responsive: any;
  title: any;
};

@Component({
  selector: 'app-aforo',
  templateUrl: './aforo.component.html',
  styleUrls: ['./aforo.component.scss'],
})
export class AforoComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public date: any;
  public datehour: any;

  public porcentaje_aforo;
  public porcentaje_ocupacion;
  public aforo_actual;
  public capacidad;
  public disponible;

  public label;

  constructor(private aforoActualService: AforoActualService) {
    this.getDataChart();
  }

  ngOnInit(): void {
    setInterval(() => this.getDataChart(), 60000);
  }

  public getDataChart() {
    this.date = new Date();
    this.date.getFullYear();
    this.datehour = new Date();
    this.datehour.getFullYear();

    this.aforoActualService
      .getAforoActual(100032, null, null, null, null, null, null)
      .subscribe((data) => {
        console.log('DATA SERVICE: ', data);
        if (data?.success) {
          this.disponible = data.data[0].disponible;
          this.capacidad = data.data[0].capacidad;
          this.aforo_actual = Math.round(
            data.data[0].prom * data.data[0].capacidad
          );
          this.porcentaje_aforo = Math.round(data.data[0].prom * 100);

          /* this.label = 'Personas ahora: ' + this.aforo_actual; */

          this.generateChart();
        }
      });
  }

  public generateChart() {
    this.chartOptions = {
      series: [this.porcentaje_aforo],
      chart: {
        type: 'radialBar',
        //offsetY: -50,
        //height: 'auto'
        //width: 500,
        height: 800,
      },
      colors: ['#4CCFCA'],
      title: 'asd',
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          track: {
            background: '#ffffff',
            strokeWidth: '97%',
            margin: 5, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: 2,
              left: 0,
              opacity: 0.31,
              blur: 2,
            },
          },

          dataLabels: {
            name: {
              show: true,
              fontSize: '30px',
              color: '#ffffff',
              offsetY: -10,
              fontWeight: 'bold',
            },
            value: {
              show: true,
              offsetY: -100,
              fontSize: '70px',
              color: '#ffffff',
              fontWeight: 'bold',
              /* formatter(val: number){
                return val.toString();
              } */
            },
            /* total: {
                show: true,
                formatter(opts: any){
                  console.log(opts);
                 return opts 
                }
            } */
          },
        },
      },
      fill: {},
      labels: ['Porcentaje de ocupación'],
      //labels: ['Personas ahora mismo'],
    };
  }

  getAforoActual() {
    return this.aforo_actual;
  }

  public numberWithPoint(x) {
    if (x != 0) {
      if (x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      } else {
        return '';
      }
    } else {
      return x;
    }
  }
}
