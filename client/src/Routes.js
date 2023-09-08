import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// auth middleware
import { AuthorizeAdmin, AuthorizeGN, AuthorizeUser } from "./middleware/auth";

// Import all components
import HomePage from "./pages/user/HomePage";
// import LandingPage from "./pages/home/LandingPage";
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

//--------------------------------------------------gramasewaka-----------------------------------------------------------
import GsHomePage from "./pages/gramasewaka/GsHomePage";
import GsVillagers from "./pages/gramasewaka/GsVillagers";
import GsPatients from "./pages/gramasewaka/GsPatients";
import GsOrganizations from "./pages/gramasewaka/GsOrganizations";
import GsCampaigns from "./pages/gramasewaka/GsCampaigns";
import GsAnnouncements from "./pages/gramasewaka/GsAnnouncements";

//---------------------------------------------------receptionist--------------------------------------------------------
import RcHomePage from "./pages/receptionist/RcHomePage";
import AddNurse from "./pages/receptionist/AddNurse";
import AddDoctor from "./pages/receptionist/AddDoctor";
import VideoCon from "./pages/receptionist/VideoCon";

// Root Routes
const router = createBrowserRouter([
    {
        path: "/",
        element: <LogIn />,
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
        element: (
            <AuthorizeAdmin>
                <VillageOfficers />
            </AuthorizeAdmin>
        ),
    },
    {
        path: "/admin/phis",
        element: (
            <AuthorizeAdmin>
                <PHIs />
            </AuthorizeAdmin>
        ),
    },
    {
        path: "/admin/view-map",
        element: (
            <AuthorizeAdmin>
                <ViewMap />
            </AuthorizeAdmin>
        ),
    },
    {
        path: "/admin/campaigns",
        element: (
            <AuthorizeAdmin>
                <Campaigns />
            </AuthorizeAdmin>
        ),
    },
    {
        path: "/admin/announcements",
        element: (
            <AuthorizeAdmin>
                <Announcement />
            </AuthorizeAdmin>
        ),
    },
    {
        path: "/admin/organizations",
        element: (
            <AuthorizeAdmin>
                <Organizations />
            </AuthorizeAdmin>
        ),
    },
    {
        path: "/admin/view-reports",
        element: (
            <AuthorizeAdmin>
                <Reports />
            </AuthorizeAdmin>
        ),
    },

    // -------------------------------------------Gramasewaka routing----------------------------------------------------------

    {
        path: "/gramasewaka",
        element: (
            <AuthorizeGN>
                <GsHomePage />
            </AuthorizeGN>
        ),
    },
    {
        path: "/gramasewaka/villagers",
        element: (
            <AuthorizeGN>
                <GsVillagers />
            </AuthorizeGN>
        ),
    },
    {
        path: "/gramasewaka/patients",
        element: (
            <AuthorizeGN>
                <GsPatients />
            </AuthorizeGN>
        ),
    },
    {
        path: "/gramasewaka/organizations",
        element: (
            <AuthorizeGN>
                <GsOrganizations />
            </AuthorizeGN>
        ),
    },
    {
        path: "/gramasewaka/campaigns",
        element: (
            <AuthorizeGN>
                <GsCampaigns />
            </AuthorizeGN>
        ),
    },
    {
        path: "/gramasewaka/announcements",
        element: (
            <AuthorizeGN>
                <GsAnnouncements />
            </AuthorizeGN>
        ),
    },







    //-------------------------------------------Receptionist routing-------------------------------------------------



    {
        path: "/receptionist",
        element: (
           
                < RcHomePage/>
            
        ),
    },

    {
        path: "/receptionist/addNurse",
        element: (
           
                < AddNurse/>
            
        ),
    },

    {
        path: "/receptionist/addDoctor",
        element: (
           
                < AddDoctor/>
            
        ),
    },

    {
        path: "/receptionist/videoConferencing",
        element: (
           
                < VideoCon/>
            
        ),
    },

    
    
]);

export default function Routes() {
    return (
        <main>
            <RouterProvider router={router}></RouterProvider>
        </main>
    );
}
