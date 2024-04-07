import { create } from "zustand";

export const useShowModal = create(set => {
  return {
    showModal: false,
    fetchShow: () => set(state => ({
      showModal: !state.showModal
    }))
  }
})