import { useEffect, useState } from "react";
import { IAnalytics } from "../utilities/types/analytics";
import { getAnalytics } from "../api/analytics";
import { KeyValuePair } from "../utilities/types/general";

export const useAnalytics = () => {
  const [data, setData] = useState<IAnalytics>();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<KeyValuePair<string>>({});

  const fetchData = async () => {
    try {
      const analytics = await getAnalytics(true);
      setData(analytics);
    } catch (error: any) {
      console.log(error);
      setErrors({ error: error });
    }
  };

  useEffect(() => {
    setLoading(true);
    (async () => {
      await fetchData();
      setLoading(false);
    })();
  }, []);

  return {
    analytics: data,
    isLoading: loading,
    hasErrors: Object.keys(errors).length > 0,
    errors,
  };
};
