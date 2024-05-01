import { useEffect, useState } from "react";

export function useNow(interval, enabled) {
    const [now, setNow] = useState();
    useEffect(() => {
      if (!enabled) {
        setNow(undefined);
        return;
      }
      const inter = setInterval(() => {
        setNow(Date.now());
      }, interval);
      return () => {
        clearInterval(inter);
      };
    }, [interval, enabled]);
  
    return now;
  }

  export function useInterval(interval, enabled, callback)
  {
    useEffect(() => {
        if (!enabled) {
            return;
          }
        const inter2 = setInterval(() => {
        callback(Date.now());
        }, interval);

        return () => {
        clearInterval(inter2);
      };
    },[interval, enabled, callback])
  }