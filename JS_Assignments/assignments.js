/* 1. We have an object storing salaries of our team
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
    }
    Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above. */
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}

console.log(sum);

/* 2. Create a function multiplyNumeric(obj) that multiplies all numeric properties of obj by 2
// before the call
let menu = {
width: 200,
height: 300,
title: "My menu"
};
multiplyNumeric(menu);
// after the call
menu = {
width: 400,
height: 600,
title: "My menu"
};
Please note that multiplyNumeric does not need to return anything. It should modify the object in-place */
function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] *= 2;
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);

console.log(menu);

/* 3. Write a function checkEmailId(str) that returns true if str contains '@' and ‘.’, otherwise false. Make sure
'@' must come before '.' and there must be some characters between '@' and '.'
The function must be case-insensitive: */
function checkEmailId(str) {
    str = str.toLowerCase();

    let atPosition = str.indexOf('@');
    let dotPositon = str.indexOf('.', atPosition);

    if(atPosition > -1 && dotPositon > atPosition + 1) {
        return true;
    }
    return false;
}

console.log(checkEmailId("san123@gmail.com"));
console.log(checkEmailId("san123@.com"));
console.log(checkEmailId("san123.gmail@com"));

/* 4. Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength
– replaces the end of str with the ellipsis character "...", to make its length equal to maxlength.
The result of the function should be the truncated (if needed) string.
truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to te..."
truncate("Hi everyone!", 20) = "Hi everyone!" */
function truncate(str, maxlength) {
    if(str.length > maxlength) {
        return str.slice(0, maxlength - 3) + "...";
    }
    return str;
}

console.log(truncate("replaces the end of str with the ellipsis character", 20));
console.log(truncate("Hello World", 20));

/* 5. Let’s try 5 array operations.
Create an array styles with items “James” and “Brennie”.
Append “Robert” to the end.
Replace the value in the middle by “Calvin”. Your code for finding the middle value should work for any
arrays with odd length.
Remove the first value of the array and show it.
Prepend Rose and Regal to the array.
James, Brennie
James, Brennie, Robert
James, Calvin, Robert
Calvin, Robert
Rose, Regal, Calvin, Robert     */
let styles = ["James", "Brennie"];
console.log(styles);

styles.push("Robert");
console.log(styles);

let middleIndex = Math.floor(styles.length / 2);
styles[middleIndex] = "Calvin";
console.log(styles);

let firstValue = styles.shift();
console.log(firstValue);
console.log(styles);

styles.unshift("Rose", "Regal");
console.log(styles);