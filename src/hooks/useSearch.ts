import { useEffect, useState } from "react";
import { Comment } from "../App";

function useSearch(value: string, data: Comment[], delay?: number): Comment[] {
  const [debouncedValue, setDebouncedValue] = useState<string>(value);
  const [filteredData, setFilteredData] = useState<Comment[]>(data);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  useEffect(() => {
    if (debouncedValue) {
      const filteredData = data.filter((item: any) =>
        item.email.toLowerCase().includes(debouncedValue.toLowerCase())
      );
      setFilteredData(filteredData);
    } else {
      setFilteredData(data);
    }
  }, [debouncedValue]);

  return filteredData;
}

export default useSearch;
