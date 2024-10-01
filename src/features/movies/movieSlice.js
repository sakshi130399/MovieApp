import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import movieApis from "../../common/apis/movieApis";
import {APIKey} from "../../common/apis/movieApiKey";

export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies", 
    async () => {
        const movieText = "Harry";
        const response = await movieApis.get(
           `?apiKey=${APIKey}&s=${movieText}&type=movie`
        );
        return response.data;
    }
);

export const fetchAsyncShows = createAsyncThunk("movies/fetchAsyncShows", 
  async () => {
      const seriesText = "shows";
      const response = await movieApis.get(
         `?apiKey=${APIKey}&s=${seriesText}&type=series`
      );
      return response.data;
  }
);

export const fetchAsyncMovieOrShowDetails= createAsyncThunk("movies/fetchAsyncMovieOrShowDetails", 
  async (id) => {
      const response = await movieApis.get(
         `?apiKey=${APIKey}&i=${id}&plot=full`
      );
      return response.data;
  }
);



const initialState = {
    movies:{},
    shows :{},
    selectMovieOrShows : {},
};

const movieSlice = createSlice({
name:"movies",
initialState,
reducers:{
    
    removeSelectedMovieOrShow: (state) => {
      state.selectMovieOrShow = {};
    },
},

extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncMovies.pending, (state) => {
        console.log("Pending");
      })
      .addCase(fetchAsyncMovies.fulfilled, (state, { payload }) => {
        console.log("Fetched Successfully!");
        state.movies = payload; // Update state directly
      })
      .addCase(fetchAsyncMovies.rejected, (state) => {
        console.log("Rejected!");
      })
      .addCase(fetchAsyncShows.fulfilled, (state, { payload }) => {
        console.log("Fetched Successfully!");
        state.shows = payload; // Update state directly
      })
      .addCase(fetchAsyncMovieOrShowDetails.fulfilled, (state, { payload }) => {
        console.log("Fetched Successfully!");
        state.selectMovieOrShows = payload; // Update state directly
      });
}

});

export const{removeSelectedMovieOrShow}= movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShows = (state) => state.movies.selectMovieOrShows;
export default movieSlice.reducer;