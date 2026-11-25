function alettt(d) {
    alert(d);
}

function aaaa(){
    alert("connectted")
}

function promett()
{
    const display= document.getElementById('display');
    const valueprom=window.prompt();
    display.value += valueprom;
}
const display = document.getElementById('display');

//  دالة إضافة القيم مع التأكيد عند اختيار عملية حسابية
function appendValue(value) {

    const operators = ['+', '-', '*', '/'];

    // إذا كان المخرج أحد العمليات الحسابية
    if (operators.includes(value)) {
        // const isConfirmed = confirm('هل تريد إجراء العملية الحسابية؟');

        // if (!isConfirmed) {
        //     return;
        // }
    }

    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

// 3. دالة حساب النتيجة
function calculateResult() {
    if (!display.value) return; // إذا كانت الشاشة فارغة، لا نفعل شيئًا
    const confrimalert = confirm('هل تريد حساب النتيجة؟');
    if (confrimalert) {
        try {
            const result = eval(display.value); // استخدام eval لحساب النتيجة من المعادلة النصية

            // إظهار النتيجة في نافذة تنبيه (Alert)
            alert('النتيجة هي: ' + result);

            // عرض النتيجة على شاشة الآلة الحاسبة
            display.value = result;
        } catch (error) {
            alert('حدث خطأ! المعادلة غير صحيحة.');
            display.value = 'خطأ';
        }
    }
}

// 4. دالة الإدخال اليدوي عبر لوحة المفاتيح
function handleKeyPress(event) {
    const key = event.key;

    // عند الضغط على Enter
    if (key === 'Enter') {
        // event.preventDefault(); // منع السلوك الافتراضي (مثل إرسال النموذج)
        calculateResult(); // استدعاء دالة حساب النتيجة
        return;
    }

    // السماح بأسهم التوجيه وزر المسح
    const allowedControls = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'];
    if (allowedControls.includes(key)) {
        return;
    }

    // إذا قام المستخدم بكتابة إحدى العمليات الحسابية يدوياً
    const operators = ['+', '-', '*', '/'];
    if (operators.includes(key)) {

        const isConfirmed = confirm('هل تريد إجراء العملية الحسابية؟');
        if (isConfirmed) {
            display.value += key;   
        }
        return;
    }

    // السماح بالأرقام والنقطة العشرية فقط
    const allowedNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
    if (!allowedNumbers.includes(key)) {
        event.preventDefault(); // منع أي إدخال 
    }
}