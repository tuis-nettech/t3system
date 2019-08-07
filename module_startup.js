function startup(times) {
    /*ロード時のおける時刻情報*/
    times.ready = new Date();
    /*休日フラグ・ダイヤタイプ・NTP修正したローカルタイム・メッセージ情報の初期化・運行終了メッセージの表示済みフラグno*/
    /*japanese.holiday.jsを利用した月間休日情報の取得*/
    times.holiday_array = getHolidays(times.ready.getFullYear(), Number(times.ready.getMonth() + 1), true)
    /*曜日情報のString化*/
    times.week = null;
    switch (times.ready.getDay()) {
        case 0:
            times.week = "日"
            times.diagramtype = 2;
            break;
        case 1:
            times.week = "月"
            times.diagramtype = 0;
            break;
        case 2:
            times.week = "火"
            times.diagramtype = 0;
            break;
        case 3:
            times.week = "水"
            times.diagramtype = 0;
            break;
        case 4:
            times.week = "木"
            times.diagramtype = 0;
            break;
        case 5:
            times.week = "金"
            times.diagramtype = 0;
            break;
        case 6:
            times.week = "土"
            times.diagramtype = 1;
            break;
    }
    /*
    休日配列より、本日の日付値の値があるか照会する。
    ある場合は、休日の名称を挿入し、休日フラグを立て、ダイヤフラグを2とする
    */

    if (times.ready.getDate() in times.holiday_array) {
        times.str_holiday = "（" + times.holiday_array[times.ready.getDate()] + "につき祝日ダイヤに設定されています）"
        times.holiday_flag = 1;
        times.diagramtype = 2;
    }
    else {
        switch (times.diagramtype) {
            case 0:
                times.str_holiday = "（平日ダイヤ）";
                break;
            case 1:
                times.str_holiday = "（土曜ダイヤ対応済）";
                break;
            case 2:
                times.str_holiday = "（休日ダイヤ対応済）";
                break;
        }
        times.holiday_flag = 0;
    }

    Insert_ready(times);
}
