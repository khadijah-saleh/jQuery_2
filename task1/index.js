

$(function () {


    $("#modal").dialog({
        modal: true,
        autoOpen: false,
        buttons: {
            ok: function () {
                var uname = $("#name").val()
                var pass = $("#password").val()
                $("#modal").dialog("close")
            },
            close: function () {
                var uname = $("#name").val()
                var pass = $("#password").val()
                $("body").append("Welcome" + uname)
                $("#modal").dialog("close")
            }
        }
    })

    $("#open").click(function () {
        $("#modal").dialog("open")
    })


   


})