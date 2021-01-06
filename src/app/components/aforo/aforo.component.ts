import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexFill,
  ChartComponent,
  ApexDataLabels,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  colors: any;
  dataLabels: ApexDataLabels;
};

@Component({
  selector: 'app-aforo',
  templateUrl: './aforo.component.html',
  styleUrls: ['./aforo.component.scss'],
})
export class AforoComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [30],
      chart: {
        type: 'radialBar',
        offsetY: -20,
      },
      colors: ['#4CCFCA'],
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
            },
            value: {
              offsetY: -2,
              fontSize: '76px',
              color: '#ffffff',
              fontWeight: 'bold',
            },
          },
        },
      },
      fill: {},
      labels: [''],
    };
  }

  ngOnInit(): void {}
}
