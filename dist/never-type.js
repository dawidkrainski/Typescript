"use strict";
const showError = (message) => {
    throw new Error(message);
};
const showErrors = () => {
    while (true) {
        console.log('Error');
    }
};
const showLog = () => {
    console.log('Log');
};
if (showLog() === undefined) {
    console.log('jestem tutaj');
}
