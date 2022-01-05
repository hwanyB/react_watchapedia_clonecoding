import { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { popularApi, topRatedApi } from '../../../apis/tvApi';
import { TVDetail, ListResponse } from '../../../types';

const useTopRatedTv = () => {
    return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>('topRated', topRatedApi);
}

export default useTopRatedTv;