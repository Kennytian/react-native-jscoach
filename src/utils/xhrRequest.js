export default class XhrRequest {
  static run() {
    if (__DEV__) {
      /* eslint-disable no-undef */
      XMLHttpRequest = GLOBAL.originalXMLHttpRequest ? GLOBAL.originalXMLHttpRequest : GLOBAL.XMLHttpRequest;
    }
  }
}
