import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

// for fetching from backend
export const fetchALLMyProjects = createAsyncThunk(
  "myProjects/getAPI",
  async () => {
    const response = await axios.get("http://127.0.0.1:3000/myProjects");
    return response.data;
  }
);

// adding new items
export const saveNewMyProject = createAsyncThunk(
  "myProjects/createAPI",
  async (payload) => {
    const response = await axios.post(
      "http://127.0.0.1:3000/myProjects",
      payload
    );
    return response.data;
  }
);
// updating myProject
export const updateMyProject = createAsyncThunk(
  "myProjects/updateAPI",
  async (payload) => {
    const response = await axios.put(
      `http://127.0.0.1:3000/myProjects/${payload.id}`,
      payload
    );
    return response.data;
  }
);

//instiall state
const initialState = {
  myProjectsData: [],
  loading: "idle",
};

//mProject slice
const myProjectslice = createSlice({
  name: "myProjects",
  initialState,
  reducers: {},
  // data fetching extra reducers ///
  extraReducers: (builder) => {
    builder.addCase(fetchALLMyProjects.pending, (state, action) => {
      state.loading = "pending";
    });
    builder.addCase(fetchALLMyProjects.fulfilled, (state, action) => {
      state.loading = "idle";
      state.myProjectsData = action.payload;
    });

    //data add extra reducers
    builder.addCase(saveNewMyProject.pending, (state, action) => {
      state.loading = "pending";
    });
    builder.addCase(saveNewMyProject.fulfilled, (state, action) => {
      state.loading = "idle";
      state.myProjectsData.unshift(action.payload);
    });
    /////////// data add
    builder.addCase(updateMyProject.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(updateMyProject.fulfilled, (state, action) => {
      state.loading = "idle";
      state.myProjectsData = state.myProjectsData.filter(
        (_) => _.id !== action.payload.id
      );
      state.myProjectsData.unshift(action.payload);
    });
  },
});

export const getAllMyProjects = (state) => state.myMyProject.myProjectsData;
export const getLoading = (state) => state.myMyProject.loading;
export const getMyProjectById = (id) => {
  return (state) => state.myMyProject.myProjectsData.filter((_) => _.id === id)[0];
};
export default myProjectslice.reducer;
