import Player from '@vimeo/player';
import throttle from 'lodash.throttle'

const VIDEO_KEY = 'videoplayer-current-time'

const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

player.getVideoTitle().then(function(title) {
        console.log('title:', title);
});

player.on('timeupdate', throttle(currentTimeUpdate, 3000))
     
function currentTimeUpdate() {
    player.getCurrentTime().then(function (seconds) {
        localStorage.setItem(VIDEO_KEY, seconds)
        console.log(seconds)
                
   }).catch(function(error) {
    console.log('an error occurred') 
   });
}

player.on('play', function () {
    console.log('played the video!');
});

player.setCurrentTime(localStorage.getItem(VIDEO_KEY)).then(function (seconds) {

    }).catch(function (error) {
        switch (error.name) {
            case 'RangeError':
                break;

            default:
                break;
        }
    });