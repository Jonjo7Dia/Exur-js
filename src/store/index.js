import {configureStore} from '@reduxjs/toolkit';
import fetchSlice from './fetch-slice';
import resultsSlice from './results-slice'
const store = configureStore({
    reducer:{fetch: fetchSlice.reducer, results: resultsSlice.reducer}
});

export default store;