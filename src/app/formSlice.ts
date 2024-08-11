import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormData {
  id: string;
  name: string;
  email: string;
}

interface FormState {
  forms: FormData[];
}

const initialState: FormState = {
  forms: JSON.parse(localStorage.getItem('forms') || '[]')
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    createForm(state, action: PayloadAction<FormData>) {
      state.forms.push(action.payload);
      localStorage.setItem('forms', JSON.stringify(state.forms));
    },
    updateForm(state, action: PayloadAction<FormData>) {
      const index = state.forms.findIndex(form => form.id === action.payload.id);
      if (index !== -1) {
        state.forms[index] = action.payload;
        localStorage.setItem('forms', JSON.stringify(state.forms));
      }
    },
    deleteForm(state, action: PayloadAction<string>) {
      state.forms = state.forms.filter(form => form.id !== action.payload);
      localStorage.setItem('forms', JSON.stringify(state.forms));
    }
  }
});

export const { createForm, updateForm, deleteForm } = formSlice.actions;
export default formSlice.reducer;