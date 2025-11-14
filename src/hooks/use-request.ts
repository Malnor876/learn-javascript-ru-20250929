import { selectStatus } from '@/store/request.slice';
import { useAppDispatch, useAppSelector } from '@/store/store';
import type {
    AsyncThunk,
    AsyncThunkConfig,
    AsyncThunkAction,
} from '@reduxjs/toolkit';
import { useState, useEffect } from 'react';

export const useRequest = <T, U>(
    requestThunk: AsyncThunk<T, U | undefined, AsyncThunkConfig>,
    params?: U & undefined
) => {
    const dispatch = useAppDispatch();
    const [request, setRequest] = useState<ReturnType<
        AsyncThunkAction<T, U | undefined, AsyncThunkConfig>
    > | null>(null);
    const status = useAppSelector((state) =>
        selectStatus(state, request?.requestId)
    );
    useEffect(() => {
        console.log('params', params);
        const request = dispatch(requestThunk(params));
        setRequest(request);
        return () => {
            if (request) {
                request.abort();
            }
        };
    }, [dispatch, params, requestThunk]);
    return status;
};
