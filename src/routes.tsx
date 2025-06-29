
import { lazy, Suspense } from "react";
import { Navigate, RouteObject } from "react-router-dom";

// Layouts
import MainLayout from "./layouts/MainLayout";

// Pages
const Home = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Destinations = lazy(() => import("./pages/Destinations"));
const DestinationDetail = lazy(() => import("./pages/DestinationDetail"));
const Experiences = lazy(() => import("./pages/Experiences"));
const ExperienceDetail = lazy(() => import("./pages/ExperienceDetail"));
const Journal = lazy(() => import("./pages/Journal"));
const JournalPost = lazy(() => import("./pages/JournalPost"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-altiva-purple-light border-t-altiva-purple rounded-full animate-spin mx-auto mb-4"></div>
      <p className="font-montserrat text-altiva-gray-neutral">Loading...</p>
    </div>
  </div>
);

const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "destinations",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Destinations />
          </Suspense>
        ),
      },
      {
        path: "destinations/:country",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <DestinationDetail />
          </Suspense>
        ),
      },
      {
        path: "experiences",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Experiences />
          </Suspense>
        ),
      },
      {
        path: "experiences/:slug",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <ExperienceDetail />
          </Suspense>
        ),
      },
      {
        path: "journal",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Journal />
          </Suspense>
        ),
      },
      {
        path: "journal/:slug",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <JournalPost />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "404",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <NotFound />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: <Navigate to="/404" replace />,
      },
    ],
  },
];

export default routes;
