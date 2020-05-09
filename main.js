window.onload = function () {
    var btn = document.getElementById("btnMail");
    var inputMail = document.getElementById("mail");
    btn.addEventListener("click", function () {
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            window.scrollBy(0, 0);
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            window.scrollBy(0, 100)
        }
    });
    inputMail.addEventListener("input", function (e) {

        var sendBtn = document.getElementById("sendBtn");
        var patt = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        if (patt.test(e.target.value)) {

            sendBtn.style.visibility = "visible";
        } else {

            sendBtn.style.visibility = "hidden";
        }
    });
    $('#sendBtn').click(function () {
        var patt = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

        if (patt.test($('#mail').val())) {

            $.post(

                "src/scripts/addMail.php", {
                    mail: $('#mail').val()
                }

            ).done(function (msg) {
                var doneLabel = document.getElementById("doneLabel");
                doneLabel.style.visibility = "visible";
console.log(msg);
            })
        }

    });
};