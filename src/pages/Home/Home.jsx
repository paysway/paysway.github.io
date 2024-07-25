import Header from '../../components/Header/Header'
import HomePageCover from '../../components/HomePageCover/HomePageCover'
import HomePageProductsList from '../../components/HomePageProductsList/HomePageProductsList'
import Blog from '../../components/Blog/Blog'
import Footer from '../../components/Footer/Footer'
import { Fragment } from 'react'


function Home() {
    return (
        <Fragment>
            <Header/>
            <HomePageCover/>
            <HomePageProductsList/>
            <Blog/>
            <Footer/>
        </Fragment>
    )
}

export default Home
