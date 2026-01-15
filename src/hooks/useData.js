import { useState, useEffect } from "react";

export default function useData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then(res => {
        if (!res.ok) throw new Error("Ошибка при загрузке данных");
        return res.json();
      })
      .then(json => {
        // Преобразуем координаты и добавим короткое описание
        const processed = json
          .filter(item => item.latitude != null && item.longitude != null)
          .map(item => ({
            ...item,
            lat: Number(item.latitude),
            lng: Number(item.longitude),
            shortDescription: item.description?.slice(0, 50) + (item.description?.length > 50 ? "..." : "")
          }));
        setData(processed);
      })
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
}
