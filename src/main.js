$(document).ready(function (json) {
    $.getJSON("data.json", function (json) {
        $('#table').DataTable({
            "data": json,
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

$(function() {

    function Toast(type, css, msg) {
        this.type = type;
        this.css = css;
        this.msg = (' Thank you ' + ' Thank you for proposed news ');
    }

    var toasts = [
        new Toast('info', 'toast-top-full-width', 'top full width')
    ];

    toastr.options.positionClass = 'toast-top-full-width';
    toastr.options.extendedTimeOut = 0; //1000;
    toastr.options.timeOut = 1000;
    toastr.options.hideDuration = 1000;
    toastr.options.showDuration = 300;

    var i = 0;

    $('#tost-btn').click(function () {
        $('#tost-btn').prop('disabled', true);
        delayToasts();
    });

    function delayToasts() {
        if (i === toasts.length) { return; }
        var delay = i === 0 ? 0 : 2100;
        window.setTimeout(function () { showToast(); }, delay);


        if (i === toasts.length-1) {
            window.setTimeout(function () {
                $('#tost-btn').prop('disabled', false);
                i = 0;
            }, delay + 1000);
        }
    }

    function showToast() {
        var t = toasts[i];
        toastr.options.positionClass = t.css;
        toastr[t.type](t.msg);
        i++;
        delayToasts();
    }
});
$(function() {

    function Toast(type, css, msg) {
        this.type = type;
        this.css = css;
        this.msg = (' You are subscribed to news ');
    }

    var toasts = [
        new Toast('success', 'toast-bottom-right', 'top full width')
    ];

    toastr.options.positionClass = 'toast-bottom-right';
    toastr.options.extendedTimeOut = 0;
    toastr.options.timeOut = 1000;
    toastr.options.hideDuration = 1000;
    toastr.options.showDuration = 300;

    var i = 0;

    $('#btn-foot').click(function () {
        $('#btn-foot').prop('disabled', true);
        delayToasts();
    });

    function delayToasts() {
        if (i === toasts.length) { return; }
        var delay = i === 0 ? 0 : 2100;
        window.setTimeout(function () { showToast(); }, delay);


        if (i === toasts.length-1) {
            window.setTimeout(function () {
                $('#btn-foot').prop('disabled', false);
                i = 0;
            }, delay + 1000);
        }
    }

    function showToast() {
        var t = toasts[i];
        toastr.options.positionClass = t.css;
        toastr[t.type](t.msg);
        i++;
        delayToasts();
    }
});
$("#tost-btn").click(function() {

    $("#form")[0].reset();

});
$("#btn-foot").click(function() {

    $("#foot-form")[0].reset();

});




