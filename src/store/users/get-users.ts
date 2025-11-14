import { createAsyncThunk } from '@reduxjs/toolkit';

export const getUsers = createAsyncThunk('users/getUsers', async () => {
    const response = await fetch('http://localhost:3001/api/users');
    const data = await response.json();
    return data;
});
