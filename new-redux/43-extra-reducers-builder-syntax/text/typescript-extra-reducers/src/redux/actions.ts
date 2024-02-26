import { createAction } from "@reduxjs/toolkit";

export const inc = createAction<number>('increment');
export const dec = createAction<number>('decrement');
