const VueScrollTo = require("vue-scrollto");
const options = {
  easing: "ease-in",
  lazy: false,
  offset: -60,
  force: true,
  x: false,
  y: true
};

export default async function(to) {
  const findEl = async (hash, x = 0) => {
    return (
      document.querySelector(hash) ||
      new Promise(resolve => {
        if (x > 50) {
          return resolve(document.querySelector("#app"));
        }
        setTimeout(() => {
          resolve(findEl(hash, ++x || 1));
        }, 100);
      })
    );
  };

  if (to.hash) {
    console.log(to.hash);
    let el = await findEl(to.hash);
    console.log(el);
    return VueScrollTo.scrollTo(el, 500, options);
  }

  return { x: 0, y: 0 };
}
