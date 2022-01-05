import { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { topRatedApi } from '../../../apis/movieApi';
import { MovieDetail, ListResponse } from '../../../types';

const useTopRatedMovie = () => {
    return useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>('topRatedMovie', topRatedApi);
}

export default useTopRatedMovie;