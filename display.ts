// consume interface and function from namespace 

// declare the message with interface datatype;
var messageValue: message.messageType = {type:"Here I am accessing namespace method and interface"} ;
// call the namespace method with parameter as interface property;
message.displayMessage(messageValue.type);