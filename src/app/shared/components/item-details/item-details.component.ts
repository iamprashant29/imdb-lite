import { Component, Input, OnInit } from '@angular/core';
import { RunningTimePipe } from '../../pipes/running-time.pipe';
import { Tag } from 'primeng/tag';
import { Ripple } from 'primeng/ripple';
import { VotesCountPipe } from '../../pipes/votes-count.pipe';
import { Image } from 'primeng/image';
import { YouTubePlayer } from '@angular/youtube-player';
import { Chip } from 'primeng/chip';
import { NgForOf, NgIf } from '@angular/common';
import { Divider } from 'primeng/divider';

@Component({
  selector: 'item-details',
  templateUrl: './item-details.component.html',
  styleUrl: './item-details.component.scss',
  imports: [
    RunningTimePipe,
    Tag,
    Ripple,
    VotesCountPipe,
    Image,
    YouTubePlayer,
    Chip,
    NgForOf,
    Divider,
    NgIf
  ]
})
export class ItemListComponent implements OnInit {
  @Input() itemDetails: any;

  trailerId: string | undefined;

  ngOnInit() {
    window.scrollTo(0, 0);
    console.log(this.itemDetails);
    this.trailerId = this.itemDetails && this.itemDetails.trailer?
      this.itemDetails.trailer.split('=')[1] : '';
  }
}
