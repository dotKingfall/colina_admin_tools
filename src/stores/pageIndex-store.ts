import { defineStore } from 'pinia';

export const usePageIndexStore = defineStore('page', {
  state: () => ({
    pageIndex: 0,
  }),

  getters: {
    currentPageIndex: (state) => state.pageIndex,
  },

  actions: {
    setPageIndex(index: number){
      this.pageIndex = index;
    }
  }
});