import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Chip } from 'primeng/chip';
import { IconField } from 'primeng/iconfield';
import { Image } from 'primeng/image';
import { InputIcon } from 'primeng/inputicon';
import { InputText } from 'primeng/inputtext';
import { MegaMenuComponent } from './shared/components/mega-menu/mega-menu.component';
import { NgIf } from '@angular/common';
import { Ripple } from 'primeng/ripple';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Chip, IconField, Image, InputIcon, InputText, MegaMenuComponent, NgIf, Ripple],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'imdb-lite';
  showMenu = false;

  onMenuClick() {
    this.showMenu = true;
  }

  onMenuClose() {
    this.showMenu = false;
  }
}
