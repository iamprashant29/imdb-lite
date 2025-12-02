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
          'Upcoming Releases',
          'Most Popular',
          'Top Bollywood Movies',
          'Top Hollywood Movies',
          'IMDB Top 250 Movies',
          'Documentary Movies',
          'Browse Movies by Genre'
        ]
      },
      {
        label: 'TV Shows',
        items: [
          'Upcoming TV Shows',
          'Most Popular TV Shows Worldwide',
          'Indian TV Shows',
          'American TV Shows',
          'Browse TV Shows by Genre'
        ]
      },
      {
        label: 'Celebs',
        items: [
          'Top 10 IMDB Celebs',
          'Most Popular Celebs',
          'New Stars'
        ]
      },
      {
        label: 'Awards and Recognitions',
        items: [
          'Oscars',
          'Grammy',
          'FilmFare',
          'Events'
        ]
      }
    ];
  }

  onCloseMenuClick(): void {
    this.onMenuClose.emit();
  }
}
