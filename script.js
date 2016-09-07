var LK = {};

LK.registration = (function ($) {
    var $rgForm = $('#lk-registration-form'),
        $birthdayField = $rgForm.find('#lk-birthday'),
        $passwordField = $rgForm.find('#lk-password'),
        $confirmPasswordField = $rgForm.find('#lk-confirm-password'),
        $msgContainer = $('.lk-msg-container'),
        $submitBtn = $rgForm.find('#lk-contact-submit'),
        passwordMatch = false;

    function init() {
        if (!$rgForm) return;

        initDatePicker($birthdayField);

        $passwordField.add($confirmPasswordField).on('keyup', function (e) {
            checkPasswordMatch($passwordField, $confirmPasswordField)
        });

        $rgForm.on('submit', function (e) {
            e.preventDefault();
            submitForm();
        });
    };

    function checkPasswordMatch(password, password_c) {
        passwordMatch = (password.val() == password_c.val()) ? true : false;

        if (!passwordMatch) {
            password_c.css('borderColor', '#e8503c');
        } else if (password.val() == '' && password_c.val() == '') {
            password_c.css('borderColor', '#d8d8d8');
        } else {
            password_c.css('borderColor', '#64c7c7');
            $('.lk-confirm-password-msg').html("");
        }
    };

    function notifier(id, type, msg) {
        $(id).html("<span class='" + type + "'>" + msg + "</span>");
    }

    function submitForm() {
        if (passwordMatch) {
            sendRequest($rgForm);
        } else {
            notifier(".lk-confirm-password-msg", "error", "Passwords don't match.")
        }
    };

    function sendRequest(form) {
        $.ajax({
            type: "POST",
            url: "process.php",
            data: form.serialize(),
            beforeSend: function () {
                $submitBtn.addClass('loading').attr('disabled', true);
            },
            success: function (data) {
                $rgForm.remove();
                $msgContainer.html("<h1 style='padding:50px 20px'>" + data + "</h1>");
            },
            error: function (xhr) {
                console.log(xhr.statusTex)
                console.log(xhr.responseText)
                $submitBtn.removeAttr('disabled').removeClass('loading');
            },
            complete: function () {
                $submitBtn.removeAttr('disabled').removeClass('loading');
            }
        });
    };

    function initDatePicker(inputObj) {
        inputObj.datepicker({
            changeMonth: true,
            changeYear: true,
            maxDate: new Date(2009, 1 - 1, 31),
            minDate: new Date(1900, 1 - 1, 1),
            yearRange: "1900:2009"
        });
    };

    return {
        init: init
    }

})(jQuery);


$(document).ready(function () {

    LK.registration.init();

});