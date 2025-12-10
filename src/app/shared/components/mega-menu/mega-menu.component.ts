import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'mega-menu',
  templateUrl: './mega-menu.component.html',
  styleUrls: ['./mega-menu.component.scss'],
  imports: [
    NgForOf
  ]
})
export class MegaMenuComponent implements OnInit {
  menuItems: any[] | undefined;

  @Output() onMenuClose = new EventEmitter();

  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'Movies',
        items: [
          {
            title: 'IMDB Top 250 Movies',
            url: '/home'
          },
          {
            title: 'Most Popular movies',
            url: 'home'
          },
          {
            title: 'Top Hollywood Movies',
            url: 'home'
          },
          {
            title: 'Top Bollywood Movies',
            url: 'home'
          }
        ]
      },
      {
        label: 'TV Shows',
        items: [
          {
            title: 'IMDB Top 250 TV Shows',
            url: 'home/imdb-top-250-tv-shows'
          },
          {
            title: 'Most Popular TV Shows',
            url: 'home/imdb-top-250-tv-shows'
          }
        ]
      },
      {
        label: 'Celebs',
        items: [
          {
            title: 'Top 10 IMDB Celebs',
            url: 'home'
          },
          {
            title: 'Most Popular Celebs',
            url: 'home'
          },
          {
            title: 'New Stars',
            url: 'home'
          }
        ]
      },
      {
        label: 'Awards and Recognitions',
        items: [
          {
            title: 'Oscars',
            url: 'home'
          },
          {
            title: 'Grammy',
            url: 'home'
          },
          {
            title: 'FilmFare',
            url: 'home'
          }
        ]
      }
    ];
  }

  onCloseMenuClick(): void {
    this.onMenuClose.emit();
  }
}
