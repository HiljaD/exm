import { db } from './initFirebase';
import { doc, setDoc } from 'firebase/firestore';

interface BuildingData {
  id: string;
  nimi: string;
}

export const createBuilding = async (buildingData: BuildingData): Promise<void> => {
  const buildingRef = doc(db, 'buildings', buildingData.id);

  try {
    await setDoc(buildingRef, buildingData);
    console.log('Building successfully added to Firestore!');
  } catch (error) {
    console.error('Error adding building to Firestore: ', error);
  }
};
