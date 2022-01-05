import { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { airingTodayApi } from '../../../apis/tvApi';
import { TVDetail, ListResponse } from '../../../types';

const useAiringTodayTv = () => {
    return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>('airingTodayTv', airingTodayApi);
}

export default useAiringTodayTv;