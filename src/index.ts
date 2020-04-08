import { useEffect, useState } from "react";
import { useAsyncStorage } from "@react-native-community/async-storage";

function useStorage<T>(storageKey: string, defaultValue: T) {
  const [storageItem, setStorageItem] = useState<T>(defaultValue);
  const { getItem, setItem } = useAsyncStorage(storageKey);

  async function setStoredValue(value: T) {
    try {
      await setItem(JSON.stringify(value));
      setStorageItem(value);
    } catch (e) {}
  }

  useEffect(() => {
    async function getStoredValue() {
      try {
        const data = await getItem();
        if (data) setStorageItem(JSON.parse(data));
      } catch (e) {}
    }

    getStoredValue();
  }, []);

  return [storageItem ? storageItem : defaultValue, setStoredValue];
}

export { useStorage as useAsyncStorage };
