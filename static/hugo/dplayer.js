    $(function() {
        const dp = new DPlayer({
            container: document.getElementById('dplayer'),
            autoplay: !1,
            theme: "#42b983",
            loop: true,
            lang: "zh-cn",
            preload: "auto",
            volume: Number("0"),
            video: {
                url: 'https://cdn.jsdelivr.net/gh/foxscallion11/ffmpeg-mp4-bed/dzq/playlist.m3u8',
                type: 'hls',
                defaultQuality: 0,
                pic: 'https://cdn.jsdelivr.net/gh/foxscallion11/sc1@master/2020/09/15/59a300a893c1d392a217b71287e17be6.png',
                thumbnails: 'thumbnails.jpg',
            },
        });
        $("#btnV").click(function() {
            if ($("#btnV").html() == "�� ��Ҫ���ţ�û�����������" || $("#btnV").html() == "�� û�����������") {
                dp.play();
                dp.volume(0.4);
                $("#btnV").html("�� ̫���ˣ��ص���");
            } else {
                dp.volume(0);
                $("#btnV").html("�� û�����������");
            }
        })


    })