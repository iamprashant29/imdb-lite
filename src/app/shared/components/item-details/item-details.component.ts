import { Component, Input, OnInit } from '@angular/core';
import { RunningTimePipe } from '../../pipes/running-time.pipe';
import { Tag } from 'primeng/tag';
import { Ripple } from 'primeng/ripple';
import { VotesCountPipe } from '../../pipes/votes-count.pipe';


@Component({
  selector: 'item-details',
  templateUrl: './item-details.component.html',
  imports: [
    RunningTimePipe,
    Tag,
    Ripple,
    VotesCountPipe
  ],
  styleUrl: './item-details.component.scss'
})
export class ItemListComponent implements OnInit {
  @Input() itemDetails: any;

  ngOnInit() {
    console.log(this.itemDetails);
  }
}
