import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {postsService} from "../../service";

const initialState = {
    posts: [],
    currentPost: null,
    postFromAPI: null,
    loading: false,
    error: null
};

const getAll = createAsyncThunk(
    'postSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await postsService.getAll();
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const getById = createAsyncThunk(
    'postSlice/getById',
    async (id, {rejectedWithValue}) => {
        try {
            const {data} = await postsService.getFromID(id);
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);

const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers: {
        setCurrentPost: (state, action) => {
            state.currentPost = action.payload
        },
        deletePost: (state, action) => {
            const index = state.posts.findIndex(post=>post.title===action.payload);
            state.posts.splice(index,1)
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.posts = action.payload
                state.loading = false
            })
            .addCase(getAll.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
            .addCase(getAll.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.postFromAPI = action.payload
            })
})

const {reducer: postReducer, actions: {setCurrentPost,deletePost}} = postSlice

const postActions = {
    getAll,
    setCurrentPost,
    getById,
    deletePost
}

export {
    postActions,
    postReducer
}
