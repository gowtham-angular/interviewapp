import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrl: './custom-pipe.component.scss'
})
export class CustomPipeComponent {
  codeSnippetHTML: string = `
  // data.component.html
  <p>{{ '2023-12-25' | dateFormat }}</p>
  `;

    codeSnippetTs: string = `
  // date-format.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {
  transform(value: string): string {
    const date = new Date(value);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    return 'day+'-'+month+'-'+year';
  }
}
    `;

  codeSnippetCSS: string = `
  // No CSS is required //
  `;
}
