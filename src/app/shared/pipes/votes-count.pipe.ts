import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'votesCount'
})
export class VotesCountPipe implements PipeTransform {
  transform(totalVotes: number): string {
    let votesCount = totalVotes.toString();
    if (totalVotes >= 1e+3) {
      votesCount = (totalVotes / 1e+3).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    if (totalVotes >= 1e+6) {
      votesCount = (totalVotes / 1e+6).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (totalVotes >= 1e+9) {
      votesCount = (totalVotes / 1e+9).toFixed(1).replace(/\.0$/, '') + 'B';
    }
    return `${votesCount}`;
  }
}
