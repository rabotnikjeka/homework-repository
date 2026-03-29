import { useEffect, useState } from "react";

export function WithLoading(RenderComponent) {
  return function WrappedComponent(props) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }, []);
    return (
      <div>{isLoading ? "Loading..." : <RenderComponent {...props} />}</div>
    );
  };
}
