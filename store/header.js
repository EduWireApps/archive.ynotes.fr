export const state = () => ({
  transparent: false,
  marginTop: true
});

export const mutations = {
  setTransparent(state, { t }) {
    state.transparent = t;
  },
  setMarginTop(state, { m }) {
    state.marginTop = m;
  }
};
