import "./App.css";
import React, { Suspense, lazy, useState } from "react";
const BigComponent = lazy(() => import("./BigComponent"));

function App() {
  const [isButtonClick, setIsButtonClick] = useState(false);

  return (
    <div>
      <h1>Lazy & Suspense</h1>
      <Suspense fallback={<p>Loading ...</p>}>
        {isButtonClick ? <BigComponent /> : null}
      </Suspense>

      {!isButtonClick ? (
        <button
          onClick={() => {
            setIsButtonClick(true);
          }}
        >
          Show
        </button>
      ) : null}
    </div>
  );
}

export default App;
