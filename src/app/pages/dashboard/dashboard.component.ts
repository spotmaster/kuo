import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {
  Chart,
  ChartType,
  ChartData,
  ChartOptions,
  registerables,
} from 'chart.js';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  @ViewChild('doughnutChart', { static: true })
  doughnutChart!: ElementRef<HTMLCanvasElement>;
  @ViewChild('lineChart', { static: true })
  lineChart!: ElementRef<HTMLCanvasElement>; // Yeni grafik için ViewChild

  constructor() {
    // Gerekli bileşenleri kaydedin
    Chart.register(...registerables);
    // DataLabelsPlugin eklentisini kaydedin
    Chart.register(DataLabelsPlugin);
  }

  ngOnInit(): void {
    this.createDoughnutChart();
    this.createLineChart(); // Yeni grafik oluşturma işlevini çağırın
  }

  createDoughnutChart(): void {
    new Chart(this.doughnutChart.nativeElement, {
      type: 'doughnut' as ChartType,
      data: {
        labels: [
          'Kurumsal Uygulamalar Operasyon',
          'BTO Aktif Dizin ve Mesajlasma Opr.',
          'Tümleşik İletişim Sistemleri',
        ],
        datasets: [
          {
            data: [100, 75, 90],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
          },
          datalabels: {
            color: 'white',
            font: {
              weight: 'bold',
              size: 16,
            },
            formatter: (value: number) => value.toString(),
          },
        },
      },
    });
  }

  createLineChart(): void {
    new Chart(this.lineChart.nativeElement, {
      type: 'line' as ChartType,
      data: {
        labels: [
          'Ocak',
          'Şubat',
          'Mart',
          'Nisan',
          'Mayıs',
          'Haziran',
          'Temmuz',
        ],
        datasets: [
          {
            label: 'Kurumsal Uygulamalar Operasyon',
            data: [100, 120, 150, 170, 180, 190, 200],
            borderColor: '#FF6384',
            fill: false,
            tension: 0.1,
          },
          {
            label: 'BTO Aktif Dizin ve Mesajlasma Opr.',
            data: [75, 80, 85, 90, 95, 100, 105],
            borderColor: '#36A2EB',
            fill: false,
            tension: 0.1,
          },
          {
            label: 'Tümleşik İletişim Sistemleri',
            data: [90, 100, 110, 120, 130, 140, 150],
            borderColor: '#FFCE56',
            fill: false,
            tension: 0.1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
          },
          datalabels: {
            color: 'black',
            font: {
              weight: 'bold',
              size: 16,
            },
            formatter: (value: number) => value.toString(),
          },
        },
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: 'Aylar',
            },
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Sayı',
            },
          },
        },
      },
    });
  }
}
