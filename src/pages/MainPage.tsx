import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import LatesMovieSection from '../features/movie/latest';
import NowPlayingSection from '../features/movie/nowPlayingMovie';

const MainPage: React.FC = () => {

    return(
        <>
            {/* <Header /> */}
            <LatesMovieSection />
            <NowPlayingSection />
            <Footer />
        </>
    )
}

export default MainPage;