import Player from '@vimeo/player';
import throttle from 'lodash.throttle'

const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    player.on('play', function() {
        console.log('played the video!');

    });
player.on('play', onPlay);

const onPlay = function({
    duration,
    percent,
    seconds
}) {
    // data is an object containing properties specific to that event
    player.getCurrentTime().then(function(seconds) {
    // seconds = the current playback position
}).catch(function(error) {
    // an error occurred
});
};


// const currentTime = player.getCurrentTime().then(function (seconds) {
//      // seconds = the current playback position
// }).catch(function(error) {
//     // an error occurred
// });
// // player.on('timeupdate', currentTime){

// // }

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });