import { create } from "zustand"


export const useGlobalState = create((set) => ({
    value: 0,
    wallet: '',
    coin: '',
    input: '',
    coins: '',
    wallet_change: (value) => set(state => ({
        wallet: value 
    })), 
      value_change: (value) => set(state => ({
        value: value 
    })),
    coin_change: (value) => set(state => ({
        coin: value 
    })) ,
    coins_change: (value) => set(state => ({
        coins: value 
    })),
    input_change: (value) => set(state => ({
        input: value 
    }))
}))