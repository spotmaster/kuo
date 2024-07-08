import { Component, OnInit } from '@angular/core';

interface Envanter {
  team: number;
  id: number;
  type: string;
  domain: string;
  environment: string;
  name: string;
  address: string;
}

@Component({
  selector: 'app-envanter',
  templateUrl: './envanter.component.html',
  styleUrls: ['./envanter.component.scss'],
})
export class EnvanterComponent implements OnInit {
  envanterList: Envanter[] = [];
  filteredEnvanter: Envanter | null = null;

  constructor() {}

  ngOnInit(): void {
    this.envanterList = [
      {
        team: 1,
        id: 1,
        type: 'Uygulama sunucusu',
        domain: 'Sabit',
        environment: 'Canlı',
        name: 'server1',
        address: '192.168.1.1',
      },
      {
        team: 2,
        id: 2,
        type: 'Database sunucusu',
        domain: 'Sabit',
        environment: 'Canlı',
        name: 'DB1',
        address: '192.168.1.2',
      },
      {
        team: 3,
        id: 3,
        type: 'Load Balancer',
        domain: 'Sabit',
        environment: 'Canlı',
        name: '',
        address: '192.168.1.3',
      },
      {
        team: 1,
        id: 4,
        type: 'Uygulama sunucusu',
        domain: 'Sabit',
        environment: 'Test',
        name: 'server2',
        address: '192.168.1.4',
      },
      {
        team: 2,
        id: 1,
        type: 'Web sunucusu',
        domain: 'Mobil',
        environment: 'Test',
        name: 'web1',
        address: '192.168.1.5',
      },
    ];
  }

  getTeamName(team: number): string {
    switch (team) {
      case 1:
        return 'Kurumsal Uygulama Operasyonları';
      case 2:
        return 'Middleware Ekibi';
      case 3:
        return 'Sabit Dizin Ekibi';
      default:
        return 'Bilinmeyen Ekip';
    }
  }

  getAppName(id: number): string {
    switch (id) {
      case 1:
        return 'EDİTT';
      case 2:
        return 'SSMS';
      case 3:
        return 'ATS';
      case 4:
        return 'Outlook';
      default:
        return 'Bilinmeyen Uygulama';
    }
  }

  onSearch(event: Event): void {
    const searchTerm = (event.target as HTMLInputElement).value.toLowerCase();
    const results = this.envanterList.filter(
      (envanter) =>
        envanter.type.toLowerCase().includes(searchTerm) ||
        envanter.domain.toLowerCase().includes(searchTerm) ||
        envanter.environment.toLowerCase().includes(searchTerm) ||
        envanter.name.toLowerCase().includes(searchTerm) ||
        envanter.address.toLowerCase().includes(searchTerm)
    );

    this.filteredEnvanter = results.length === 1 ? results[0] : null;
  }
}
