import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
export function createRouter(ssrContext, createDefaultRouter, routerOptions) {
  const options = routerOptions || createDefaultRouter(ssrContext).options;
  const hostname = ssrContext ? ssrContext.req.headers.host : location.host;
  return new Router({
    ...options,
    routes: fixRoutes(options.routes, hostname)
  });
}

function fixRoutes(defaultRoutes, hostname) {
  if (hostname.includes("support")) return subdomainRoutes(defaultRoutes);
  return mainDomainRoutes(defaultRoutes);
}
function mainDomainRoutes(defaultRoutes) {
  return defaultRoutes.filter(r => !r.name.includes("support"));
}
function subdomainRoutes(defaultRoutes) {
  const routes = defaultRoutes.filter(r => r.name.includes("support"));
  routes.forEach(r => {
    r.path = r.path.substring(8);
  });
  return routes;
}
