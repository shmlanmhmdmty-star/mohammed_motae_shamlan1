
let password = "mohammed2026";
let password1 = window.prompt("أدخل كلمة المرور");

if (password1 == password) {
    alert("مرحباً بك يا محمد");

    let program;
    program = window.prompt("أدخل اسم لغة البرمجة لمعرفة استخدامها");

    switch (program) {
        case "JavaScript":
            document.writeln("JavaScript تستخدم في تطوير مواقع الويب");
            break;

        case "Python":
            document.writeln("Python تستخدم في الذكاء الاصطناعي وتحليل البيانات");
            break;

        case "C++":
            document.writeln("C++ تستخدم في البرمجة وتطوير الألعاب");
            break;

        case "Java":
            document.writeln("Java تستخدم في تطوير التطبيقات والأنظمة");
            break;

        case "PHP":
            document.writeln("PHP تستخدم في تطوير مواقع الويب");
            break;

        case "C#":
            document.writeln("C# تستخدم في تطوير التطبيقات والألعاب");
            break;

        default:
            document.writeln("لغة البرمجة غير موجودة ضمن الخيارات");
    }

    document.write("<br>");
}
else {
    alert("كلمة المرور غير صحيحة");
}

// طباعة الأرقام من 1 إلى 10
for (var i = 1; i <= 10; i++) {
    document.write(i + " ");
}

document.write("<br>");

// إيجاد مجموع الأرقام من 1 إلى عدد يدخله المستخدم
let sum = 0;
let num = Number(window.prompt("أدخل رقم لمعرفة مجموع الأرقام من 1 إلى الرقم"));

for (let i = 1; i <= num; i++) {
    sum += i;
}

alert("مجموع الأرقام من 1 إلى " + num + " هو: " + sum);

// طباعة الأرقام من 10 إلى 1
var i = 10;

while (i > 0) {
    document.write(i + " ");
    i--;
}

document.write("<br>");

// طباعة كلمة mohammed عشر مرات
i = 1;

do {
    document.write("mohammed ");
    i++;
} while (i <= 10);

document.write("<br>");
