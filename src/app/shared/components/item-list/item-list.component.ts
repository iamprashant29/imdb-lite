import { Component, Input } from '@angular/core';
import { Button } from 'primeng/button';
import { Card } from 'primeng/card';
import { Chip } from 'primeng/chip';
import { Image } from 'primeng/image';
import { NgForOf } from '@angular/common';
import { Ripple } from 'primeng/ripple';
import { RunningTimeComponent } from '../../pipes/running-time.pipe';
import { Tag } from 'primeng/tag';
import { VotesCountPipe } from '../../pipes/votes-count.pipe';


@Component({
  selector: 'item-list',
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss',
  imports: [
    Button,
    Card,
    Chip,
    Image,
    NgForOf,
    Ripple,
    RunningTimeComponent,
    Tag,
    VotesCountPipe
  ]
})
export class ItemListComponent {
  @Input() title: string | undefined;

  @Input() subtitle: string | undefined;

  @Input() itemsList: any[] | undefined;
}
