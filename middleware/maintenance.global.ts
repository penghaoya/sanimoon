export default defineNuxtRouteMiddleware((to) => {
  const config = useRuntimeConfig();
  
  // 如果维护模式启用
  if (config.public.maintenanceMode === true) {
    // 如果不是已经在维护页面，则重定向到维护页面
    if (to.path !== '/maintenance') {
      return navigateTo('/maintenance');
    }
  } 
  // 如果维护模式未启用但访问了维护页面，则重定向到首页
  else if (to.path === '/maintenance') {
    return navigateTo('/');
  }
})
