// Function
// General function
function add(a,b){
    return a+b;
}
console.log(add(1,2)); // Output is 3

// Arrow function
const sub = (a,b) => a-b;
console.log(sub(2,2)); // Output is 0

let d = new Date();
console.log(`Today is the ${d.getDate()}th.`); // Output is only date
console.log(`It is ${d.getMonth() + 1}th.`); // Output is only Month
console.log(`It's ${d.getFullYear()}.`); // Output is only year

function getCurrentDateTime(options = {}) {
    // Default options
    const {
        locale = 'en-US', // Default to English (US)
        timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone // User's system timezone
    } = options;

    const now = new Date();

    // Format date components
    const dateOptions = {
        year: 'numeric',
        month: 'long', // Full month name (e.g., June)
        day: 'numeric',
        weekday: 'long', // Full weekday name (e.g., Wednesday)
    };

    // Format time components
    const timeOptions = {
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true, // 12-hour format with AM/PM
        timeZone,
    };

    // Get formatted date and time
    const formattedDate = now.toLocaleDateString(locale, dateOptions);
    const formattedTime = now.toLocaleTimeString(locale, timeOptions);
    const timeZoneName = now.toLocaleTimeString(locale, { timeZoneName: 'short' }).split(' ').pop();

    // Return formatted result
    return {
        date: formattedDate,
        time: formattedTime,
        timeZone: timeZoneName,
        rawDate: now // Include raw Date object for further use
    };
}

// Example usage
const current = getCurrentDateTime();
console.log(`Current Date: ${current.date}`);
console.log(`Current Time: ${current.time}`);
console.log(`Time Zone: ${current.timeZone}`);

// Example with a different locale and specific timezone
const currentInFrench = getCurrentDateTime({ locale: 'fr-FR', timeZone: 'Asia/Dhaka' });
console.log('\nIn French (Asia/Dhaka timezone):');
console.log(`Date: ${currentInFrench.date}`);
console.log(`Time: ${currentInFrench.time}`);
console.log(`Time Zone: ${currentInFrench.timeZone}`);
{
    // FD = Function Declaration
    
    // FE = Functions Expression
    let func = (txt,n) => {
        console.log(`${txt} ${n}`);
    }
    func(`Hi`,` I am Black.`);
    // iife = Immediately Invoked Function Expression
    (()=>{
        console.log(`Hi, I am black`);
    })();    
}
console.log(`\n`);
{
    let one = x => x;
    console.log(one(1));
    let two = (first,last) => (
        {firstName: first, lastName: last}
    )
    console.log(two("Black","Hole"));
}
console.log(`\n`);