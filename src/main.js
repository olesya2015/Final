$(document).ready(function (json) {
    $.getJSON("data.json", function (json) {

        $('#table').DataTable({
            "data": json,
            //{
            //    "url": "js",
            //    "dataSrc": ""
            //},
            "columns": [
                {"data": "Name"},
                {"data": "City"},
                {"data": "Country"},
                {"data": "Date"},
                {"data": "Email"}
            ]
        });

    });
});




//    for (var i = 0; i < json.length; i++) {
//        var js = json[i].Name;
//        //console.log(js);
//        //    $('#table').append('<tr><td>' + json[i].Name + '</td><td>' + json[i].City + '</td><td>' + json[i].Country + '</td><td>' + json[i].Date + '</td><td>' + json[i].Email + '</td></tr>');
//}
