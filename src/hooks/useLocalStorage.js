import { useState } from "react";

export default function useLocalStorage(key, initialValue) {
  const getStoredValue = () => {
    try {
      const item = localStorage.getItem(key);

      if (item !== null) {
        return JSON.parse(item);
      }

      return initialValue;
    } catch (error) {
      console.error("Error reading localStorage:", error);
      return initialValue;
    }
  };

  const [storedValue, setStoredValue] = useState(getStoredValue);

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function
          ? value(storedValue)
          : value;

      setStoredValue(valueToStore);

      localStorage.setItem(
        key,
        JSON.stringify(valueToStore)
      );
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  };

  const removeValue = () => {
    try {
      localStorage.removeItem(key);
      setStoredValue(initialValue);
    } catch (error) {
      console.error("Error removing localStorage value:", error);
    }
  };

  const clearStorage = () => {
    try {
      localStorage.clear();
    } catch (error) {
      console.error("Error clearing localStorage:", error);
    }
  };

  return {
    value: storedValue,
    setValue,
    removeValue,
    clearStorage,
  };
}