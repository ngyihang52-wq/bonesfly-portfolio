import { useState } from "react";
import { RouterProvider } from "react-router";
import { router } from "./routes";
import { LoadingScreen } from "./components/LoadingScreen";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {/* Loading screen sits on top; slides down to reveal the page */}
      {loading && <LoadingScreen onDone={() => setLoading(false)} />}

      {/* Pages always render beneath — visible once loading panel clears */}
      <RouterProvider router={router} />
    </div>
  );
}
