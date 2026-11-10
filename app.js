'use strict';
const APP_URL = 'https://script.google.com/macros/s/AKfycbx5U_-XI9QGPpUWEFi2UekjsCcr8y5T-YbgtY0x_5SaiP5E9nOLoxtfwk98y05m7VK9/exec';
const frame = document.getElementById('app');
const status = document.getElementById('status');
const offline = document.getElementById('offline');
const install = document.getElementById('install');
document.getElementById('external').href = APP_URL;
function openApp() {
  const online = navigator.onLine;
  offline.hidden = online;
  frame.hidden = !online;
  status.textContent = online ? 'ต้องใช้อินเทอร์เน็ต • รอข้อความบันทึกสำเร็จจากระบบก่อนปิดแอป' : 'ออฟไลน์ • ยังไม่สามารถโหลดหรือบันทึกข้อมูลเช็คชื่อได้';
  if (online) frame.src = APP_URL;
}
document.getElementById('reload').addEventListener('click', openApp);
document.getElementById('retry').addEventListener('click', openApp);
window.addEventListener('online', openApp);
window.addEventListener('offline', () => {
  status.textContent = 'การเชื่อมต่อขาดหาย • กรุณาเชื่อมต่ออินเทอร์เน็ตและตรวจสอบว่าระบบบันทึกสำเร็จ';
});
let prompt;
window.addEventListener('beforeinstallprompt', event => {
  event.preventDefault(); prompt = event; install.hidden = false;
});
install.addEventListener('click', async () => {
  if (!prompt) return;
  await prompt.prompt(); await prompt.userChoice;
  prompt = null; install.hidden = true;
});
window.addEventListener('appinstalled', () => { install.hidden = true; prompt = null; });
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').catch(() => {
    status.textContent = 'เปิดระบบได้ แต่เตรียมการติดตั้งแอปไม่สำเร็จ กรุณาโหลดใหม่';
  });
}
openApp();
