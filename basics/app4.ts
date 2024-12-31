// --------------- enum ---------------

enum ErrorMessages {
  NOT_FOUND = 'Not Found',
  SERVER_ERROR = 'Internal Server Error',
  UNAUTHORIZED = 'Unauthorized',
  FORBIDDEN = 'Forbidden',
}

const printErrorMsg = (error: ErrorMessages) => {
  if (error === ErrorMessages.NOT_FOUND) {
    console.log('Error: ', ErrorMessages.NOT_FOUND);
  } else if (error === ErrorMessages.SERVER_ERROR) {
    console.log('Error: ', ErrorMessages.SERVER_ERROR);
  } else if (error === ErrorMessages.UNAUTHORIZED) {
    console.log('Error: ', ErrorMessages.UNAUTHORIZED);
  } else {
    console.log('Error: ', ErrorMessages.FORBIDDEN);
  }
};

printErrorMsg(ErrorMessages.FORBIDDEN);
