import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import LatesMovieSection from '../features/movie/latest';
import NowPlayingSection from '../features/movie/nowPlayingMovie';
import PopularSection from '../features/movie/popular';
import TopRatedSection from '../features/movie/topRated';
import UpcomingSection from '../features/movie/upcoming';
import styled from '@emotion/styled';

const Main = styled.div`
    position: relative;
    top: 63px;
    margin-bottom: 200px;
`;

const MainPage: React.FC = () => {

    return(
        <>
            <Header />
            <Main>
                <LatesMovieSection />
                <NowPlayingSection />
                <PopularSection />
                <TopRatedSection />
                <UpcomingSection />
            </Main>
            <Footer />
        </>
    )
}

export default MainPage;