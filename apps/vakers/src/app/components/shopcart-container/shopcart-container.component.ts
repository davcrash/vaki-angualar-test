import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { ShopCartItem } from '../../models/shopcart-item';
import { State } from '../../redux/reducers';
import { VakiShopcartState } from '../../redux/reducers/vaki-shopcart.reducer';
import * as vakiShopcartActions from '../../redux/actions/vaki-shopcart.actions';
import { VakiReward } from '../../models/vaki-reward';

@Component({
  selector: 'vaki-challenge-shopcart-container',
  templateUrl: './shopcart-container.component.html',
  styleUrls: ['./shopcart-container.component.scss'],
})
export class ShopcartContainerComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  shopcart: ShopCartItem[];
  total: number;
  isLoading = true;

  constructor(private store: Store<State>) {}
  ngOnInit() {
    this.suscribeToCart();
  }

  suscribeToCart(): void {
    this.subscription.add(
      this.store
        .pipe(select('shopcart'))
        .subscribe((shopcart: VakiShopcartState) => {
          this.shopcart = shopcart.items;
          this.total = shopcart.total;
        })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  addCartItem(reward: VakiReward) {
    this.store.dispatch(vakiShopcartActions.addItem({ reward }));
  }

  deleteCartItem(reward: VakiReward) {
    this.store.dispatch(vakiShopcartActions.deleteItem({ reward }));
  }

  buyCart() {
    this.store.dispatch(vakiShopcartActions.buyCart());
  }
}
