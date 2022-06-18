export default class Observer {
  static startObserve(...instances) {
    instances.forEach((item) => {
      item.checkValueListener();
    });
  }
}
