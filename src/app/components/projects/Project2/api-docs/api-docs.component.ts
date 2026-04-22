import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
// @ts-ignore
import SwaggerUI from 'swagger-ui-dist/swagger-ui-bundle';

@Component({
  selector: 'app-api-docs',
  standalone: true,
  templateUrl: './api-docs.component.html',
  styleUrls: ['./api-docs.component.css']
})
export class ApiDocsComponent implements AfterViewInit {

  @ViewChild('swaggerContainer', { static: true })
  swaggerContainer!: ElementRef;

  private ui: any;

  ngAfterViewInit(): void {
    this.loadSwagger('portfolio');
  }

  loadSwagger(api: string) {
    const base = window.location.origin;

    const urls: any = {
      portfolio: `${base}/assets/openapi/portfolio-openapi.json`,
      user: `${base}/assets/openapi/user-openapi.json`
    };

    if (this.ui) {
      this.swaggerContainer.nativeElement.innerHTML = '';
    }

    this.ui = SwaggerUI({
      domNode: this.swaggerContainer.nativeElement,
      url: urls[api],
      deepLinking: true,
      docExpansion: 'none',
      validatorUrl: null,
      presets: [
        SwaggerUI.presets.apis
      ],
    });
  }

  onApiChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.loadSwagger(value);
  }
}
