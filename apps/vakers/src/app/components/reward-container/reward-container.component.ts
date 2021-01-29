import { Component } from '@angular/core';
import { VakiReward } from '../../models/vaki-reward';

@Component({
  selector: 'vaki-challenge-reward-container',
  templateUrl: './reward-container.component.html',
  styleUrls: ['./reward-container.component.scss'],
})
export class RewardContainerComponent {
  reward: VakiReward = {
    title: 'Este es un titulo',
    key: 'todo',
    description:
      'Lorem Ipsum is simply dumm asd asd as das das da asd a qwe d as dqkwdkqwd as dqw asdasdqwe ',
    img: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
    value: '$12312 COP',
    claimed: 1,
    visible: true,
    delivery_date: 123,
    quantityAvailable: 1,
  };
}
