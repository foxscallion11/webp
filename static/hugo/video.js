const dp = new DPlayer({
    container: document.getElementById('dplayer'),
    video: {
        url: 'https://cdn.jsdelivr.net/gh/foxscallion11/ffeg-mp4/mp4-2/playlist.m3u8',
        type: 'hls',
        defaultQuality: 0,
        thumbnails: 'thumbnails.jpg',
        dp.volume(0.4);
    },
    pluginOptions: {
        hls: {
            // hls config
        },
    },
});
console.log(dp.plugins.hls); // Hls 实例
