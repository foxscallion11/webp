    const dp = new DPlayer({
            container: document.getElementById('dplayer'),
            autoplay: !0,
            theme: "#42b983",
            loop: true,
            lang: "zh-cn",
            preload: "auto",
            volume: Number("0"),
            video: {
                url: 'https://cdn.jsdelivr.net/gh/foxscallion11/ffeg-mp4/mp4-2/playlist.m3u8',
                type: 'hls',
                defaultQuality: 0,
                thumbnails: 'thumbnails.jpg',
            },
        });
        $("#btnV").click(function() {
            if ($("#btnV").html() == "🚀 画面不动？没声音？点这里！" || $("#btnV").html() == "↑ 没声音？点这里！") {
                dp.play();
                dp.volume(0.4);
                $("#btnV").html("🚀 太吵了，关掉！");
            } else {
                dp.volume(0);
                $("#btnV").html("🚀 画面不动？没声音？点这里！");
            }
        })

