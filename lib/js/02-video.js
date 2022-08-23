"use strict";

var _player = _interopRequireDefault(require("@vimeo/player"));

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const iframe = document.querySelector('iframe');
const player = new _player.default(iframe);
player.on('timeupdate', (0, _lodash.throttle)(e => {
  localStorage.setItem('videoplayer-current-time', e.seconds);
}, 1000));
player.setCurrentTime(localStorage.getItem('videoplayer-current-time')).catch(function (error) {
  console.error(error);
});