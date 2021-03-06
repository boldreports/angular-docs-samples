import { Component } from '@angular/core';

@Component({
  selector: 'ej-sample',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.css']
})
export class ReportDesignerGettingStartedComponent {
  public serviceUrl: string;

  constructor() {
    this.serviceUrl = 'https://demos.boldreports.com/services/api/ReportingAPI';
  }
}
