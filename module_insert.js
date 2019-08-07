function Insert_ready(times) {
    document.getElementById('DaySpace').insertAdjacentHTML('afterbegin', times.ready.getFullYear() + "年" + Number(times.ready.getMonth() + 1) + "月" + times.ready.getDate() + "日（" + times.week + "）");
    document.getElementById('HolidayInfo').insertAdjacentHTML('afterbegin', times.str_holiday);
    document.getElementById('DaySpace2').insertAdjacentHTML('afterbegin', times.ready.getFullYear() + "年" + Number(times.ready.getMonth() + 1) + "月" + times.ready.getDate() + "日（" + times.week + "）");
    document.getElementById('HolidayInfo2').insertAdjacentHTML('afterbegin', times.str_holiday);
    document.getElementById('DaySpace3').insertAdjacentHTML('afterbegin', times.ready.getFullYear() + "年" + Number(times.ready.getMonth() + 1) + "月" + times.ready.getDate() + "日（" + times.week + "）");
    document.getElementById('HolidayInfo3').insertAdjacentHTML('afterbegin', times.str_holiday);
}
function OneSecDisp(times) {
    /*現在時刻*/
    document.getElementById('NowTimeSpace').innerHTML =
        h + ":" + m + ":" + s + " ";
    /*現在時刻 with Tsuga*/
    document.getElementById('NowTimeSpace2').innerHTML =
        h + ":" + m + ":" + s + " ";
    document.getElementById('NowTimeSpace3').innerHTML =
        h + ":" + m + ":" + s + " ";
    //document.getElementById('SysTimeSpace').innerHTML = now_test;
    document.getElementById('update_ntp').innerHTML = lastUpdateNTP;
}
function DispList(obj) {
    if (obj.loadflag == 1) {
        obj.type_color = [];
        list = obj.stpoint;
        let tables = "<!--insert=>-->"
        dokomade = 5;
        obj.setEOF = 0;
        obj.setEOF = 0;
        obj.saishu = false;
        if (obj.stpoint != "NotFound") {
            if (obj.ary[(Number(obj.stpoint) + 1)][0] == "EOF") {
                obj.saishu = true;
            }
        }


        while (true) {
            if (list > obj.stpoint + dokomade) {
                break;
            }
            //console.log(obj.name + ":" + list + ":" + obj.ary[list][0])
            if (obj.stpoint == "NotFound" || obj.setEOF == 1 || obj.setEOF == 1) {
                if (obj.stpoint == "NotFound") {
                    tables += ""
                        + '<div class="row" style="font-size:5vh;text-align:center;">'
                        + '<div class="col-md-12 border">本日の便の運行は終了しました</div>'
                        + '<div class="col-md-12 border">日付変更後に初バス運行が表示されます</div>'
                        + "<div class='col-md-12 border'>またのご利用お待ちしております</div>"
                        + '<div class="col-md-12 border">Thank you for using T3 System.</div>'
                        + "<div class='col-md-12 border'>-----</div>"
                        + '<div class="col-md-12 border">By. NetTech</div>'
                        + '</div>';
                    obj.sekkin = 3;
                    obj.checkend = 3;
                    if (chiba.sekkin == 3 && tsuga.sekkin == 3) {
                        deadpage = true;
                    }
                    break;
                }
                if (obj.setEOF == 0) {
                    tables += ""
                        + '<div class="row" style="font-size:5vh;text-align:center;">'
                        + '<div class="col-md-12 border">本日の運行は上記をもちまして終了です</div>'
                        + '</div>';
                    list++;
                    obj.setEOF = 1;
                    continue;
                } else {
                    tables += ""
                        + '<div class="row" style="font-size:5vh;text-align:center;">'
                        + '<div class="col-md-12 border">---</div>'
                        + "</div>";
                    list++;
                    continue;
                }
            }
            else {
                if (obj.ary[list][0] == "EOF") {
                    obj.setEOF = 1;
                    continue;
                } else {
                    switch (obj.ary[list][0]) {
                        case '千05':
                            obj.type_color[list] = "background:blue;"
                            break;
                        case '千02':
                            obj.type_color[list] = "background:green;"
                            break;
                        case '情02':
                            obj.type_color[list] = "background:red;"
                            break;
                        case 'つ01':
                            obj.type_color[list] = "background:chocolate;color:black;"
                            break;

                        case '高速':
                            obj.type_color[list] = "background:blueviolet;"
                        default:
                            obj.type_color[list] = "background:black;color:white;"
                            break;
                    }
                    tables += ""
                        + '<div class="row" style="font-size:5vh;text-align:center;">'
                        + '<div class="col-md-2 border" style="' + obj.type_color[list] + '">' + obj.ary[list][0] + '</div>'
                        + '<div class="col-md-4 border" style="font-size:4vh;">' + obj.ary[list][1] + '</div>'
                        + '<div class="col-md-2 border">' + obj.ary[list][2] + '</div>'
                        + '<div class="col-md-2 border">' + obj.ary[list][3] + '</div>'
                        + '<div class="col-md-2 border" ' + obj.cdown_style[list] + ">" + obj.cdown[list] + '</div>'
                        + '</div>';
                }
            }
            list++;
        }
        document.getElementById(obj.idname).innerHTML = tables;
        document.getElementById('sysmsg').innerHTML = "表示中";
        if (chiba.sekkin == 3 && tsuga.sekkin == 3 && endmsg == 0) {
            document.getElementById('WarningSpace').innerHTML = '<p class="scrollings">' + "[ATTENSION] The END of today's service." + '</p>'
            endmsg = 1;
        } else if (endmsg == 0) {
            if (obj.sekkin == 1) {
                if (obj.push == 0) {
                    if (obj.saishu == true) {
                        Push.create("【最終】バス接近情報", {
                            body: "【" + obj.ary[obj.stpoint][2] + "分発車】　" + obj.ary[obj.stpoint][0] + "系統：" + obj.name + "行最終バスが５分以内に到着します。",
                            icon: 'attension.png',
                            timeout: 15000, // 通知が消えるタイミング
                            vibrate: [100, 100, 100], // モバイル端末でのバイブレーション秒数
                            onClick: function () {
                                // 通知がクリックされた場合の設定
                                console.log(this);
                            }
                        });
                    } else {
                        Push.create("バス接近情報", {
                            body: obj.ary[obj.stpoint][0] + "系統：" + obj.ary[obj.stpoint][2] + "分発" + obj.name + "行のバスが５分以内に到着します。",
                            icon: 'bus.png',
                            timeout: 15000, // 通知が消えるタイミング
                            vibrate: [100, 100, 100], // モバイル端末でのバイブレーション秒数
                            onClick: function () {
                                // 通知がクリックされた場合の設定
                                console.log(this);
                            }
                        });
                    }
                    obj.push = 1;
                }
            }
            if (obj.sekkin == 1) {

                if (obj.saishu == true) {
                    document.getElementById('WarningSpace').innerHTML = '<div style="background:red;"><p class="blink" style=";color:white;text-align:center;font:bold;">' + "【最終】まもなく" + obj.name + "方面最終バスが到着致します。" + '</p></div>';
                } else if (chiba.checkend == 1 && tsuga.checkend == 1) {
                    document.getElementById('WarningSpace').innerHTML = '<div style="background:yellow;"><p class="blink" style=";color:black;text-align:center;">' + "【接近情報】まもなく都賀行/千葉行バスが到着致します。" + '</p></div>';
                } else {
                    if (chiba.sekkin == 1) {
                        document.getElementById('WarningSpace').innerHTML = '<div style="background:chartreuse;"><p class="blink" style=";color:black;text-align:center;">' + "【接近情報】まもなく" + obj.name + "方面行バスが到着致します。" + '</p></div>';
                    }
                    if (tsuga.sekkin == 1) {
                        document.getElementById('WarningSpace').innerHTML = '<div style="background:plum;"><p class="blink" style=";color:black;text-align:center;">' + "【接近情報】まもなく" + obj.name + "方面行バスが到着致します。" + '</p></div>';
                    }
                }
                obj.checkend = obj.sekkin;
            }
            else if (obj.sekkin != obj.checkend && obj.sekkin != 3) {
                document.getElementById('WarningSpace').innerHTML = '<p class="scrollings">' + WarningText[Warningflag] + '</p>'
                obj.checkend = 0;
                obj.push = 0;
            }
            if (obj.sekkin != 3) {
                obj.sekkin = 0; //default Reset
            }
        }
    }
}

function TenSecDisp() {
    if (chiba.sekkin == 0 && tsuga.sekkin == 0) {
        document.getElementById('WarningSpace').innerHTML = '<p class="scrollings">' + WarningText[Warningflag] + '</p>'
    }
}
