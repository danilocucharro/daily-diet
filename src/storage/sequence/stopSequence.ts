import AsyncStorage from "@react-native-async-storage/async-storage";

import { getSequence } from "./getSequence";
import { SEQUENCE_COLLECTION } from "@storage/storageConfig";

export async function stopSequence() {
  const { bestSequence } = await getSequence()

  const sequences = {
    actualSequence: 0,
    bestSequence: bestSequence
  }

  await AsyncStorage.setItem(SEQUENCE_COLLECTION, JSON.stringify(sequences))
}