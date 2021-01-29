import { Component, Input } from '@angular/core';
import { VakiReward } from '../../models/vaki-reward';

@Component({
  selector: 'vaki-challenge-reward-item',
  templateUrl: './reward-item.component.html',
  styleUrls: ['./reward-item.component.scss'],
})
export class RewardItemComponent {
  @Input() reward: VakiReward;
}
