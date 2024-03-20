import { createSlice, PayloadAction, configureStore } from "@reduxjs/toolkit";
import { randomInt } from "crypto";

interface note {
  noteId: number;
  noteTitle: string;
  noteDescription: string;
}

interface noteState {
  notes: note[];
}

const initialState: noteState = {
  notes: [],
};

const noteSlice = createSlice({
  name: "simple note",
  initialState,
  reducers: {
    addNote: (
      state,
      action: PayloadAction<{
        noteTitle: string;
        noteDescription: string;
      }>
    ) => {
      state.notes.push({
        noteId: Math.floor(Math.random() * 100) + 1,
        noteTitle: action.payload.noteTitle,
        noteDescription: action.payload.noteDescription,
      });
    },
    removeNote: (state, action: PayloadAction<{ id: number }>) => {
      state.notes.splice(action.payload.id, 1);
    },
  },
});

const noteStore = configureStore({ reducer: { noteSlice: noteSlice.reducer } });

export default noteStore;
export const { addNote, removeNote } = noteSlice.actions;
