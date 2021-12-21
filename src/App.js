import Main from "./pages/Main";
import { useState, useEffect } from "react";

function App() {
  const [route, setRoute] = useState(null);

  useEffect(() => {
    const path = window.location.pathname;
    const params = path.split("/")[1];
    setRoute(params);
  }, []);

  return (
    <div>
      <Main/>
    </div>
  );
}

export default App;