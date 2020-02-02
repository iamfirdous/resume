import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Firdous\' resume';

  constructor(
    private data: DataService
  ) { }

  addInfo(): void {
    this.data.addGeneralInfo({
      name: 'Firdous',
      whatAmI: 'Software Developer',
      logo: '',
      aboutMe: 'This is some text that is going to describe me'
    });
  }
}
