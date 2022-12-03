import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {commentsService} from "../../service";

const initialState = {
    comments : [],
    currentComment: null,
    commentFromAPI : null,
    loading: false,
    error: null
};

const getAll = createAsyncThunk(
  'commentSlice/getAll',
    async (_,{rejectWitsValue})=>{
      try {
          const {data} = await commentsService.getAll();
          return data
      }catch (e) {
          return rejectWitsValue(e.response.data)
      }
    }
);

const getApiFromId = createAsyncThunk(
    'commentSlice/getApiFromId',
    async (id,{rejectedWithValue})=>{
        try {
            const {data} = await commentsService.getById(id);
            return data
        }catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);


const commentSlice = createSlice({
    name: 'commentSlice',
    initialState,
    reducers: {
        setCurrentComment: (state, action)=>{
            state.currentComment = action.payload
        },
        deleteComment: (state, action) => {
            const index = state.comments.findIndex(comment=>comment.id === action.payload)
            state.comments.splice(index,1)
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled,(state, action) => {
                state.comments = action.payload
                state.loading = false
            })
            .addCase(getAll.rejected, (state, action) => {
                state.error=action.payload
                state.loading = false
            })
            .addCase(getAll.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getApiFromId.fulfilled, (state, action) => {
                state.commentFromAPI = action.payload
            })

});

const {reducer:commentsReducer, actions:{setCurrentComment,deleteComment}} = commentSlice

const commentAction = {
    getAll,
    setCurrentComment,
    getApiFromId,
    deleteComment
}

export {
    commentAction,
    commentsReducer
}