//-------------- الدوال function--
function square() {
    let x = 5;
    let s = gets(x);
    var ee = document.getElementById("btn");
    ee.innerText = s; // استبدال المحتوى او نستخدم ee.textContent


    return s; // ارجاع القيمة الى الداله التي استدعته لكي نستطيع استدعاء الناتج في اي داره اخرى 
    // document.writeln(s); // سيضهر لنا صفحة جديده 
}
function gets(y) {
    return y * y;
}
// square(); // استدعاء الدالة اذا اردنا الطباعه بشكل مباشر بدون ربط الداله باي زر
document.write("<br/>");


// دالة إظهار حاوية الحلويات
function showMenu() {
    let menu = document.getElementById("sweetsContainer");
    menu.style.display = "block"; // تغيير العرض من none إلى block لإظهارها
    menu.style.background= "red";
}

// دالة إخفاء حاوية الحلويات
function hideMenu() {
    let menu = document.getElementById("sweetsContainer");
    menu.style.display = "none"; // إرجاع العرض إلى none لإخفائها
}

// دالة إظهار التاريخ والوقت الحالي
function showDate() {
    date = document.getElementById("btn2");
    let currentDate = new Date();
    date.innerText = currentDate.toString();

}

document.write("<br/>");
//    خاصية إنشاء عناصر جديدة وإضافتها للصفحة
function addNewElement() {
    let box = document.getElementById("myBox");
    // أ) إنشاء عنصر جديد من نوع فقرة <p>
    let newP = document.createElement("p");
    let result= square();
    // ب) إضافة نص بداخله
    newP.textContent = "مربع العدد هو " +result;
    newP.style.color = "#1a1a1a";
    newP.style.border = "3px solid #ccc";
    newP.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";

    // ج) إضافته كابن داخل الحاوية الموجودة مسبقاً
    box.appendChild(newP);
}
//--Array المصفوفات------
var student = new Array("Ahmed", "khalid", "Mohammed");
for (var k = 0; k < student.length; k++) {
    document.write(student[k] + "<br/>");
}

//---------
var info = [1, "Ahmed", 24, "yemen"];
for (let i = 0; i < info.length; i++) {
    document.write(info[i] + "\t");
}
document.write("<br/>");

//-----
var names = []; //new Array(3)
names[0] = "Ahmed";
names[1] = "Saleh";
names[2] = "Khalid";

for (i = 0; i < names.length; i++) {
    document.write(names[i] + "\t");
}
document.write("<br/>");

// حذف آخر عنصر في المصفوفة
names.pop();

// لإضافة عنصر أو أكثر الى نهاية المصفوفة
names.push("Sami", "Hassan");
for (i = 0; i < names.length; i++) {
    document.write(names[i] + "\t");
}
document.write("<br/>");

// حذف عنصر من بداية المصفوفة أي العنصر في الموقع الأول للمصفوفة
names.shift();

// لإضافة عنصر أو أكثر من بداية المصفوفة
names.unshift("Abdullah");
for (i = 0; i < names.length; i++) {
    document.write(names[i] + "\t");
}
document.write("<br/>");

for (i = 0; i < names.length; i++) {
    document.write(names[i] + "\t");
}
document.write("<br/>");

// عكس عناصر المصفوفة
names.reverse();
for (i = 0; i < names.length; i++) {
    document.write(names[i] + "\t");
}
document.write("<br/>");

// تعريف مصفوفة تحتوي على عدة مصفوفات (المصفوفات الثنائية أو متعددة الأبعاد)-------//
let arr = [[1, 3, 5, 7], [9, 11, 13, 15], [17, 19, 21, 23]];
for (i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        document.write(arr[i][j] + " ");
    }
    document.write("<br/>");
}
