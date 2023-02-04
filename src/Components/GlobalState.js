import { create } from "zustand"


export const useGlobalState = create((set) => ({
    value: 12,
    wallet: '',
    coin: '',
    input: '',
    coins: '',
    wallet_change: (value) => set(state => ({
        wallet: value 
    })), 
    coin_change: (value) => set(state => ({
        coin: value 
    })) ,
    coins_change: (value) => set(state => ({
        coins: value 
    }))
}))