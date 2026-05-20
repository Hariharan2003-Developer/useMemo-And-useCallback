import React, { useState, useMemo } from "react";

function App() {
  const [parottaCount, setParottaCount] = useState(0);

  const totalPrice = useMemo(() => {
    console.log("Calculating Price...");

    return parottaCount * 20;
  }, [parottaCount]);

  return (
    <div>
      <h1>Parotta Count: {parottaCount}</h1>

      <h2>Total Price: ₹{totalPrice}</h2>

      <button onClick={() => setParottaCount(parottaCount + 1)}>
        Make Parotta
      </button>
    </div>
  );
}