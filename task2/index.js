

$(function () {


    ////////////////////////////////////////(2)//////////////////////////////////////


    //    $("body").append("<div>Hello</div>").css({

    //    })


    ////////////////////////////////////////(3)//////////////////////////////////////


    $("#div2").accordion({
        collapsible: true,
        icons: {
            header: "ui-icon-circle-arrow-e",
            activeHeader: "ui-icon-circle-arrow-s"
        }

    })

    ////////////////////////////////////////(4)//////////////////////////////////////

    $.getJSON("https://reqres.in/api/users/", function (respond) {
        $("#table").dataTable(
            {
                data: respond.data,
                columns: [

                    { data: 'id' },
                    { data: 'first_name' },
                    { data: 'last_name' }
                ]
            }
        )
    })


})