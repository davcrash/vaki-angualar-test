import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class VakiService {
  constructor(private firestore: AngularFirestore) {}

  getVaki(vakiId: string) {
    return this.firestore.collection('vakis').doc(vakiId).get();
  }
}
