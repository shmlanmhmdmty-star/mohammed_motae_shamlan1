// local scope
// block scope 
// function scope
// java vs javascript
// install node.js
// using termenal test node.js 
// javasecript (nodejs) +html+css = fullstak devlopers 
// javasecript = auto update for browser or server
// Notifiaction 
// mack play programming


// // // --- var ---
var x = 10;
var x = 20;
x = 30;     // مسموح: تعديل القيمة
console.log(x);
document.write(x);

let y = 10;
// let y = 20; // Error! لا يمكن إعادة تعريف نفس الاسم في نفس النطاق
console.log(y);
// --- const ---
const z=200;
// z = 200;    // Error! لا يمكن تغيير قيمة الثابت
// const a;    // Error! يجب إعطاؤه قيمة فوراً عند التعريف


if (true)
     {
    var a = "var يتسرب لخارج الأقواس";
    let b = "let محمي داخل الأقواس";
    const c = "const محمي داخل الأقواس";
    console.log(b);
}

console.log(a); // يطبع: "var يتسرب لخارج الأقواس"
// console.log(b); // Uncaught ReferenceError: b is not defined
// console.log(c); // Uncaught ReferenceError: c is not defined

// const r=54;
// 1. الإسناد المباشر
let score = 100;
let namee = "أحمد";

// score += 50;  // تعادل: score = score + 50 (النتيجة: 150)
// score -= 20;  // تعادل: score = score - 20 (النتيجة: 130)
// score *= 2;   // تعادل: score = score * 2  (النتيجة: 260)

// إسناد الدمج مع النصوص
// let greeting = "مرحباً ";
// let ew = greeting += namee; // تعادل: greeting = greeting + namee -> "مرحباً أحمد"
// console.log(ew + score); 
// alert(ew + score)
// let userName = prompt("ما هو اسمك؟","اسمك");
// console.log("مرحباً " + userName);
// // عند استقبال أرقام، يجب تحويلها من نص إلى رقم باستخدام Number()
// let ageInput = prompt("كم عمرك؟");
// let age = Number(ageInput);
// let nextYearAge = age + 1;
// console.log("age",nextYearAge);
// alert("عمرك السنة القادمة سيكون: " + nextYearAge);

// const r=55;

// //-=-=================================================
// // حالة var
// console.log(x1); //  undefined
// // var x1=6;

// //-========================
// // حالة let و const
// // console.log(q); 
// let q = 20;

// //==================================================



document.write(".. يتم كتابة النص المراد طباعته هنا");
document.write("<h1> كتابة نص يقع عليه تأثير وسم من أوسمة ال html</h1>");
document.write("<h1 style='color:red'> css طباعة نص يقع عليه تأثير خصائص ال </h1>");
var name = "ali";
document.write("<br>");
// طباعة قيمة متغير يسبقه جملة نصية
document.write("welcome <br>");

std_namew = window.prompt("أدخل اسمك من فضلك", "اسمك");

//------ رسالة في نافذة منبثقة
alert(" ... أهلا بك في " + std_namew + " في موقعنا");

//----- صندوق كتابة في نافذة منبثقة
let city = window.prompt("أدخل اسم مدينتك من فضلك ؟ ");

//----------- TRUE OR FALSE رسالة مع التأكيد موافق او الغاء قيمة مرجعة --------- //
let con = window.confirm(" هل تريد حفظ البيانات؟");

if( con == true){
    console.log("true");
}else{
    console.log("false");
}
let numinteger = 25; //var numinteger = 25;
let numfloat = 2.4;
let std_name = "Ahmed";
let flag = true;
const dept_num = 20;
std_name = window.prompt("أدخل اسمك من فضلك", "اسمك");
document.write("<b> اسمك هو :" + std_name+ "</b>");






