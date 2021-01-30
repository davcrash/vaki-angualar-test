import { createAction, props } from '@ngrx/store';
import { VakiReward } from '../../models/vaki-reward';

export const addItem = createAction(
  '[Shopcart] addItem',
  props<{ reward: VakiReward }>()
);
export const deleteItem = createAction(
  '[Shopcart] deleteItem',
  props<{ reward: VakiReward }>()
);
export const buyCart = createAction('[Shopcart] buyCart');
