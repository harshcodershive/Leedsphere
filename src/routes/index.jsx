import { createBrowserRouter, Navigate } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import AppLayout from "../layouts/AppLayout";
import MarketingLayout from "../layouts/MarketingLayout";
import ProtectedRoute from "../auth/ProtectedRoute";

// Lazy Load Pages
const MarketingHome = lazy(() => import("../marketing/pages/Home"));
const Docs = lazy(() => import("../app/pages/Docs"));
const Workflows = lazy(() => import("../app/pages/Workflows"));
const Analytics = lazy(() => import("../app/pages/Analytics"));
const Settings = lazy(() => import("../app/pages/Settings"));
const Profile = lazy(() => import("../app/pages/Profile"));
const Login = lazy(() => import("../auth/Login"));
const Signup = lazy(() => import("../auth/Signup"));

// Product Pages
const ProductOverview = lazy(() => import("../marketing/pages/product/Overview"));
const ProductChannels = lazy(() => import("../marketing/pages/product/Channels"));
const ProductMessaging = lazy(() => import("../marketing/pages/product/Messaging"));
const ProductFiles = lazy(() => import("../marketing/pages/product/Files"));
const ProductIntegrations = lazy(() => import("../marketing/pages/product/Integrations"));
const ProductSearch = lazy(() => import("../marketing/pages/product/Search"));
const ProductSecurity = lazy(() => import("../marketing/pages/product/Security"));
const ProductFeatures = lazy(() => import("../marketing/pages/product/Features"));

// Solutions Pages
const SolutionEngineering = lazy(() => import("../marketing/pages/solutions/Engineering"));
const SolutionSupport = lazy(() => import("../marketing/pages/solutions/Support"));
const SolutionRemote = lazy(() => import("../marketing/pages/solutions/Remote"));
const SolutionStartups = lazy(() => import("../marketing/pages/solutions/Startups"));
const SolutionEnterprise = lazy(() => import("../marketing/pages/solutions/Enterprise"));

// Resources Pages
const ResourceHelp = lazy(() => import("../marketing/pages/resources/Help"));
const ResourceStart = lazy(() => import("../marketing/pages/resources/Start"));
const ResourceGuides = lazy(() => import("../marketing/pages/resources/Guides"));
const ResourceCommunity = lazy(() => import("../marketing/pages/resources/Community"));
const ResourceBlog = lazy(() => import("../marketing/pages/resources/Blog"));

// Company Pages
const CompanyAbout = lazy(() => import("../marketing/pages/company/About"));
const CompanyCareers = lazy(() => import("../marketing/pages/company/Careers"));

// Legal Pages
const LegalPrivacy = lazy(() => import("../marketing/pages/legal/Privacy"));
const LegalTerms = lazy(() => import("../marketing/pages/legal/Terms"));
const LegalSecurity = lazy(() => import("../marketing/pages/legal/SecurityPage"));
const LegalRefundPolicy = lazy(() => import("../marketing/pages/legal/RefundPolicy"));

// Loading Fallback
const PageLoader = () => (
  <div className="flex h-full w-full items-center justify-center p-8">
    <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
  </div>
);

// Wrap component in Suspense
const withSuspense = (Component) => (
  <Suspense fallback={<PageLoader />}>
    <Component />
  </Suspense>
);

// Simple Generic Placeholder for sub-pages
const GenericPage = ({ title }) => (
  <div className="p-8">
    <h2 className="text-xl font-bold mb-4">{title}</h2>
    <p className="text-muted-foreground">Content for {title} will go here.</p>
  </div>
);

export const router = createBrowserRouter([
  // Marketing / Public Routes
  {
    path: "/",
    element: <MarketingLayout />,
    children: [
      {
        index: true,
        element: withSuspense(MarketingHome),
      },
      // Product (main route + sub-routes)
      { path: "product", element: withSuspense(ProductFeatures) },
      { path: "product/overview", element: withSuspense(ProductOverview) },
      { path: "product/channels", element: withSuspense(ProductChannels) },
      { path: "product/messaging", element: withSuspense(ProductMessaging) },
      { path: "product/files", element: withSuspense(ProductFiles) },
      { path: "product/integrations", element: withSuspense(ProductIntegrations) },
      { path: "product/search", element: withSuspense(ProductSearch) },
      { path: "product/security", element: withSuspense(ProductSecurity) },

      // Solutions (main route + sub-routes)
      { path: "solutions", element: withSuspense(SolutionEngineering) },
      { path: "solutions/engineering", element: withSuspense(SolutionEngineering) },
      { path: "solutions/support", element: withSuspense(SolutionSupport) },
      { path: "solutions/remote", element: withSuspense(SolutionRemote) },
      { path: "solutions/startups", element: withSuspense(SolutionStartups) },
      { path: "solutions/enterprise", element: withSuspense(SolutionEnterprise) },

      // Resources (main route + sub-routes)
      { path: "resources", element: withSuspense(ResourceHelp) },
      { path: "help", element: withSuspense(ResourceHelp) },
      { path: "start", element: withSuspense(ResourceStart) },
      { path: "guides", element: withSuspense(ResourceGuides) },
      { path: "community", element: withSuspense(ResourceCommunity) },
      { path: "blog", element: withSuspense(ResourceBlog) },

      // Integrations (main route)
      { path: "integrations", element: withSuspense(ProductIntegrations) },

      // Company
      { path: "about", element: withSuspense(CompanyAbout) },
      { path: "careers", element: withSuspense(CompanyCareers) },


      // Legal
      { path: "privacy", element: withSuspense(LegalPrivacy) },
      { path: "terms", element: withSuspense(LegalTerms) },
      { path: "security", element: withSuspense(LegalSecurity) },
      { path: "refund-policy", element: withSuspense(LegalRefundPolicy) },

      // Placeholders (kept for safety if not covered)
      { path: "pricing", element: <GenericPage title="Pricing" /> },
    ]
  },
  {
    path: "/login",
    element: withSuspense(Login),
  },
  {
    path: "/signup",
    element: withSuspense(Signup),
  },
  
  // Protected Routes
  {
    path: "/app",
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="/app/docs" replace />,
      },
      /* Home route removed as it is now the Landing Page */
      /*
      {
        path: "home",
        children: [
          { index: true, element: withSuspense(Home) },
          { path: "tasks", element: <GenericPage title="My Tasks" /> },
          { path: "recent", element: <GenericPage title="Recent Items" /> },
          { path: "starred", element: <GenericPage title="Starred Items" /> },
          { path: "trash", element: <GenericPage title="Recycle Bin" /> },
        ]
      },
      */
      {
        path: "docs",
        children: [
          { index: true, element: withSuspense(Docs) },
          { path: "drafts", element: <GenericPage title="Drafts" /> },
          { path: "archived", element: <GenericPage title="Archived Docs" /> },
        ]
      },
      {
        path: "workflows",
        children: [
          { index: true, element: withSuspense(Workflows) },
          { path: "templates", element: <GenericPage title="Workflow Templates" /> },
        ]
      },
      {
        path: "analytics",
        children: [
          { index: true, element: withSuspense(Analytics) },
          { path: "reports", element: <GenericPage title="Analytics Reports" /> },
        ]
      },
      {
        path: "settings",
        children: [
          { index: true, element: withSuspense(Settings) },
          { path: "security", element: <GenericPage title="Security Settings" /> },
        ]
      },
      {
        path: "profile",
        element: withSuspense(Profile),
      },
    ],
  },
]);
