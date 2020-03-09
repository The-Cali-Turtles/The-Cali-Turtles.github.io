function time() {

    var sch = document.getElementById("schedule");
    var getValue = sch.getAttribute("value");

    var currentDate = new Date();

    var valueYear = currentDate.getFullYear;
    var valueMonth = currentDate.getMonth;
    var valueDay = currentDate.getDay;  
    var timeValue = valueYear + "-" + valueMonth + "-" + valueDay;

    var setValue = sch.setAttribute(getValue, timeValue);
    console.log(setValue);

}