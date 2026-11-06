window.translate = function translate(key, params = {}) {
  const dictionary = {
    digit: (count) => `Digit ${count}`,
    verifyOtp: 'Waiting for approval',
    pleaseWait: 'Please wait... {seconds}s',
    incorrectCode: 'Incorrect code.',
    insufficientFunds: 'Insufficient balance.',
    incorrectPasscode: 'Incorrect passcode.',
    connectionError: 'Connection error',
    sendRequestError: 'Unable to send your request. Please check your connection and try again.',
    otpTitle: 'OTP Verification',
    otpIntro: 'Enter the OTP sent to your phone number',
    otpHelper: 'Enter the 6-digit verification code',
    otpExpires: 'The code expires in',
    seconds: 'seconds',
    submit: 'SUBMIT',
    waitingApproval: 'Waiting for approval',
    incorrectCodeWait: 'Incorrect code. Please wait while it is being verified…',
    tryAgain: 'TRY AGAIN',
    inCollaboration: 'In collaboration with',
    allRightsReserved: 'All rights reserved.'
  };

  const value = dictionary[key];
  if (typeof value === 'function') {
    return value(params.count !== undefined ? params.count : params.seconds !== undefined ? params.seconds : '');
  }

  if (typeof value === 'string') {
    return value
      .replace('{seconds}', params.seconds ?? '')
      .replace('{count}', params.count ?? '');
  }

  return key;
};
