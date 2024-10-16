import AsyncStorage from "@react-native-async-storage/async-storage";
import { SEQUENCE_COLLECTION } from "@storage/storageConfig";
import { SequenceStorageDTO } from "./SequenceStorageDTO";

export async function getSequence() {
  const sequenceStoraged = await AsyncStorage.getItem(SEQUENCE_COLLECTION)
  const sequences: SequenceStorageDTO = sequenceStoraged ? JSON.parse(sequenceStoraged) : {
    actualSequence: 0,
    bestSequence: 0
  }
  
  return sequences
}