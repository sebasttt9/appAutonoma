import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IonicModule, BienvenidaComponent],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {}
