import {
    createAsyncThunk,
    createSlice,
    type Action,
    type PayloadAction,
} from '@reduxjs/toolkit';
const createAppAsyncThunk = createAsyncThunk.withTypes();
const initialState: Record<string, 'pending' | 'fulfilled' | 'rejected'> = {};
export const requestSlice = createSlice({
    name: 'request',
    reducers: {},
    initialState,
    selectors: {
        selectStatus: (state, requestId) => state[requestId],
        selectIsLoading: (state, requestId) => state[requestId] === 'pending',
    },
    extraReducers: (builder) =>
        builder
            .addMatcher(
                ({ type }) => type.endsWith('/pending'),
                //я не понял как типизировать это
                (state, { meta }: any) => {
                    state[meta.requestId] = 'pending';
                }
            )
            .addMatcher(
                ({ type }) => type.endsWith('/fulfilled'),
                //я не понял как типизировать это
                (state, { meta }: any) => {
                    state[meta.requestId] = 'fulfilled';
                }
            )
            .addMatcher(
                ({ type }) => type.endsWith('/rejected'),
                (state, { meta }: any) => {
                    state[meta.requestId] = 'rejected';
                }
            ),
});
export const { selectIsLoading, selectStatus } = requestSlice.selectors;
