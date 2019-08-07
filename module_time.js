/*カウントダウンの計算*/
function countdown(obj) {
    obj.cdown = [];
    obj.cdown[0] = "Countdowns";
    /*カラースタイル変数*/
    obj.cdown_style = [];
    loop_cdown = obj.stpoint;
    while (loop_cdown < obj.ary.length - 1) {
        /*配列より大きいか、スタートライン時にNotFoundの場合*/
        if (loop_cdown > obj.ary.length - 2 || loop_cdown == 'NotFound' || obj.ary[loop_cdown] == "EOF") {
            for (loops = obj.ary.length; loops < obj.ary.length + 10; loops++) {
                obj.cdown[loops] = "NONE"
            }
            break;
        } else {
            hour_ary = Number(obj.come_split[loop_cdown][0]);
            mins_ary = Number(obj.come_split[loop_cdown][1]);
            /*時のマスター：カウント時は基本的にカウントから現在を除算する*/
            math_h = hour_ary - h;
            /*分のマスター：現在の分が配列の分より先行しているということは、正時（００分）をまたぐ*/
            if (mins_ary < m) {
                /*カウント分は、60-現在の正時前の分の大きさと正時後の分の大きさ*/
                math_m = 60 - m + mins_ary;
                math_h--;
                /*このうち、カウント分の合計が59を超える場合(60以上)なら、カウント時を増やし、分調整する*/
                if (math_m > 59) {
                    math_m = 60 - math_m;
                    math_h++;
                }
            }
            /*現在が先行していなければ、その差分を求める*/
            else {
                math_m = mins_ary - m;
            }
            /*秒のマスター：現在の秒数が０ならば、カウントの秒を０である*/
            if (s == 0) {
                math_s = 0;
            } else {
                /*基本的に秒数は60より引かれる*/
                math_s = 60 - s;
                if (math_m == 0) {
                    /*ただし、分が0なら時より繰り下げ調整する*/
                    math_h--;
                    math_m = 60;
                    math_m--;
                } else {
                    /*通常時は普通に１分引く*/
                    math_m--;
                }
            }
            /*150sec（2:30）よりした*/
            if (math_h * 3600 + math_m * 60 + math_s < 150) {
                obj.cdown_style[loop_cdown] = 'style="color:red;font-size:4vw;"'
                obj.sekkin = 1;
            }
            /*300sec（6:00）よりした*/
            else if (math_h * 3600 + math_m * 60 + math_s < 360) {
                obj.cdown_style[loop_cdown] = 'style="color:yellow;font-size:4vw;" class="oblique"'
                obj.sekkin = 1;
            }
            /*通常時のカラースタイル*/
            else {
                obj.cdown_style[loop_cdown] = 'style="color:white;font-size:3vw;"'//+'>'
            }
            /*ケタ数調整*/
            if (math_m < 10) math_m = "0" + math_m
            if (math_s < 10) math_s = "0" + math_s
            obj.cdown[loop_cdown] = math_h + ":" + math_m + ":" + math_s;
        }
        loop_cdown++;
    }
    return obj;
}