import { createSlice } from "@reduxjs/toolkit";

export const pitches = createSlice({
  name: "user",
  initialState: {value:[]},
  reducers: {
    setPitches: (state, action) => {
      state.value= action.payload
    }
  }
});

export const { setPitches } = pitches.actions;
export const userReducer =  pitches.reducer;
export const expertpitches = createSlice({
  name: "expert",
  initialState: {value:[]},
  reducers: {
    setexpertPitches: (state, action) => {
      state.value= action.payload
    }
  }
});
export const { setexpertPitches } = expertpitches.actions;
export const expertpitch = expertpitches.reducer;

export const expertcomments = createSlice({
  name: "expertcomments",
  initialState: {value:[]},
  reducers: {
    setexpertcomments: (state, action) => {
      state.value= action.payload
    }
  }
});
export const { setexpertcomments } = expertcomments.actions;
export const expertcomment = expertcomments.reducer;

export const expertreports = createSlice({
  name: "expertreports",
  initialState: {value:[]},
  reducers: {
    setexpertreports: (state, action) => {
      state.value= action.payload
    }
  }
});
export const { setexpertreports } = expertreports.actions;
export const expertreport = expertreports.reducer;

export const saved = createSlice({
  name: "saved",
  initialState: {value:[]},
  reducers: {
    setsaved: (state, action) => {
      state.value= action.payload
    }
  }
});
export const { setsaved } = saved.actions;
export const savedids = saved.reducer;

export const savedpitch = createSlice({
  name: "savedpitch",
  initialState: {value:[]},
  reducers: {
    setsavedpitch: (state, action) => {
      state.value= action.payload
    }
  }
})
export const { setsavedpitch } = savedpitch.actions;
export const savedpitches = savedpitch.reducer;


export const yourpitch = createSlice({
  name: "yourpitch",
  initialState: {value:[]},
  reducers: {
    setyourpitch: (state, action) => {
      state.value= action.payload
    }
  }
})
export const { setyourpitch } = yourpitch.actions;
export const yourpitches = yourpitch.reducer;

export const GenEvents = createSlice({
  name: "GenEvents",
  initialState: {value:[]},
  reducers: {
    setGenEvents: (state, action) => {
      state.value= action.payload
    }
  }
})
export const { setGenEvents } = GenEvents.actions;
export const GenEvent = GenEvents.reducer;

export const LEEDEvents = createSlice({
  name: "LEEDEvents",
  initialState: {value:[]},
  reducers: {
    setLEEDEvents: (state, action) => {
      state.value= action.payload
    }
  }
})
export const { setLEEDEvents } = LEEDEvents.actions;
export const LEEDEvent = LEEDEvents.reducer;