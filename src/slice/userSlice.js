import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

// for fetching from backend
export const fetchALLUsers = createAsyncThunk(
  "users/getAPI",
  async () => {
    const response = await axios.get("/myusers");
    return response.data;
  }
);

// adding new items
export const saveNewUser = createAsyncThunk(
  "users/createAPI",
  async (payload) => {
    const response = await axios.post("/users", payload);
    return response.data;
  }
);
// updating user
export const updateUser = createAsyncThunk(
  "users/updateAPI",
  async (payload) => {
    const response = await axios.put(`/users/${payload.id}`, payload);
    return response.data;
  }
);

//instiall state
const initialState = {
  usersData: [],
  loading: "idle",
};

//user slice
const userslice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  // data fetching extra reducers ///
  extraReducers: (builder) => {
    builder.addCase(fetchALLUsers.pending, (state, action) => {
      state.loading = "pending";
    });
    builder.addCase(fetchALLUsers.fulfilled, (state, action) => {
      state.loading = "idle";
      state.usersData = action.payload;
    });

    //data add extra reducers
    builder.addCase(saveNewUser.pending, (state, action) => {
      state.loading = "pending";
    });
    builder.addCase(saveNewUser.fulfilled, (state, action) => {
      state.loading = "idle";
      state.usersData.unshift(action.payload);
    });
    /////////// data add
    builder.addCase(updateUser.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.loading = "idle";
      state.usersData = state.usersData.filter(
        (_) => _.id !== action.payload.id
      );
      state.usersData.unshift(action.payload);
    });
  },
});

export const getAllUsers = (state) => state.user.usersData;
export const getLoading = (state) => state.user.loading;
export const getUserById = (id) => {
  return (state) => state.user.usersData.filter((_) => _.id === id)[0];
};
export default userslice.reducer;
