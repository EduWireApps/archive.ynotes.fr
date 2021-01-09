export const state = () => ({
  topStyle: false,
  marginTop: true
});

export const mutations = {
  settopStyle(state, { t }) {
    state.topStyle = t;
  },
  setMarginTop(state, { m }) {
    state.marginTop = m;
  }
};
