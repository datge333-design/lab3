import { useEffect, useState } from "react";

function useLocalStorage(key, initialValue) {
  // Chỉ đọc localStorage ở lần render đầu
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : initialValue;
    } catch {
      return initialValue;
    }
  });

  // Mỗi lần value đổi thì lưu lại
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
