import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    const Key = 'videoplayer-current-time';
    const currentTime = localStorage.getItem(Key);

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(currentTime);



player.getVideoTitle().then(function (title) {
    console.log('title:', title);
});

function onPlay(e) {
    // console.log(e.seconds);
    const time = e.seconds;

    localStorage.setItem(Key, time);

};


