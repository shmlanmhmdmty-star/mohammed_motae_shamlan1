<?php

echo "اسم السيرفر: " . ($_SERVER['SERVER_SOFTWARE'] ?? "غير متاح") . "<br>";
echo "رابط أو اسم النطاق الحالي: " . ($_SERVER['HTTP_HOST'] ?? "غير متاح") . "<br>";
echo "مسار الملف الحالي على السيرفر: " . ($_SERVER['PHP_SELF'] ?? "غير متاح") . "<br>";
echo "إصدار PHP: " . phpversion();

$courseName = "أساسيات الويب";

echo "<br>" . $courseName;

?>