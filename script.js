var LK = {};

LK.registration = (function ($) {
    var $rgForm = $('#lk-registration-form'),
        $birthdayField = $rgForm.find('#lk-birthday'),
        $passwordField = $rgForm.find('#lk-password'),
        $confirmPasswordField = $rgForm.find('#lk-confirm-password'),
        $submitBtn = $rgForm.find('#lk-contact-submit');

    function init() {
        if (!$rgForm) return;

        initDatePicker($birthdayField);
    };

    function checkPasswordMatch() {
       // Function for compare passwords
    };

    function submitForm() {
        // Submit listener
    };

    function sendRequest() {
        // All magic with ajax request
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