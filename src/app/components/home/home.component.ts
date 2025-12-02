import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageModule } from 'primeng/image';
import { Chip } from 'primeng/chip';
import { Ripple } from 'primeng/ripple';
import { IconField } from 'primeng/iconfield';
import { InputText } from 'primeng/inputtext';
import { InputIcon } from 'primeng/inputicon';
import { MegaMenuComponent } from '../../shared/components/mega-menu.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'imdb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    RouterOutlet,
    ImageModule,
    Chip,
    Ripple,
    IconField,
    InputText,
    InputIcon,
    MegaMenuComponent,
    NgIf
  ],

})
export class HomeComponent {
  showMenu = false;

  onMenuClick() {
    this.showMenu = true;
  }

  onMenuClose() {
    this.showMenu = false;
  }
}
