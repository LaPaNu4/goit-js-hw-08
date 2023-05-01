var throttle = require('lodash.throttle');
import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';
player.on('timeupdate', throttle(timeupdating, 1000));
function timeupdating(e) {
  duration: 61.857;
  percent: 0.049;
  seconds: 3.034;
  const second_time = e.seconds.toString();
  localStorage.setItem(STORAGE_KEY, second_time);
}
player.setCurrentTime(getTimeUpdate());
function getTimeUpdate(e) {
  const loadtimeInSecond = Number(localStorage.getItem(STORAGE_KEY));
  return loadtimeInSecond;
}
// Через сейв попробуй зробити
