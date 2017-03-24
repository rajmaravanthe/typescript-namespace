//declare a namespace of message with interface and method
namespace message {
    export interface messageType {
        type: string;
    }
    export function displayMessage (message) {
        console.log(message);
    }

}