import { Injectable } from '@angular/core';
import { DataSourcing, ChangeLogItem } from './change-log.interface';

@Injectable({
  providedIn: 'root'
})
export class ChangeLogService {

  constructor() { }

  getDataSourcingGroup(): DataSourcing[] {
    // Logic to fetch data sourcing groups
    const dataSourcingGroup: DataSourcing[] = [
      { id: 1 },
      { id: 2 }
    ];
    return dataSourcingGroup;
  }

  createDataSourcingGroup(dataSourcing: DataSourcing[]): void {
    // Logic to create a new data sourcing group
    console.log('Creating new data sourcing group:', dataSourcing);
  }

  updatingDataSourcingGroup(dataSourcing: DataSourcing[]): void {
    // Logic to create a new data sourcing group
    console.log('Updating data sourcing group:', dataSourcing);
  }

  getChangeLogItems(): ChangeLogItem[] {
    // Logic to fetch change log items
    const changeLogItems: DataSourcing[] = [
      { id: 1 },
      { id: 2 }
    ];
    return changeLogItems;
  }
}
