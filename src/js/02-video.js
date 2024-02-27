import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    player.on('timeupdate', throttle(() => {
        player.getCurrentTime().then((time) => {
        const timeString = JSON.stringify(time);
        localStorage.setItem('videoplayer-current-time', timeString);
  });
    }, 1000));

    player.ready().then(() => {
        const currentTime = localStorage.getItem('videoplayer-current-time');
        if (currentTime !== null) {
        const parsedTime = JSON.parse(currentTime);  
        player.setCurrentTime(parsedTime);
    }
    });