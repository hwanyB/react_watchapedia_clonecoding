import React from 'react'
import styled from '@emotion/styled';
import usePopularTv from './usePopularTv';
import Card from '../../../components/Card';
import Slider from '../../../components/Slider';

const Base = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  margin-bottom: 42px;

`;

const Title = styled.h4`
  font-size: 22px;
  font-weight: 700;
  line-height: 30px;
  padding: 12px 0 14px;
  margin-left: 10px;
`;


const PopularTvSection: React.FC = () => {
    const { data: airingTodayTvResponse, isLoading } = usePopularTv();
    const getYear = (data: string) => data.split('-')[0];

    return (
        <Base>
            <Title>인기</Title>
            {
                isLoading ? (
                    <div>Loading...</div>
                ) : (
                    <Slider>
                        {
                            airingTodayTvResponse?.data?.results.map(tv => (
                                <Card
                                key={tv.id}
                                linkUrl={`/tv/${tv.id}`}
                                title={tv.name}
                                posterPath={`${process.env.REACT_APP_IMAGE_PREFIX}/w500/${tv.poster_path}`}
                                voteAverage={tv.vote_average}
                                year={getYear(tv.first_air_date)}
                                />
                            ))
                        }
                    </Slider>
                )
            }
        </Base>
    )
}

export default PopularTvSection;
