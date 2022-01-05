import React from 'react'
import styled from '@emotion/styled';
import Card from '../../../components/Card';
import useLatestTv from './useLatestTv';

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

const LatesTvSection: React.FC = () => {
    const { data, isLoading} = useLatestTv();
    const getYear = (release_date: string) => release_date.split('-')[0] || '';

    return (
        <Base>
            <Title>최근 개봉작</Title>
            {
                isLoading || !data ? (
                    <div>Loading...</div>
                ) : (
                    <Card
                    linkUrl={`/tv/${data.data.id}`}
                    title={data.data.name}
                    posterPath={`${process.env.REACT_APP_IMAGE_PREFIX}/w500/${data.data.poster_path}`}
                    voteAverage={data.data.vote_average}
                    year={getYear(data.data.first_air_date)}
                    />
                )
            }
        </Base>
    )
}
export default LatesTvSection;