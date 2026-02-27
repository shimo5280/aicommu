const form = document.getElementById("contactForm");
const result = document.getElementById("resultMsg");

form.addEventListener("submit", function(e){
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    type: document.getElementById("type").value,
    message: document.getElementById("message").value
  };

  console.log("送信内容:", data);

  // 今は仮成功表示
  result.textContent = "送信ありがとうございました。";

  form.reset();
});