import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RewardContainerComponent } from './components/reward-container/reward-container.component';
import { RewardItemComponent } from './components/reward-item/reward-item.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { VakiContainerComponent } from './components/vaki-container/vaki-container.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { effects } from './redux/effects';
import { reducers } from './redux/reducers';
import { ShopcartContainerComponent } from './components/shopcart-container/shopcart-container.component';

@NgModule({
  declarations: [
    AppComponent,
    RewardContainerComponent,
    RewardItemComponent,
    VakiContainerComponent,
    ShopcartContainerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatProgressBarModule,

    AngularFireModule.initializeApp(environment.firebase),
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    EffectsModule.forRoot(effects),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
