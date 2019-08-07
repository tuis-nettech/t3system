function loadTime() {
    ntpsrv = [
        'https://ntp-a1.nict.go.jp/cgi-bin/json',
        'http://ntp-a1.nict.go.jp/cgi-bin/json',
        'https://ntp-b1.nict.go.jp/cgi-bin/json',
        'http://ntp-b1.nict.go.jp/cgi-bin/json'
    ];
    ntpsrv_url = ntpsrv[Math.floor(Math.random() * ntpsrv.length)]
    console.log("NTP:" + ntpsrv_url);
    sendTime = new Date().getTime();
    super_req_A
        .get(ntpsrv_url)
        .end(function (err, res) {
            endTime = new Date().getTime();
            timeobj = res.body;
            latency = (endTime - sendTime) / 2;
            console.log("latency: " + latency + "ms");
            fixedTime = parseInt(timeobj.st * 1000 + (endTime - sendTime) / 2);
        })
}