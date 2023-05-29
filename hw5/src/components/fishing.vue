<template>
  <a href="https://www.facebook.com/"><img src="dF5SId3UHWd.svg" style="height: 100px"></a>
  <div class="Login">
    <div id="loginForm">
      <div id="head">
        <p>登入 Facebook</p>
      </div>
      <form id="login">
        <div id="account">
          <input type="text" class="form-control" name="userid" placeholder="電子郵件地址或手機號碼" autocomplete="phone-number" required pattern="^[A-Za-z][A-Za-z0-9]{1,11}$" maxlength="12">
        </div>
        <div id="password">
          <input type="password" spellcheck="false" class="form-control" name="password" placeholder="密碼" autocomplete="current-password" required maxlength="22">
          <span onclick="passwordChangeType()">
                    <i id="eye" class="material-icons">visibility</i>
                </span>
        </div>
        <div id="option">
          <ul class="check-box"></ul>
          <div id="login-box"><a1 id="btn-login" href="https://www.facebook.com/">登入</a1></div>
        </div>
      </form>

      <div class="forget-account">
        <a1 href="https://www.facebook.com/">忘記帳號？</a1>
      </div>
      <div class="other-option">
        <hr>
        <div class="or">或</div>
        <hr>
      </div>
      <div>
        <a1 id="create" href="https://www.facebook.com/">建立新帳號</a1>
      </div>
    </div>
    <div id="bottom">
      <p1>
        中文(台灣)  English (US)  Tiếng Việt  Bahasa Indonesia  ภาษาไทย  日本語  Español  Português (Brasil)  Français (France)  Deutsch  Italiano
        <br>
        註冊  登入  Messenger  Facebook Lite  Watch  地標  遊戲  Marketplace  Meta Pay  Meta Store  Meta Quest  Instagram  Bulletin  募款活動
        <br>
        服務 投票資訊中心  《隱私政策》  隱私中心  社團  關於  刊登  廣告  建立粉絲專頁  開發人員  工作機會  CookieAd Choices  使用條款
        <br>
        使用說明  聯絡人上傳和非用戶  設定活動紀錄
        <br>
        Meta © 2023
      </p1>
    </div>
  </div>
</template>

<script>
export default {
  passwordChangeType() {
    const passwordInput = document.getElementsByName("password")[0];
    const eyeIcon = document.getElementById("eye");

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      eyeIcon.textContent = "visibility";
    } else {
      passwordInput.type = "password";
      eyeIcon.textContent = "visibility_off";
    }
  }
}
</script>

<style scoped>

div {
  margin: 0;
  padding: 0;
}

a {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
/* 忘記帳號的超連結顏色*/
a1 {
  color: #2894FF;
  text-decoration: none;
}
/*登入表格的位置*/
.Login {
  display: flex;
  height: calc(100vh - 155px);
  flex-wrap: wrap;
}
/*登陸表格的寬度、顏色、四角設為圓形使其更好看 */
#loginForm {
  width: 500px;
  margin: 4rem auto auto auto;
  padding: 40px 24px;
  background-color: #FFF;
  border-radius: 4px;
  box-sizing: border-box;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
}
/*標題圖片的位置及字體大小*/
#head {
  display: flex;
  margin: 0 auto 6px auto;
  justify-content: center;
  font-size: 30px;
}
/*帳號密碼格子的大小及位置*/
.form-control {
  margin: 8px 0;
  border: 1px solid #D9D9D9;
  border-radius: 5px;
  padding: 18px;
  box-sizing: border-box;
  width: 100%;
  font-size: 18px;
}

.form-control {
  margin-top: 0;
}
/*點擊帳號密碼格子的時候 邊框會變成藍色用來提示目前動作*/
.form-control:focus {
  outline: none;
  border-color: #117e96;
}

::placeholder {
  color: #B3B3B3;
}
/*密碼格旁邊的小眼睛位置及大小和顏色*/
#password {
  position: relative;
}

#password span {
  position: absolute;
  top: 5px;
  right: 1px;
  width: 50px;
  height: 50px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#password span i {
  color: rgba(76, 87, 102, 0.6);
  font-size: 25px;
}
/*各類按鈕寬度設定為100%，使其接近表格的大小*/
#option, #login-box, .forget-account, #bottom{
  display: flex;
  width: 100%;
}
/*登入按鈕的顏色大小 及裡面文字的顏色大小*/
#btn-login {
  display: inline-flex;
  height: 40px;
  margin: 20px 0 20px 0;
  border-radius: 6px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  background-color: #0080FF;
  color: #FFF;
  width: 100%;
  font-size: 20px;
  letter-spacing: 1px;
  cursor: pointer;
  text-align: center;
}
/*建立新帳號的顏色大小 及裡面文字的顏色大小*/
#create {
  display: flex;
  height: 40px;
  margin: 20px auto 0 auto;
  border-radius: 6px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  background-color: #00A600;
  color: #FFF;
  width: 30%;
  font-size: 20px;
  letter-spacing: 1px;
  cursor: pointer;
}
/*忘記密碼的位置及字體大小*/
.forget-account {
  margin: 10px auto auto auto;
  font-size: 15px;
  justify-content: center;
}

.other-option {
  display: flex;
  margin: 36px 0 16px 0;
}
/*"或"旁邊的分隔線*/
hr {
  height: 1px;
  border: none;
  background-color: #D9D9D0;
  flex: 1 1;
}
.or {
  color: #6C6C6C;
}
/*網頁底部的範圍及顏色*/
#bottom {
  margin: 0 0 0 0;
  justify-content: center;
  text-align: center;
  font-size: 12px;
  background-color: #F0F0F0;
}
/*文字的大小及顏色*/
p {
  margin-top: 15px;
  color: #464646;
}

p1 {
  margin-top: 15px;
  color: #8E8E8E;
}
</style>