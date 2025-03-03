export default defineNuxtRouteMiddleware((to) => {
  const config = useRuntimeConfig();
  
  // Skip maintenance mode for specific paths if needed
  // Example: if (to.path === '/admin') return;
  
  // Check if maintenance mode is enabled
  if (config.public.maintenanceMode === true && to.path !== '/maintenance') {
    return navigateTo('/maintenance');
  }
  
  // If we're on the maintenance page but maintenance mode is disabled, redirect to home
  if (to.path === '/maintenance' && config.public.maintenanceMode !== true) {
    return navigateTo('/');
  }
})
