import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import type { User } from '@/types';
import { getUsers } from './get-users';
import { StoreRequestStatus } from '../types';
const entityAdapter = createEntityAdapter<User>();
export const userSlice = createSlice({
    name: 'users',
    initialState: {
        ...entityAdapter.getInitialState(),
        requestStatus: StoreRequestStatus.IDLE,
    },
    reducers: {},
    selectors: {
        selectUsersIds: (state) => state.ids,
        selectUserById: (state, id) => state.entities[id],
        selectRequestStatus: (state) => state.requestStatus,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.fulfilled, (state, { payload }) => {
                entityAdapter.setAll(state, payload);
                state.requestStatus = StoreRequestStatus.FULFILLED;
            })
            .addCase(getUsers.pending, (state) => {
                state.requestStatus = StoreRequestStatus.PENDING;
            })
            .addCase(getUsers.rejected, (state) => {
                state.requestStatus = StoreRequestStatus.REJECTED;
            });
    },
});

export const { selectRequestStatus, selectUserById, selectUsersIds } =
    userSlice.selectors;
