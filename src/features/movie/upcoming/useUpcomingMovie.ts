import { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { upcomingApi } from '../../../apis/movieApi';
import { MovieDetail, ListResponse } from '../../../types';

const useUpcomingMovie = () => {
    return useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>('upcomingMovie', upcomingApi);
}

export default useUpcomingMovie;