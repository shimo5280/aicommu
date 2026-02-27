const chatArea = document.getElementById("chatArea");
const btnYes = document.getElementById("btnYes");
const btnNo  = document.getElementById("btnNo");

// バブル（テキスト）
function addBubble(role, text) {
  const div = document.createElement("div");
  div.className = `bubble ${role}`;
  div.textContent = text;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight;
  return div;
}

// バブル（画像）
function addImageBubble(role, src) {
  const wrap = document.createElement("div");
  wrap.className = `bubble ${role}`;

  const img = document.createElement("img");
  img.src = src;
  img.alt = "demo";
  img.style.maxWidth = "280px";
  img.style.borderRadius = "12px";
  img.style.display = "block";

  wrap.appendChild(img);
  chatArea.appendChild(wrap);
  chatArea.scrollTop = chatArea.scrollHeight;
  return wrap;
}

// 初期メッセージ
addBubble("ai", "体験するならYesを押してね♪");

btnYes.addEventListener("click", () => {
  addBubble("ai", "OK。デモ画像を出すね。");
  // ★ここがStep1のゴール：デモ画像表示
  addImageBubble("ai", "/static/images/demo.png");
  addBubble("ai", "この画像、どんなふうに直してみたい？");
});

btnNo.addEventListener("click", () => {
  addBubble("ai", "またいつでも来てね。");
});