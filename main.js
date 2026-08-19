// التبديل بين "تسجيل الدخول" و"حساب جديد"
function showTab(which, el) {
  document.getElementById('loginForm').classList.toggle('hidden', which !== 'login');
  document.getElementById('signupForm').classList.toggle('hidden', which !== 'signup');
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
}

// مؤقتًا — لحد ما نوصّل Firebase
document.getElementById('loginForm').addEventListener('submit', e => {
  e.preventDefault();
  alert('هنوصّل الدخول بـ Firebase في الخطوة الجاية 😉');
});
document.getElementById('signupForm').addEventListener('submit', e => {
  e.preventDefault();
  alert('هنوصّل إنشاء الحساب بـ Firebase في الخطوة الجاية 😉');
});