'use client'
import './globals.css'
import { Fragment } from 'react'
import dynamic from "next/dynamic";
// import Header from "../components/Header/Header";
// import HomePageCover from "../components/HomePageCover/HomePageCover";
// import HomePageProductsList from "../components/HomePageProductsList/HomePageProductsList";
// import Blog from "../components/Blog/Blog";
// import Footer from "../components/Footer/Footer";
const Header = dynamic(() => import('../components/Header/Header'), {ssr:false});
const HomePageCover = dynamic(() => import("../components/HomePageCover/HomePageCover"), {ssr:false});
const HomePageProductsList = dynamic(() => import("../components/HomePageProductsList/HomePageProductsList"), {ssr:false});
const Blog = dynamic(() => import("../components/Blog/Blog"), {ssr:false});
const Footer = dynamic(() => import("../components/Footer/Footer"), {ssr:false});

export default function Page() {
    return (
        <Fragment>
            <Header />
            <HomePageCover />
            <HomePageProductsList />
            <Blog />
            <Footer />
        </Fragment>
    )
}
