import React, { useState, useCallback } from "react";

 function App() {
   const [parottaCount, setParottaCount] = useState(0);

   const serveSalna = useCallback(() => {
     console.log("Serving salna ");
   }, []);

   return (
     <div>
       <h1>Parotta Count: {parottaCount}</h1>

       <button onClick={() => setParottaCount(parottaCount + 1)}>
         Make Parotta 
       </button>

       <button onClick={serveSalna}>
         Serve Salna
       </button>
     </div>
   );
 }

 export default App;

