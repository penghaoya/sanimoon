# 网站维护模式

本项目已配置网站维护模式功能，当需要进行网站维护时，可以启用维护模式，此时网站将显示404维护页面，并且不显示导航栏和页脚。

## 启用维护模式

### 通过环境变量

设置以下环境变量来启用维护模式：

```
MAINTENANCE_MODE=true
MAINTENANCE_MESSAGE=自定义维护信息（可选）
```

### 在Vercel部署中设置维护模式

1. 登录Vercel管理面板
2. 打开您的项目设置
3. 前往"Environment Variables"选项卡
4. 添加以下环境变量：
   - `MAINTENANCE_MODE` = `true`
   - `MAINTENANCE_MESSAGE` = `您的自定义维护信息`（可选）
5. 点击"Save"保存更改
6. 重新部署您的项目以使更改生效

### 禁用维护模式

将`MAINTENANCE_MODE`环境变量设置为`false`或完全删除该环境变量，然后重新部署项目。

## 布局和设计

维护页面使用空布局(`empty`)，确保在维护模式下不显示网站的导航栏和页脚，给用户一个清晰的信息：网站当前无法使用。

维护页面位于`pages/maintenance.vue`，您可以根据需要自定义此页面的设计和内容。

## 技术实现

维护模式通过以下几个关键组件实现：

1. `middleware/maintenance.global.ts` - 全局中间件，用于拦截所有请求并在维护模式下重定向到维护页面
2. `pages/maintenance.vue` - 维护页面，显示维护信息
3. `layouts/empty.vue` - 空布局，确保维护页面不显示导航栏和页脚

## 高级用法

### 维护中允许访问特定页面

如果您希望在维护模式下仍然允许访问某些页面（如管理页面），可以修改`middleware/maintenance.global.ts`文件中的逻辑，添加排除路径。例如：

```typescript
// 排除这些路径不进入维护模式
const excludePaths = ['/admin', '/admin/login'];
if (config.public.maintenanceMode === true && !excludePaths.includes(to.path) && to.path !== '/maintenance') {
  return navigateTo('/maintenance');
}
