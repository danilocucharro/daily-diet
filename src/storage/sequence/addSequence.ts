import AsyncStorage from "@react-native-async-storage/async-storage";
import { SEQUENCE_COLLECTION } from "@storage/storageConfig";
import { getSequence } from "./getSequence";

export async function addSequence() {
  const { actualSequence, bestSequence } = await getSequence()
  const newActualSequence = actualSequence + 1

  if(newActualSequence > bestSequence) {
    const sequences = {
      actualSequence: newActualSequence,
      bestSequence: newActualSequence
    }

    await AsyncStorage.setItem(SEQUENCE_COLLECTION, JSON.stringify(sequences))
  } 
  else {
    const sequences = {
      actualSequence: newActualSequence,
      bestSequence: bestSequence
    }

    await AsyncStorage.setItem(SEQUENCE_COLLECTION, JSON.stringify(sequences))
  }
}