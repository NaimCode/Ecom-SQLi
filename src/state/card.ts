import { create } from 'zustand'


export type CardItem = {
    product:any,
    quantity:number,
    size:string,
}

interface CardStore {
    card: Array<CardItem>
    addItem: (item:CardItem) => void
    removeItem: (item:CardItem) => void
}
export const useCardStore = create<CardStore>((set) => ({
  card: [],
  addItem: (item:CardItem) => set((state) => ({ card: [...state.card, item] })),
  removeItem: (item) => set((state) => ({ card: state.card.filter((i) => i.product.id !== item.product.id) })),
}))