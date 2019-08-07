function MakeStaticWarningText() {
    WarningText = [];
    WarningText[0] = "ここには注意事項が表示されます。（10秒毎）"
    WarningText[1] = "ダイヤ乱れの際は、時刻通りに来ないことも御座います。予めご了承ください。"
    WarningText[2] = "「赤」は発車まで2:30以内、「黄」は発車まで6:00以内です。"
    /*休日時のメッセージ変更*/
    if (times.holiday_flag == 0) {
        console.log("HoliFlag 0");
        WarningText[3] = "長期休暇中のダイヤは予め平日ダイヤかご確認ください。";
    } else if (times.holiday_flag == 1) {
        console.log("HoliFlag 1");
        WarningText[3] = "本日は祝日となります。ダイヤ乱れにご注意ください。";
    }
    WarningText[4] = "BugFix/Donation:NetTech Nakagawa(Mail:j17273yn)"
    WarningText[5] = "千葉・千葉みなと等から高速バスも運行中。併せてご利用ください。"
    WarningText[6] = "この表示機は、東京情報大学・情報大正門発の発車予定をダイヤから算出しております。";
}//End Function

function MakeStaticPRText() {
    PRText = [];
    PRText[0] = "i-Shopでは豊富な飲み物・カップ麺などがおいてあります！"
    PRText[1] = "i-Shopの商品、全品一律100円！　是非ご利用ください！"
    PRText[2] = "開発元: j17273yn@edu.tuis.ac.jp"
    PRText[3] = "PR募集中"

}//End Function