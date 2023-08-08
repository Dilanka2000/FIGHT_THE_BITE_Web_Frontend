import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// auth middleware
import { AuthorizeAdmin, AuthorizeUser } from "./middleware/auth";

// Import all components
import HomePage from "./pages/user/HomePage";
import LandingPage from "./pages/home/LandingPage";
import LogIn from "./pages/auth/LogIn";
import Register from "./pages/auth/Register";
import Recovery from "./pages/auth/Recovery";
import Reset from "./pages/auth/Reset";
import PageNotFound from "./pages/PageNotFound";
import AdminHomePage from "./pages/admin/AdminHomePage";
import VillageOfficers from "./pages/admin/VillageOfficers";
import Campaigns from "./pages/admin/Campaigns";
import Announcement from "./pages/admin/Announcement";
import Organizations from "./pages/admin/Organizations";
import Reports from "./pages/admin/Reports";
import PHIs from "./pages/admin/PHIs";
import ViewMap from "./pages/admin/ViewMap";

// Root Routes
const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        path: "/home",
        element: (
            <AuthorizeUser>
                <HomePage />
            </AuthorizeUser>
        ),
    },
    {
        path: "/login",
        element: <LogIn />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/recovery",
        element: <Recovery />,
    },
    {
        path: "/reset",
        element: <Reset />,
    },
    {
        path: "*",
        element: <PageNotFound />,
    },

    // ======================= Admin Routes ========================
    {
        path: "/admin",
        element: (
            <AuthorizeAdmin>
                <AdminHomePage />
            </AuthorizeAdmin>
        ),
    },
    {
        path: "/admin/village-officers",
        element: <VillageOfficers />,
    },
    {
        path: "/admin/phis",
        element: <PHIs />,
    },
    {
        path: "/admin/view-map",
        element: <ViewMap />,
    },
    {
        path: "/admin/campaigns",
        element: <Campaigns />,
    },
    {
        path: "/admin/announcements",
        element: <Announcement />,
    },
    {
        path: "/admin/organizations",
        element: <Organizations />,
    },
    {
        path: "/admin/view-reports",
        element: <Reports />,
    },
]);

export default function Routes() {
    return (
        <main>
            <RouterProvider router={router}></RouterProvider>
        </main>
    );
}
