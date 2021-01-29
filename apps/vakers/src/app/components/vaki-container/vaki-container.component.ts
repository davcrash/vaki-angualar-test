import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { State } from '../../redux/reducers';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Vaki } from '../../models/vaki';
import * as vakiActions from '../../redux/actions/vaki.actions';
import { VakiState } from '../../redux/reducers/vaki.reducer';

@Component({
  selector: 'vaki-challenge-vaki-container',
  templateUrl: './vaki-container.component.html',
  styleUrls: ['./vaki-container.component.scss'],
})
export class VakiContainerComponent implements OnInit, OnDestroy {
  @Input() vakiId: string;
  subscription: Subscription = new Subscription();
  vaki: Vaki;
  isLoading = true;

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.loadVaki();
    this.suscribeToVaki();
  }

  loadVaki() {
    this.store.dispatch(vakiActions.loadVaki({ vakiId: this.vakiId }));
  }

  suscribeToVaki(): void {
    this.subscription.add(
      this.store.pipe(select('vaki')).subscribe((vaki: VakiState) => {
        this.vaki = vaki.vaki;
        this.isLoading = vaki.isLoading;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
