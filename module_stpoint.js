/*配列化したテーブル情報の時刻初期位置取得*/
function spSearch(obj) {
    var search = 1;
    now = Number(h * 60) + Number(m);
    obj.ylist = [];
    while (true) {
        if (search > obj.ary.length - 2) {
            obj.stpoint = 'NotFound';
            break;
        } else {
            //console.log("SPoint: " + search + " : " + now + "vs " + (Number(obj.come_split[search][0]) * 60) + Number(obj.come_split[search][1]));
            obj.ylist[search] = (Number(obj.come_split[search][0]) * 60) + Number(obj.come_split[search][1]);
            if (obj.ylist[search] > now) {
                obj.stpoint = search;
                break;
            } else {
                search++;
                continue;
            }
        }
    }
    return obj;
}



