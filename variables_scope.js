
 // ===== المتغيرات var و let و const =====

var x = 10;
var x = 20;
x = 30;

console.log("قيمة x:", x);
document.write("قيمة x: " + x + "<br>");

let y = 10;
console.log("قيمة y:", y);

const z = 200;
console.log("قيمة z:", z);


// ===== Scope (النطاق) =====

if (true) {
    var a = "var خارج الأقواس";
    let b = "let داخل الأقواس";
    const c = "const داخل الأقواس";

    console.log(b);
    console.log(c);
}

console.log(a);


// ===== الإسناد المباشر =====

let score = 100;
let studentName = "Ahmed";

score += 50;
score -= 20;
score *= 2;

let greeting = "Welcome ";
greeting += studentName;

console.log(greeting);
console.log("Score:", score);


// ===== إدخال اسم المستخدم =====

let userName = window.prompt("أدخل اسمك من فضلك:", "اسمك");

alert("أهلاً بك " + userName);

console.log("اسم المستخدم:", userName);


// ===== إدخال العمر وتحويله إلى رقم =====

let ageInput = window.prompt("كم عمرك؟");
let age = Number(ageInput);
let nextYearAge = age + 1;

console.log("عمرك السنة القادمة:", nextYearAge);

alert("عمرك السنة القادمة سيكون: " + nextYearAge);


// ===== طباعة باستخدام document.write =====

document.write("<br>");
document.write("يتم كتابة النص المراد طباعته هنا");
document.write("<br>");

document.write("<h1>هذا نص باستخدام HTML</h1>");

document.write("<h1 style='color:red'>هذا نص باستخدام CSS</h1>");


// ===== إدخال المدينة =====

let city = window.prompt("أدخل اسم مدينتك من فضلك؟");

document.write("<br>");
document.write("مدينتك هي: " + city);


// ===== رسالة تأكيد confirm =====

let confirmation = window.confirm("هل تريد حفظ البيانات؟");

if (confirmation == true) {
    console.log("true");
} else {
    console.log("false");
}


// ===== أنواع المتغيرات =====

let numInteger = 25;
let numFloat = 2.4;
let studentName2 = "Ahmed";
let flag = true;
const departmentNumber = 20;

console.log("Integer:", numInteger);
console.log("Float:", numFloat);
console.log("Name:", studentName2);
console.log("Flag:", flag);
console.log("Department:", departmentNumber);


// ===== عرض اسم الطالب =====

studentName2 = window.prompt("أدخل اسم الطالب:");

document.write("<br>");
document.write("<b>اسم الطالب هو: " + studentName2 + "</b>");
