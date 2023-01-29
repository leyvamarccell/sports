import { create } from "zustand";

export const useGlobalState = create(() => ({
    value: 12
}))