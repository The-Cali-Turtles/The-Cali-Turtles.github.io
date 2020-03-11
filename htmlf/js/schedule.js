function schedule() {
    //Sets the variable today as the DATE()
    var today = new Date();
    //Sets valueMonth into a Array() to set my own months
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
    //sets the variable officialToday to the valueMonth of today of the month
    var officialToday = valueMonth[today.getMonth()];
    //gets the year and date
    var valueYear = today.getFullYear();
    var valueDay = today.getUTCDate();
    //sets dateToday as ex: 2020-03-10
    var dateToday = valueYear + "-" + officialToday + "-" + valueDay;
    //gets the schedule or input date
    var schedule = document.getElementById("schedule");
    //Creates a attribute value
    var thevalue = document.createAttribute("value");
    //sets the variable thevalue value to dateToday ex (2020-03-10)
    thevalue.value = dateToday;
    //schedule gets the attribute theValue or sets the schedule attribute to ex (2020-03-10)
    schedule.setAttributeNode(thevalue);
}