import { Component, Input } from '@angular/core';
import { VakiReward } from '../../models/vaki-reward';
import { Store } from '@ngrx/store';
import { State } from '../../redux/reducers';
import * as vakiShopcartActions from '../../redux/actions/vaki-shopcart.actions';

@Component({
  selector: 'vaki-challenge-reward-item',
  templateUrl: './reward-item.component.html',
  styleUrls: ['./reward-item.component.scss'],
})
export class RewardItemComponent {
  @Input() reward: VakiReward;

  constructor(private store: Store<State>) {}

  addToCart() {
    this.store.dispatch(vakiShopcartActions.addItem({ reward: this.reward }));
  }
}
