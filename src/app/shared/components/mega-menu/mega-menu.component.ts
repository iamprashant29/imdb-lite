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
            url: 'home/imdb-top-250-movies'
          },
          {
            title: 'Most Popular movies',
            url: 'home/most-popular-movies'
          },
          {
            title: 'Top Hollywood Movies',
            url: 'home/top-box-office'
          },
          {
            title: 'Top Bollywood Movies',
            url: 'home/top-bollywood-movies'
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
            url: 'home/most-popular-tv'
          }
        ]
      },
      {
        label: 'India Spotlight',
        items: [
          {
            title: 'Top Rated Indian Movies',
            url: 'home/top-bollywood-movies'
          },
          {
            title: 'Top Rated Tamil Movies',
            url: 'home/top-rated-tamil-movies'
          },
          {
            title: 'Top Rated Telugu Movies',
            url: 'home/top-rated-telugu-movies'
          },
          {
            title: 'Top Rated Malayalam Movies',
            url: 'home/top-rated-malayalam-movies'
          }
        ]
      }
    ];
  }

  onCloseMenuClick(): void {
    this.onMenuClose.emit();
  }
}
