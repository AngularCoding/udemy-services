import { Component, EventEmitter, Output } from '@angular/core';
import {LogginingService} from '../loggining.service';
import {AccountsService} from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {

  constructor(private loggingService: LogginingService,
              private accountsService: AccountsService) {
    console.log('NewAccountComponent log');
    this.accountsService.statusUpdated.subscribe((status: string) => {
      alert('New Status: ' + status);
      console.log('NewAccountComponent constructor');
    });
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus)
    this.loggingService.logStatusChange(accountStatus);
  }
}
