// Script to reverse user-inputted string

const input = document.querySelector('input');
const reversed = document.querySelector('#reversed');
const btn = document.querySelector('.copy');
const copiedMsg = document.querySelector('#copied');

// Detect change in input and update reversed string whenever inputted string is modified
input.addEventListener('input', () => {
    let string = input.value;
    let length = string.length;
    let reversedStr = '';

    for (i = length - 1; i >= 0; i--) { // String/array indexing begins at 0, hence (length - 1) and (>= 0)
        reversedStr += string[i];
    }

    reversed.textContent = reversedStr; // Display reversed string in the <p> tag created for it
})

btn.addEventListener('click', () => {
    let string = reversed.textContent;
    let length = string.length;

    // Only copy if reversed string exists/isn't empty
    if (length > 0) {
        // Copy the reversed string to clipboard
        navigator.clipboard.writeText(string).then(() => {
            // If clipboard write succeeds:
            copiedMsg.style.color = '#006600';
            copiedMsg.textContent = 'Copied!';

            // Clear the message after 1500ms to visibly re-notify user of copy success with other attempts
            setTimeout(() => copiedMsg.textContent = '', 1500);
        }, () => {
            // In case of failed clipboard write
            copiedMsg.style.color = '#e60000';
            copiedMsg.textContent = 'Hmm, looks like your browser doesn\'t support the Clipboard API, which is required for this button to work.';
        });

    } else {
        // If no text is available to copy, let the user know
        copiedMsg.style.color = '#e60000';
        copiedMsg.textContent = 'Type some text to reverse first!'
    }
})
