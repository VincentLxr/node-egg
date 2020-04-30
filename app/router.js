'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/swiperList', controller.home.getSwiperList);
  router.get('/catItems', controller.home.getCatItems);
  router.get('/floorDate', controller.home.getFloorDate);
};
