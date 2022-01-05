import React from 'react'
import AiringTodayTvSection from '../features/tv/airingTodayTv';
import LatesTvSection from '../features/tv/latest';
import OnTheAirTvSection from '../features/tv/onTheAir';
import PopularTvSection from '../features/tv/popular';
import TopRatedTvSection from '../features/tv/topRated';

const TvPage: React.FC = () => {

    return(
        <div>
            <LatesTvSection />
            <AiringTodayTvSection />
            <OnTheAirTvSection />
            <PopularTvSection />
            <TopRatedTvSection />
        </div>
    )
}

export default TvPage;