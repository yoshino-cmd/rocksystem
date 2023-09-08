// JavaScriptコード
// ウェブページの読み込みが完了した時の処理
document.addEventListener("DOMContentLoaded", function() {
    // 特定の要素を取得したり、イベントリスナーを設定したりする処理
  });

document.addEventListener("DOMContentLoaded", function() {
const profileIcon = document.querySelector(".profile-icon");

// アイコンがクリックされたときの処理
profileIcon.addEventListener("click", function() {
    // プロフィール画面への遷移
    window.location.href = "profile.html"; // プロフィール画面のURLに変更する必要があります
});
});

 // ボタンがクリックされたときの処理
 document.querySelector(".edit-button").addEventListener("click", function() {
    window.location.href = "edit-profile.html"; // 編集画面のURLに変更する必要があります
  });

  document.addEventListener("DOMContentLoaded", function() {
    const editForm = document.querySelector("form");

    editForm.addEventListener("submit", function(event) {
      event.preventDefault();

      // フォームデータを収集してAPIに送信する処理
      // バックエンドでプロフィール情報を更新するためのAPIを呼び出す

      // 更新が成功したら、プロフィール画面にリダイレクトする
      window.location.href = "profile.html"; // プロフィール画面のURLに変更する必要があります
    });
  });

// URLパラメータからプロフィール情報を取得して表示する
const urlParams = new URLSearchParams(window.location.search);
const editedUsername = urlParams.get("username");
const editedEmail = urlParams.get("email");

// 取得したデータをプロフィール画面に反映
document.getElementById("username").textContent = editedUsername;
document.getElementById("email").textContent = editedEmail;

document.addEventListener("DOMContentLoaded", function() {
    const saveButton = document.getElementById("save-button");
    const editForm = document.getElementById("edit-form");

    saveButton.addEventListener("click", function() {
      const formData = new FormData(editForm);
      const queryString = new URLSearchParams(formData).toString();
      window.location.href = "profile.html?" + queryString;
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const postButton = document.querySelector(".post-button");
  
    postButton.addEventListener("click", function() {
      window.location.href = "post.html"; // リダイレクト先のURLを指定
    });
  });
  
/* post.htmlについて */
  document.addEventListener("DOMContentLoaded", function() {
    const postForm = document.getElementById("post-form");
    
    postForm.addEventListener("submit", function(event) {
      event.preventDefault();
      
      const postText = document.getElementById("post-text").value;
      if (postText.trim() !== "") {
        // ここで投稿処理を実行
        console.log("投稿しました:", postText);
        
        // フォームをリセット
        postForm.reset();
      } else {
        alert("投稿内容を入力してください。");
      }
    });
  });
  

  document.addEventListener("DOMContentLoaded", function() {
    // JavaScript interactions here
    
    // Example: Change text color when a list item is clicked
    const listItems = document.querySelectorAll("li");
    listItems.forEach(item => {
      item.addEventListener("click", function() {
        this.style.color = "red";
      });
    });
  });
  
  const loginButton = document.getElementById('login-button');
  loginButton.addEventListener('click', function() {
    window.location.href = 'login.html';
  });

