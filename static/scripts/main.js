function copyToClipboard(button) {
    let str = button.nextElementSibling.innerText;
    const el = document.createElement('textarea');  // Create a <textarea> element
    el.value = str;                                 // Set its value to the string that you want copied
    el.setAttribute('readonly', '');                // Make it readonly to be tamper-proof
    el.style.position = 'absolute';
    el.style.left = '-9999px';                      // Move outside the screen to make it invisible
    document.body.appendChild(el);                  // Append the <textarea> element to the HTML document
    const selected =
        document.getSelection().rangeCount > 0        // Check if there is any content selected previously
            ? document.getSelection().getRangeAt(0)     // Store selection if found
            : false;                                    // Mark as false to know no selection existed before
    el.select();                                    // Select the <textarea> content
    document.execCommand('copy');                   // Copy - only works as a result of a user action (e.g. click events)
    document.body.removeChild(el);                  // Remove the <textarea> element
    if (selected) {                                 // If a selection existed before copying
        document.getSelection().removeAllRanges();    // Unselect everything on the HTML document
        document.getSelection().addRange(selected);   // Restore the original selection
    }
    const notification = document.getElementById("notification");
    notification.classList.add("active");
    setTimeout(() => {
        notification.classList.remove("active");
    }, 750);
}

function onChangeMode(el) {
    if(el.checked !== true) {
        document.body.classList.remove("dark");
        localStorage.setItem("darkmode", 0);
    } else {
        document.body.classList.add("dark");
        localStorage.setItem("darkmode", 1);
    }
}

function onChangeSplit(el) {
    if(el.checked !== true) {
        document.body.classList.remove("split");
        localStorage.setItem("split", 0);
    } else {
        document.body.classList.add("split");
        localStorage.setItem("split", 1);
    }
}