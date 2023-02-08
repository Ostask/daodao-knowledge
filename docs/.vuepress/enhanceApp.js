export default ({ router }) => {

  import('../threejs/@js/dat.gui.js').then(module => {
  }).catch(error => {
      console.log(error);
  });

  import('../工作琐碎/04.threejs相关/@js/dat.gui.js').then(module => {
  }).catch(error => {
      console.log(error);
  });

  import('three/examples/jsm/libs/tween.module.min.js').then(module => {
  }).catch(error => {
      console.log(error);
  });

    /**
     * 路由切换事件处理
     */
    router.beforeEach((to, from, next) => {
      console.log("切换路由", to.fullPath, from.fullPath);
  
      //触发百度的pv统计
      if (typeof _hmt != "undefined") {
        if (to.path) {
          _hmt.push(["_trackPageview", to.fullPath]);
          console.log("上报百度统计", to.fullPath);
        }
      }
  
      // continue
      next();
    });
  };