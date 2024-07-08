import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-uygulamalar',
  templateUrl: './uygulamalar.component.html',
  styleUrls: ['./uygulamalar.component.scss'],
})
export class UygulamalarComponent implements OnInit {
  applications: any[] = [];
  isShowingActive: boolean = true; // Butonun durumunu takip etmek için

  @ViewChild('dt') table: Table | undefined;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData('uygulamalistesi').subscribe((data) => {
      this.applications = data;
      console.log('Applications:', this.applications); // Verileri kontrol etmek için log ekleyin
    });
  }

  applyFilter(event: Event, field: string) {
    const inputElement = event.target as HTMLInputElement;
    if (field === 'global') {
      this.table?.filterGlobal(inputElement.value, 'contains');
    } else {
      this.table?.filter(inputElement.value, field, 'contains');
    }
  }

  toggleActiveFilter() {
    this.isShowingActive = !this.isShowingActive;
    const filterValue = this.isShowingActive ? '1' : '0';
    this.table?.filter(filterValue, 'is_active', 'equals');
  }

  getTeamName(team: number): string {
    switch (team) {
      case 1:
        return 'Kurumsal Uygulamalar Operasyon';
      case 2:
        return 'BTO Aktif Dizin ve Mesajlaşma Operasyon';
      case 3:
        return 'Tümleşik İletişim Sistemleri';
      default:
        return 'Bilinmeyen Ekip';
    }
  }
}
