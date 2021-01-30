import { createReducer, on, Action } from '@ngrx/store';
import * as shopcartActions from '../actions/vaki-shopcart.actions';
import { ShopCartItem } from '../../models/shopcart-item';

export interface VakiShopcartState {
  isLoading: boolean;
  items: ShopCartItem[];
  total: number;
  error: unknown;
}

const initialState: VakiShopcartState = {
  isLoading: true,
  items: [],
  total: 0,
  error: null,
};

const reducer = createReducer(
  initialState,
  on(shopcartActions.addItem, (state: VakiShopcartState, { reward }) => {
    const index = state.items.map((i) => i.reward).indexOf(reward);
    const itemsCopy = [...state.items];
    const newTotal = Number.parseInt(reward.value) + state.total;
    if (index === -1) {
      itemsCopy.push({ reward, qty: 1 });
      return { ...state, items: itemsCopy, total: newTotal };
    }
    itemsCopy[index] = {
      ...itemsCopy[index],
      qty: itemsCopy[index].qty + 1,
    };
    return { ...state, items: itemsCopy, total: newTotal };
  }),
  on(shopcartActions.deleteItem, (state: VakiShopcartState, { reward }) => {
    const index = state.items.map((i) => i.reward).indexOf(reward);
    const currentQty = state.items[index].qty;
    const itemsCopy = [...state.items];
    const newTotal = state.total - Number.parseInt(reward.value);
    if (currentQty === 1) {
      itemsCopy.splice(index, 2);
      return { ...state, items: itemsCopy, total: newTotal };
    }
    itemsCopy[index] = {
      ...itemsCopy[index],
      qty: itemsCopy[index].qty - 1,
    };
    return { ...state, items: itemsCopy, total: newTotal };
  }),
  on(shopcartActions.buyCart, () => {
    return initialState;
  })
);

export function vakiShopcartReducer(state: VakiShopcartState, action: Action) {
  return reducer(state, action);
}
