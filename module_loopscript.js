OneSecLoop = function (times) {
    times = set_NowTime(times);
    if (chiba.loadflag == 1 && tsuga.loadflag == 1) {
        chiba = spSearch(chiba);
        tsuga = spSearch(tsuga);
        chiba = countdown(chiba);
        tsuga = countdown(tsuga);
        //console.log(chiba_colorstyle)
        OneSecDisp(times);
        DispList(chiba);
        DispList(tsuga);
    }
}
TenSecLoop = function () {
    TenSecDisp();
    if (Warningflag == WarningText.length - 1) {
        Warningflag = 1;
    }
    else {
        Warningflag++;
    }
    if (PRflag == PRText.length - 1) {
        PRflag = 0;
    }
    else {
        PRflag++;
    }
}