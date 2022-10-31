import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

// for fetching from backend
export const fetchALLMembers = createAsyncThunk("members/getAPI", async () => {
  const response = await axios.get("/members");
  return response.data;
});

// get my member only
export const fetchMyMembers = createAsyncThunk("members/getAPI", async () => {
  const response = await axios.get("/members");
  return response.data;
});

//adding new items
export const saveNewMember = createAsyncThunk(
  "members/createAPI",
  async (payload) => {
    const response = await axios.post("/members", payload);
    return response.data;
  }
);
// updating member
export const updateMember = createAsyncThunk(
  "members/updateAPI",
  async (payload) => {
    const response = await axios.put(
      `/members/${payload.id}`,
      payload
    );
    return response.data;
  }
);

//instiall state
const initialState = {
  membersData: [],
  loading: "idle",
};

//member slice
const memberslice = createSlice({
  name: "members",
  initialState,
  reducers: {},
  // data fetching extra reducers ///
  extraReducers: (builder) => {
    builder.addCase(fetchALLMembers.pending, (state, action) => {
      state.loading = "pending";
    });
    builder.addCase(fetchALLMembers.fulfilled, (state, action) => {
      state.loading = "idle";
      state.membersData = action.payload;
    });

    //data add extra reducers
    builder.addCase(saveNewMember.pending, (state, action) => {
      state.loading = "pending";
    });
    builder.addCase(saveNewMember.fulfilled, (state, action) => {
      state.loading = "idle";
      state.membersData.unshift(action.payload);
    });
    /////////// data add
    builder.addCase(updateMember.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(updateMember.fulfilled, (state, action) => {
      state.loading = "idle";
      state.membersData = state.membersData.filter(
        (_) => _.id !== action.payload.id
      );
      state.membersData.unshift(action.payload);
    });
  },
});

export const getAllMembers = (state) => state.member.membersData;
export const getLoading = (state) => state.member.loading;
export const getMemberById = (id) => {
  return (state) => state.member.membersData.filter((_) => _.id === id)[0];
};
export default memberslice.reducer;
