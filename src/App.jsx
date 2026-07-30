import { Suspense } from "react";

import AppRoutes from "./routes/AppRoutes";

import Loading from "./components/Loading";
import ErrorBoundary from "./components/feedback/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <AppRoutes />
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;