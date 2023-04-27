import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface CustomState {
    amount: number
    title: string
    updateAmount: (newAmount: number) => void
  }

export const useCustomStore = create<CustomState>((set, get) => ({
  amount: 0,
  title: '',
  updateAmount: (newAmount: number ) => {
    const amountState = get().amount
    set({ amount: newAmount + amountState })
},
}));