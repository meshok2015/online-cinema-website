var loginButton = document.getElementById("login-button");
var authModal = document.getElementById("auth-modal");
var closeButton = document.getElementById("auth-close-button");
            
loginButton.onclick = function() {
    authModal.style.display = "flex";
};
            
closeButton.onclick = function() {
    authModal.style.display = "none";
};
            

