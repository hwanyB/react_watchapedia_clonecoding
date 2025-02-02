import React from 'react';
import styled from '@emotion/styled';
import useSimilarMovie from '../useSimilarMovie';

const Base = styled.section`
    padding: 11px 15px;
    border-bottom: 1px solid #ededed;
`;

const HeaderWrapper = styled.div`
    
`;

const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h2`
    color: #000;
    font-size: 19px;
    font-weight: 700;
    margin: 8px 0;
`;

const ContentWrapper = styled.div`
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    margin-top: 15px;
    row-gap: 24px;
`;

const Link = styled.a`
    text-decoration: none;
`;

const CardContainer = styled.div`
    
    max-width: 180px;
`;

const PosterWrapper = styled.div`
    height: 284px;
    /* max-width: 180px; */
    border: 1px solid rgb(234, 233, 232);
`;

const Poster = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 5px;
    vertical-align: top;
    object-fit: cover;
`;

const Info = styled.div`
    margin: 5px 10px 0 0;
`;

const CardTitle = styled.div`
    color: rgb(41, 42, 50);
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const VoteAverage = styled.div`
    margin-top: 2px;
    color: rgb(120,120,120);
    font-size: 13px;
    font-weight: 400;
    line-height: 18px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;


interface Props {
    id:string;
}

interface SimilarMovieProps {
    id: number;
    posterPath: string;
    title: string;
    voteAverage: number;
}

const SimilarMovie: React.FC<SimilarMovieProps> = ({ id, posterPath, title, voteAverage}) => {

    return(
        <Link href={`/movie/${id}`} target="_blank">
            <CardContainer>
                <PosterWrapper>
                    <Poster src={`${process.env.REACT_APP_IMAGE_PREFIX}/w500${posterPath}`} />
                </PosterWrapper>
                <Info>
                    <CardTitle>{title}</CardTitle>
                    <VoteAverage>{voteAverage}</VoteAverage>
                </Info>
            </CardContainer>
        </Link>
    )
}

const Similar: React.FC<Props> = ({ id }) => {
    const { isLoading, data } = useSimilarMovie(id);
    return (
        <Base>
            <HeaderWrapper>
                <Header>
                    <Title>비슷한 작품</Title>
                </Header>
            </HeaderWrapper>
            <ContentWrapper>
                {
                    isLoading || !data ? (
                        <div>Loading...</div>
                    ) : (
                        data.data.results.map(result => (
                            <SimilarMovie
                            id={result.id}
                            posterPath={result.poster_path}
                            title={result.title}
                            voteAverage={result.vote_average}
                            />
                        ))
                    )
                }
            </ContentWrapper>
        </Base>
    )
}

export default Similar;