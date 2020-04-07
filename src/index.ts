import { useEffect, useState } from "react";
import { useAsyncStorage } from "@react-native-community/async-storage";

function useStorage(storageKey: string, defaultValue: any) {
  const [storageItem, setStorageItem] = useState(defaultValue);
  const { getItem, setItem } = useAsyncStorage(storageKey);

  async function setStoredValue(value: any) {
    try {
      await setItem(JSON.stringify(value));
      setStorageItem(JSON.stringify(value));
    } catch (e) {}
  }

  useEffect(() => {
    async function getStoredValue() {
      try {
        const data = await getItem();
        if (data) setStorageItem(data);
      } catch (e) {}
    }

    getStoredValue();
  }, []);

  return [storageItem ? JSON.parse(storageItem) : defaultValue, setStoredValue];
}

export { useStorage as useAsyncStorage };
