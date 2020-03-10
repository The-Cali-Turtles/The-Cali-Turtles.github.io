function time() {

    var today = new Date();
    var valueMonth = new Array();
    valueMonth[0] = "01";
    valueMonth[1] = "02";
    valueMonth[2] = "03";
    valueMonth[3] = "04";
    valueMonth[4] = "05";
    valueMonth[5] = "06";
    valueMonth[6] = "07";
    valueMonth[7] = "08";
    valueMonth[8] = "09";
    valueMonth[9] = "10";
    valueMonth[10] = "11";
    valueMonth[11] = "12";
    var officialToday = valueMonth[today.getMonth()];

    var valueYear = today.getFullYear();
    var valueDay = today.getUTCDate();

    var dateToday = valueYear + "-" + officialToday + "-" + valueDay;

    var schedule = document.getElementById("schedule");
    
    var thevalue = document.createAttribute("value");
    thevalue.value = dateToday;
    schedule.setAttributeNode(thevalue);
}