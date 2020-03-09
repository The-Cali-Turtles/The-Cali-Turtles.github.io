function getCost() {
    var costAdults = 35.00;
    //var costChildren = 20.99;
    var changeAdults = document.getElementById("adults");
    changeAdults.onchange(function(num) {
        var total = costAdults * num;
        return total;
    });
}