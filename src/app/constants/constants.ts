export interface KeyValue {
  [key: string]: string;
}

export const DatabaseConstants: KeyValue = {
  COLLECTION_GENERAL: 'general',
  COLLECTION_SKILLS: 'skills',
  COLLECTION_WORKS: 'works',
  COLLECTION_EDUCATION: 'education',
  DOCUMENT_INFO: 'info'
};
