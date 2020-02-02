import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Info, Skill, Work, Education } from '../models/model';
import { DatabaseConstants } from '../constants/constants';
import { firestore } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private afs: AngularFirestore
  ) { }

  /**
   * Adds/Updates basic info doc to general collection
   * @param info
   */
  addGeneralInfo(info: Info): void {
    try {
      const addBatch: firestore.WriteBatch = this.afs.firestore.batch();
      const docRef: DocumentReference = this.afs.collection(DatabaseConstants.COLLECTION_GENERAL)
        .doc(DatabaseConstants.DOCUMENT_INFO).ref;

      addBatch.set(docRef, info, { merge: true });
      addBatch.commit();
    } catch (e) {
      throw e;
    }
  }

  /**
   * Adds skill to the 'skills' collection
   * @param skill
   */
  addSkill(skill: Skill): void {
    try {
      const addBatch: firestore.WriteBatch = this.afs.firestore.batch();
      const newId: string = this.afs.createId();
      skill.id = newId;

      const docRef: DocumentReference = this.afs.collection(DatabaseConstants.COLLECTION_SKILLS)
        .doc(newId).ref;

      addBatch.set(docRef, skill);
      addBatch.commit();
    } catch (e) {
      throw e;
    }
  }

  /**
   * Adds work to the 'works' collection
   * @param work
   */
  addWork(work: Work): void {
    try {
      const addBatch: firestore.WriteBatch = this.afs.firestore.batch();
      const newId: string = this.afs.createId();
      work.id = newId;

      const docRef: DocumentReference = this.afs.collection(DatabaseConstants.COLLECTION_WORKS)
        .doc(newId).ref;

      addBatch.set(docRef, work);
      addBatch.commit();
    } catch (e) {
      throw e;
    }
  }

  /**
   * Adds education to the 'education' collection
   * @param education
   */
  addEducation(education: Education): void {
    try {
      const addBatch: firestore.WriteBatch = this.afs.firestore.batch();
      const newId: string = this.afs.createId();
      education.id = newId;

      const docRef: DocumentReference = this.afs.collection(DatabaseConstants.COLLECTION_EDUCATION)
        .doc(newId).ref;

      addBatch.set(docRef, education);
      addBatch.commit();
    } catch (e) {
      throw e;
    }
  }
}
