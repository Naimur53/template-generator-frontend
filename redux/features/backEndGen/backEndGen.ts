import { IFields, IModule } from "@/interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { json } from "stream/consumers";

// Define a type for the slice state

interface backEndGenState {
  modules: IModule[];
}

// Define the initial state using that type
const initialState: IModule[] = [
  {
    name: "demoModules",
    fields: [],
    shouldAddPaginationAndQuery: false,
  },
];

export const backEndGen = createSlice({
  name: "backEndGen",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addNewModuleByName: (state, action: PayloadAction<string>) => {
      state.push({
        name: action.payload,
        fields: [],
        shouldAddPaginationAndQuery: true,
        searchTermFields: [],
        exactTermFields: [],
      });
    },
    removeModuleByName: (state, action: PayloadAction<string>) => {
      return state.filter((single) => single.name !== action.payload);
    },
    addNewSearchTermFields: (
      state,
      action: PayloadAction<{ fieldName: string[]; moduleName: string }>
    ) => {
      const findIndex = state.findIndex(
        (single) => single.name === action.payload.moduleName
      );
      if (findIndex > -1) {
        state[findIndex].searchTermFields = action.payload.fieldName;
      } else {
        return state;
      }
    },
    removeSearchTermField: (
      state,
      action: PayloadAction<{ fieldName: string; moduleName: string }>
    ) => {
      const findIndex = state.findIndex(
        (single) => single.name === action.payload.moduleName
      );
      if (findIndex > -1) {
        state[findIndex].searchTermFields = state[
          findIndex
        ].searchTermFields?.filter(
          (single) => single !== action.payload.fieldName
        );
      } else {
        return state;
      }
    },
    addExactField: (
      state,
      action: PayloadAction<{ fieldName: string[]; moduleName: string }>
    ) => {
      const findIndex = state.findIndex(
        (single) => single.name === action.payload.moduleName
      );
      console.log(findIndex);
      if (findIndex > -1) {
        state[findIndex].exactTermFields = action.payload.fieldName;
      } else {
        return state;
      }
    },
    removeExactField: (
      state,
      action: PayloadAction<{ fieldName: string; moduleName: string }>
    ) => {
      const findIndex = state.findIndex(
        (single) => single.name === action.payload.moduleName
      );
      if (findIndex > -1) {
        state[findIndex].searchTermFields = state[
          findIndex
        ].searchTermFields?.filter(
          (single) => single !== action.payload.fieldName
        );
      } else {
        return state;
      }
    },
    setShouldAddPaginationAndQuery: (
      state,
      action: PayloadAction<{ value: boolean; moduleName: string }>
    ) => {
      const findIndex = state.findIndex(
        (single) => single.name === action.payload.moduleName
      );
      if (findIndex > -1) {
        state[findIndex].shouldAddPaginationAndQuery = action.payload.value;
      } else {
        return state;
      }
    },
    addNewField: (
      state,
      action: PayloadAction<{ moduleName: string } & IFields>
    ) => {
      const findIndex = state.findIndex(
        (single) => single.name === action.payload.moduleName
      );
      if (findIndex > -1) {
        const newField: IFields = {
          fieldName: action.payload.fieldName,
          type: action.payload.type,
          length: action.payload.length,
          isRequired: action.payload.isRequired,
          isUnique: action.payload.isUnique,
        };

        state[findIndex].fields.push(newField);
      } else {
        return state;
      }
    },
    removeField: (
      state,
      action: PayloadAction<{ moduleName: string; fieldName: string }>
    ) => {
      const findModuleIndex = state.findIndex(
        (single) => single.name === action.payload.moduleName
      );
      if (findModuleIndex > -1) {
        state[findModuleIndex].fields = state[findModuleIndex].fields.filter(
          (single) => single.fieldName != action.payload.fieldName
        );
      } else {
        return state;
      }
    },
  },
});

export const {
  addNewModuleByName,
  removeModuleByName,
  addNewField,
  removeField,
  addExactField,
  addNewSearchTermFields,
  removeExactField,
  removeSearchTermField,
  setShouldAddPaginationAndQuery,
} = backEndGen.actions;

export default backEndGen.reducer;
