import { createSlice } from '@reduxjs/toolkit';
import { normalizedUsers } from './normalized-mock';
import type { User } from '@/types';
import type { StoreEntities } from './types';
const initialState = {
    ids: normalizedUsers.map((user) => user.id),
    entities: normalizedUsers.reduce((acc, value) => {
        acc[value.id] = value;
        return acc;
    }, {} as StoreEntities<User>),
};
export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    selectors: {},
});
