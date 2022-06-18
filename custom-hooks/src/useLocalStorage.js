import { useState, useEffect } from "react";
function getStorageValue(key, defaultValue) {
   return JSON.parse(localStorage.getItem(key)) || defaultValue;
}

export default function useLocalStorage(key, defaultValue) {
 const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    // storing input name
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}