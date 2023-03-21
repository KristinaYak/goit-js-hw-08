import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

  

//     player.on(
//         'timeupdate', 
//         throttle(function (time) {
//         localStorage.setItem('videoplayer-current-time', time.seconds);
//     }, 1000)
//     );
    
// // відновлення відтворення

// player.setCurrentTime(localStorage.setItem('videoplayer-current-time'));


const Key = 'videoplayer-current-time';
player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(e) {
    console.log(e.seconds);
    const time = e.seconds;

    localStorage.setItem(Key, time);

};

player.getVideoTitle().then(function (title) {
    console.log('title:', title);
});

const CurrentTime = localStorage.setItem(Key);
const startTime = JSON.parse(CurrentTime);

console.log(startTime);

player.setCurrentTime(CurrentTime).then(function (time) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});