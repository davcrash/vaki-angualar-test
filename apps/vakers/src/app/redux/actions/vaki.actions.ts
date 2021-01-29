import { createAction, props } from '@ngrx/store';
import { Vaki } from '../../models/vaki';

export const loadVaki = createAction(
  '[Vaki] Load Vaki',
  props<{ vakiId: string }>()
);
export const loadVakiSuccess = createAction(
  '[Vaki] Load Vaki Success',
  props<{ vaki: Vaki }>()
);
export const loadVakiFailure = createAction(
  '[Vaki] Load Vaki Failure',
  props<{ error: unknown }>()
);
