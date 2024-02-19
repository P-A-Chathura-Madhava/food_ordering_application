import { useEffect } from "react";
import { useState } from "react";

function useProfile() {
    const [data, setData] = useState(false);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
      setLoading(true);
      fetch("/api/profile").then(response => {
        response.json().then(data => {
          setData(data);
          setLoading(false);
        });
      })
    }, []);

  return {loading, data};
}

export default useProfile