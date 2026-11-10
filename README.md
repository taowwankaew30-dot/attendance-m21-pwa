# เช็คเข้าแถว ม.2/1 — PWA

แอปครอบเว็บ Google Apps Script เดิม เชื่อม Google Sheets เดิม ไม่คัดลอกข้อมูลนักเรียนลง repository

## เปิดใช้งาน GitHub Pages
Settings → Pages → Deploy from a branch → main → / (root) → Save
รอ Pages deploy สำเร็จ แล้วเปิดลิงก์ HTTPS ของเว็บไซต์

## ติดตั้ง
Android / Chrome: กดติดตั้งแอป หรือเลือกติดตั้งจากเมนูเบราว์เซอร์
iPhone / Safari: แชร์ → เพิ่มไปยังหน้าจอโฮม

## ข้อจำกัด
การเช็คชื่อและบันทึกต้องใช้อินเทอร์เน็ต รอระบบเดิมแจ้งบันทึกสำเร็จก่อนปิด
Service worker เก็บเฉพาะไฟล์เปลือกแอป ไม่เก็บข้อมูลเช็คชื่อหรือคำตอบจาก Google
หาก iframe ถูกปิดกั้น ให้กดเปิดเว็บเดิม เจ้าของ Apps Script อาจปรับ HtmlOutput ใน doGet ด้วย .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL) แล้ว deploy ใหม่ หลังพิจารณาสิทธิ์การฝังเว็บ
Google login บางรูปแบบต้องเปิดในแท็บหลัก
สิทธิ์เข้าใช้ข้อมูลขึ้นกับ Apps Script เดิม เปลือกแอปไม่ได้เพิ่มระบบยืนยันตัวตน

## ตรวจสอบก่อนใช้งานจริง
เปิด URL เว็บไซต์ ตรวจว่า iframe แสดงระบบเดิมและติดตั้งได้ ทดสอบบันทึกด้วยข้อมูลที่เจ้าของอนุญาต แล้วตรวจผลใน Google Sheets

ไม่มีขั้นตอน build และไม่มี dependencies ไฟล์เว็บไซต์อยู่ที่ root ของ repository
