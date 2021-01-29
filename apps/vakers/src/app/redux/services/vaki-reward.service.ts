import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class VakiRewardService {
  constructor(private firestore: AngularFirestore) {}

  getVakiRewards(vakiId: string) {
    return this.firestore
      .collection('vakis')
      .doc(vakiId)
      .collection('vaki-rewards')
      .get();
  }
}
