import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Info, Skill, Work, Education } from '../models/model';
import { Observable } from 'rxjs';
import { DatabaseConstants } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private afs: AngularFirestore
  ) { }

  /**
   * Gets the basic info from the general collection
   */
  getInfo(): Observable<Info> {
    const infoDoc: AngularFirestoreDocument<Info> = this.afs.collection(DatabaseConstants.COLLECTION_GENERAL)
      .doc<Info>(DatabaseConstants.DOCUMENT_INFO);
    return infoDoc.valueChanges();
  }

  /**
   * Gets all the skills as array from the skills collection
   */
  getSkills(): Observable<Skill[]> {
    const skillCol: AngularFirestoreCollection<Skill> = this.afs.collection<Skill>(DatabaseConstants.COLLECTION_SKILLS);
    return skillCol.valueChanges();
  }

  /**
   * Gets all the works as array from the works collection
   */
  getWorks(): Observable<Work[]> {
    const workCol: AngularFirestoreCollection<Work> = this.afs.collection<Work>(DatabaseConstants.COLLECTION_WORKS);
    return workCol.valueChanges();
  }

  /**
   * Gets all the education as array from the education collection
   */
  getEducation(): Observable<Education[]> {
    const eduCol: AngularFirestoreCollection<Education> = this.afs.collection<Education>(DatabaseConstants.COLLECTION_EDUCATION);
    return eduCol.valueChanges();
  }
}
