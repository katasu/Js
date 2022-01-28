﻿const table = ko.observableArray([])
ko.applyBindings()
    
$(document).ready(function() {
    $.ajax({
        url: "http://192.168.160.58/Formula1/api/races?page="+a+"&pagesize=20",
        context: "application/json",
        method: "GET",
        success: (response) => {
            console.log(response)
            table(response["List"])
        }
    })
    $("#button-table-search").click(() => {
        searchValue = document.getElementById("table-search").value;
        $.ajax({
            url: `http://192.168.160.58/Formula1/api/search/races?q=${searchValue}`,
            method: "GET",
            success: (response) => {
                console.log(response)
                table(response)
            }
        })
    })
    $("#table-search").keyup(function (event) {
        if (event.keyCode === 13) {
            $("#button-table-search").click();
        }
    });
});
const onTableRowClick = (data) => {
    const raceId = data["RaceId"];
    window.location.href = `race-details.html?id=${raceId}`
}