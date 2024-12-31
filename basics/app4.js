"use strict";
// --------------- enum ---------------
var ErrorMessages;
(function (ErrorMessages) {
    ErrorMessages["NOT_FOUND"] = "Not Found";
    ErrorMessages["SERVER_ERROR"] = "Internal Server Error";
    ErrorMessages["UNAUTHORIZED"] = "Unauthorized";
    ErrorMessages["FORBIDDEN"] = "Forbidden";
})(ErrorMessages || (ErrorMessages = {}));
const printErrorMsg = (error) => {
    if (error === ErrorMessages.NOT_FOUND) {
        console.log('Error: ', ErrorMessages.NOT_FOUND);
    }
    else if (error === ErrorMessages.SERVER_ERROR) {
        console.log('Error: ', ErrorMessages.SERVER_ERROR);
    }
    else if (error === ErrorMessages.UNAUTHORIZED) {
        console.log('Error: ', ErrorMessages.UNAUTHORIZED);
    }
    else {
        console.log('Error: ', ErrorMessages.FORBIDDEN);
    }
};
printErrorMsg(ErrorMessages.FORBIDDEN);
