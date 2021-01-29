import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { VakiReward } from '../../models/vaki-reward';
import { Store, select } from '@ngrx/store';
import { State } from '../../redux/reducers';
import * as vakiRewardActions from '../../redux/actions/vaki-reward.actions';
import { VakiRewardState } from '../../redux/reducers/vaki-reward.reducer';

@Component({
  selector: 'vaki-challenge-reward-container',
  templateUrl: './reward-container.component.html',
  styleUrls: ['./reward-container.component.scss'],
})
export class RewardContainerComponent implements OnDestroy, OnInit {
  @Input() vakiId: string;
  isLoading = true;
  reguards: VakiReward[];
  subscription: Subscription = new Subscription();

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.loadVaki();
    this.suscribeToVaki();
  }

  loadVaki() {
    this.store.dispatch(
      vakiRewardActions.loadVakiRewards({ vakiId: this.vakiId })
    );
  }

  suscribeToVaki(): void {
    this.subscription.add(
      this.store
        .pipe(select('reguards'))
        .subscribe((state: VakiRewardState) => {
          this.reguards = state.reguards;
          this.isLoading = state.isLoading;
        })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
