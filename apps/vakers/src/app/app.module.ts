import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { RewardContainerComponent } from './components/reward-container/reward-container.component';
import { RewardItemComponent } from './components/reward-item/reward-item.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { VakiContainerComponent } from './components/vaki-container/vaki-container.component';

@NgModule({
  declarations: [AppComponent, RewardContainerComponent, RewardItemComponent, VakiContainerComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
