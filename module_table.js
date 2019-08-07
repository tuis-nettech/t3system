/* module_table*/
function export_csv2Array(obj) {
    obj.ary = [];
    y = obj.raw.split("\n");
    for (i = 0; i < y.length; ++i) {
        obj.ary[i] = y[i].split(",");
    }
    obj.come_split = [];
    for (i = 1; i < y.length - 1; ++i) {
        if (obj.ary[i][2] == '-----') {
            obj.come_split[i] = '--';
        }
        else {
            obj.come_split[i] = obj.ary[i][2].split(":");
        }
    }
    obj.loadflag = 1;
    document.getElementById('sysmsg').innerHTML = obj.name + "読込完了";
    return obj;
}
function get_table(times) {
    //テーブル情報を配列化するため、配列準備
    chiba = new Object();
    chiba.name = "千葉";
    chiba.idname = "print_chiba"
    chiba.sekkin = 0;
    chiba.checkend = 0;
    chiba.push = 0;
    tsuga = new Object();
    tsuga.name = "都賀";
    tsuga.idname = "print_tsuga"
    tsuga.sekkin = 0;
    tsuga.checkend = 0;
    tsuga.push = 0;
    //テーブルを格納できたか調査するフラグ[初期値：０（NON LOAD)]*/
    chiba.loadflag = 0;
    tsuga.loadflag = 0;
    //SuperAgent準備
    super_req_A = window.superagent;
    super_req_B = window.superagent;
    //ダイヤグラムによって変更するファイル名
    fname = [];
    //Type: 0,1,2 == 平日,土曜日,日曜日及び祝日
    if (times.diagramtype == 0) fname = ['chiba.csv', 'tsuga.csv', 'other.csv'];
    if (times.diagramtype == 1) fname = ['chiba_holiday.csv', 'tsuga.csv', 'other.csv'];
    if (times.diagramtype == 2) fname = ['chiba_holiday.csv', 'tsuga.csv', 'other.csv'];
    //Super_Agentを用いたHTTPファイル取得＆＆レスポンスをRAWに格納し、Editへ進む。
    super_req_A
        .get(fname[0])
        .end(function (err, res) {
            chiba.raw = res.text;

            chiba = export_csv2Array(chiba);
        });
    super_req_B
        .get(fname[1])
        .end(function (err, res) {
            tsuga.raw = res.text;
            tsuga = export_csv2Array(tsuga);
        })
}
