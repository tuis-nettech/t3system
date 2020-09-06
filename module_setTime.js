/*毎秒実行する時刻調整機構*/
function set_NowTime(times) {
    /*ローカルタイムの取得*/
    let local = new Date();
    /*ローカルタイムでの時刻情報*/
    let localmili = local.getTime();
    /*ローカルタイムで10分経過した場合、実行する。
    if (fixedTime == 0 || localmili > fixedTime + 600000) {
        /*loadTime (NetTime.js)より取得し、Fix値をDateへ挿入する*/
        loadTime(times);
        now = new Date(fixedTime);
        /*Fix時のローカルタイムを設定*/
        this.localfixed = new Date().getTime();
        /*NTP最終取得日時*/
        luntp = new Date().toLocaleString()
    } else {
        /*現在のローカルタイムとFix時のローカルタイムの差分にFix値に挿入する*/
        now = new Date(fixedTime + local.getTime() - this.localfixed);
    }*/
    /* CHANGED: NICTが NTP via HTTP を廃止するため */
    now = new Date();
    lastUpdateNTP = "NTP同期は廃止しました.";
    /*修正時刻情報の細分化*/
    var now_h = now.getHours();
    var now_m = now.getMinutes();
    var now_s = now.getSeconds();
    h = now_h;
    m = now_m;
    s = now_s;
    /*２ケタ化*/
    if (now_h < 10) {
        h = "0" + now_h;
    }
    if (now_m < 10) {
        m = "0" + now_m;
    }
    if (now_s < 10) {
        s = "0" + now_s;
    }
}
