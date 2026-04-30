import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ChartConstructorType, HighchartsChartComponent } from 'highcharts-angular';
import { EmploymentContainer } from '../../components/employment-container/employment-container';
import { EmploymentHistory } from '../../models/employment-history';
@Component({
  selector: 'app-cv',
  providers: [provideNativeDateAdapter()],

  imports: [
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatCardModule,
    HighchartsChartComponent,
    EmploymentContainer
  ],
  templateUrl: './cv.html',
  styleUrl: './cv.scss',
})
export class Cv {


  employmentHistories = signal<EmploymentHistory[]>([]);

  chartOptions: Highcharts.Options = {

    chart: {
      type: 'bar',
      backgroundColor: '#121316'
    },
    title: {
      text: 'Skills Matrix',
      style: {
        color: '#ffffff'
      }
    },
    xAxis: {
      categories: [
        'Analyzing client specifications',
        'Android ',
        'Angular ',
        'Architecture review',
        'ERD Diagrams ',
        'Git ',
        'HTML 5',
        'Next JS',
        'React',
        'Refactoring code',
        'SCSS',
        'Testing ',
        'Typescript ',
        'Web components ',
      ],

      title: {
        text: null
      },
      gridLineWidth: 1,
      lineWidth: 0,
      gridLineColor: '#2b2b2b',
      labels: {
        style: {
          color: '#ffffff'
        }
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Years of experience',
        align: 'high',
        style: {
          color: '#ffffff'
        }
      },
      labels: {
        overflow: 'justify',
        style: {
          color: '#ffffff'
        }
      },
      gridLineWidth: 1,
      gridLineColor: '#2b2b2b'
    },
    tooltip: {
      valueSuffix: ' years',
      backgroundColor: '#121212',
      style: {
        color: '#ffffff'
      }
    },
    plotOptions: {
      bar: {
        borderRadius: '50%',
        color: '#3f51b5',
        dataLabels: {
          enabled: true,
          color: '#ffffff'
        },
        groupPadding: 0.1
      }
    },

    credits: {
      enabled: false
    },
    series: [{

      data: [10,
        3,
        8,
        10,
        12,
        12,
        10,
        2,
        2,
        12,
        10,
        8,
        10,
        8,
      ]
    },
      // {
      //   name: 'Year 2000',
      //   data: [814, 841, 3714, 726]
      // }, {
      //   name: 'Year 2021',
      //   data: [1393, 1031, 4695, 745]
      // }
    ]
  }; // Required
  chartConstructor: ChartConstructorType = 'chart'; // Optional, defaults to 'chart'

  ngAfterViewInit(): void {
    this.loadEmploymentHistory();
  }

  private loadEmploymentHistory(): void {
    void fetch('/employment-history/employment-history.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load employment history (${response.status})`);
        }
        return response.json() as Promise<EmploymentHistory[]>;
      })
      .then((employmentHistory) => {
        this.employmentHistories.set(employmentHistory);
      })
      .catch((error: unknown) => {
        console.error(error);
      });
  }
}
