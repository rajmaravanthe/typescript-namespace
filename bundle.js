//declare a namespace of message with interface and method
var message;
(function (message_1) {
    function displayMessage(message) {
        console.log(message);
    }
    message_1.displayMessage = displayMessage;
})(message || (message = {}));
