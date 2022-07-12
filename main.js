// At the beginning ser the dates to the current time
let today = new Date();
document.getElementById("year").defaultValue = today.getUTCFullYear() + 359;
document.getElementById("month").value = today.getUTCMonth()+1;
document.getElementById("day").defaultValue = today.getUTCDate();
document.getElementById("hour").defaultValue = today.getUTCHours();
document.getElementById("minute").defaultValue = today.getUTCMinutes();
document.getElementById("second").defaultValue = today.getUTCSeconds();

function calc() {
    let year = parseInt(document.querySelector("#year").value);
    let month = parseInt(document.querySelector("#month").value);
    let day = parseInt(document.querySelector("#day").value);
    let hour = parseInt(document.querySelector("#hour").value);
    let minute = parseInt(document.querySelector("#minute").value);
    let second = parseInt(document.querySelector("#second").value);

    // Time Offset Configuration
    //let START_YEAR_REAL = 2022
    //let START_YEAR_RP = 2380

    // Stardate Configuration.
    let STARDATE_STANDARD_YEAR = 2323
    let STARDATE_START_YEAR = 0
    let MONTHTABLE = [
        0,
        31,
        59,
        90,
        120,
        151,
        181,
        212,
        243,
        273,
        304,
        334,
    ]

    // Check if current year is a leap year
    let y = year //+ START_YEAR_RP - START_YEAR_REAL
    let n
    if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
        n = 366
    } else {
        n = 365
    }
    let monthOffset = MONTHTABLE[month]
    let stardate = STARDATE_START_YEAR + (1000 * (y - STARDATE_STANDARD_YEAR)) + ((1000 / n) * (
        monthOffset +
        (day - 1) +
        (hour / 24) +
        (minute / (24 * 60) +
            (second / (24 * 3600)))
    ))
    stardate = stardate.toFixed(2)
    message = "Calculated stardate: " + stardate
    document.querySelector("#output").innerHTML = message;
}