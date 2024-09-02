import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-handle-error-notification',
  templateUrl: './handle-error-notification.component.html',
  styleUrl: './handle-error-notification.component.scss'
})
export class HandleErrorNotificationComponent implements OnInit {
  constructor(private notificationService: NotificationService) {}
  error:any;
  ngOnInit(): void {
    // Example usage
    this.notificationService.showError('An error occurred');
    this.getError();
  }

  getError() {
  
      this.error = 'An error occurred';
   
  }

  codeSnippetHTML: string = `
  <!-- error.component.html -->
<div *ngIf="(notificationService.error$ | async) as error" class="error">
  {{ error }}
</div>

  `;

  codeSnippetTs: string = `
// notification.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private errorSubject = new Subject<string>();
  error$ = this.errorSubject.asObservable();

  showError(message: string): void {
    this.errorSubject.next(message);
  }
}

// some.component.ts
import { Component, OnInit } from '@angular/core';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-some-component',
  templateUrl: './some.component.html'
})
export class SomeComponent implements OnInit {
  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    // Example usage
    this.notificationService.showError('An error occurred');
  }
}
  `;

  codeSnippetCSS: string = `
  // No CSS is required //
  `;


}
