import { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import NoMatch from "./components/NoMatch";
import ApplyJobs from "./Pages/ApplyJobs";
import PageLayout from "./components/Layout/PageLayout";
import LazyDisplay from "./components/LazyDisplay";
import ErrorBoundary from './components/ErrorBoundary';
const JobsComponent = lazy(() => import("./Pages/Jobs"));
const ContactComponent = lazy(() => import("./Pages/Contactus"));

function App() {
  return (
    <div className="flex-wrapper">
      <Router>
        <Routes>
          <Route element={<PageLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route
              path="/jobs"
              element={
                <ErrorBoundary>
                <Suspense fallback={<LazyDisplay/>}>
                  <JobsComponent />
                </Suspense>
                </ErrorBoundary>
              }/>
            <Route
              path="/contact"
              element={
                <Suspense fallback={<LazyDisplay/>}>
                  <ContactComponent />
                </Suspense>
              }/>
            <Route path="/applyjob/:id" element={<ApplyJobs />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
