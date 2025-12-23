import { createBrowserRouter, Navigate } from "react-router";
import { HomePage } from "@/heroes/page/home/HomePage";
import { HeroPage } from '@/heroes/page/hero/HeroPage';
import { AdminPage } from "@/admin/pages/AdminPage";
import { HeroesLayout } from "@/heroes/layouts/HeroesLayout";
import { AdminLayout } from "@/admin/layouts/AdminLayout";
import { lazy } from "react";
// import { SearchPage } from "@/heroes/page/search/SearchPage";

const SearchPage =lazy(() => import('@/heroes/page/search/SearchPage'));

export const appRouter = createBrowserRouter([
    {
        path:'/',
        element: <HeroesLayout/>,
        children: [
            {
                index: true,
                element: <HomePage/>,
            },
            {
                path:'heroes/:idSlug',
                element: <HeroPage/>,
            },
            {
                path: 'search',
                element: <SearchPage/>,
            },
            {
                path: '*',
                // element:  <h1>404</h1>
                element: <Navigate to='/'/>
            }
        ],
    },

    {
        path:'/admin',
        element: <AdminLayout/>,
        children:[

            {
                index: true,
                element: <AdminPage/>,
            },
        ]
    },
]);