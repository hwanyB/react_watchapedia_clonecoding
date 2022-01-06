import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import AiringTodayTvSection from '../features/tv/airingTodayTv';
import LatesTvSection from '../features/tv/latest';
import OnTheAirTvSection from '../features/tv/onTheAir';
import PopularTvSection from '../features/tv/popular';
import TopRatedTvSection from '../features/tv/topRated';
import styled from '@emotion/styled';


const Main = styled.div`
    position: relative;
    top: 63px;
    margin-bottom: 200px;
`;

const TvPage: React.FC = () => {

    return(
        <>
        <Header />
        <Main>
            <LatesTvSection />
            <AiringTodayTvSection />
            <OnTheAirTvSection />
            <PopularTvSection />
            <TopRatedTvSection />
        </Main>
        <Footer />
        </>
    )
}

export default TvPage;