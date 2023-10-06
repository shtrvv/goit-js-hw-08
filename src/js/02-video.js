import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');

const LS_KEY = 'videoplayer-current-time';
let lastTime = localStorage.getItem(LS_KEY) ?? 0;

const player = new Player(iframe, {});

player.ready().then(() => {
    player.setCurrentTime(lastTime);
    player.on('timeupdate', throttle(onTimeUpdate, 1000));
});


function onTimeUpdate(data) {
    const time = data.seconds;
    localStorage.setItem(LS_KEY, time);
}
