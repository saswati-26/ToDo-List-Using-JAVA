document.addEventListener("DOMContentLoaded",function(){
	const container = document.querySelector(".container");
	const pwShowHide = document.querySelectorAll(".showHidePw");
	const pwFields = document.querySelectorAll(".password");
	const signUp = document.querySelector(".signup-link");
	const login = document.querySelector(".login-link");

    //   js code to show/hide password and change icon
    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type ==="password"){
                    pwField.type = "text";
                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
                }else{
                    pwField.type = "password";
                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            }) 
        })
    })
    // js code to appear signup and login form
    signUp.addEventListener("click", ()=>{
        container.classList.add("active");
    });
    login.addEventListener("click", () => {
			container.classList.remove("active");
		});

    var users = [];
    function addUser(username , password){
		users.push({username: username, password: password});
	}
	//while (true){
		//addUser("user","password");
	//}
	
	//function to handle login
	document.getElementById("loginButton").addEventListener("click", function(){
		var username = document.getElementById("loginUsername").value;
		var password = document.getElementById("password").value;
		
		var user = users.find(function(user){
			return user.username === username && user.password === password;
		});
		if(user){
			alert("Login Successful!");
		}
		else{
			alert("Login failed. Invalid username or password.");
		}
	});
	
	//function to handle signup
	document.getElementById("signupButton").addEventListener("click",function(){
		var username = document.getElementById("signupUsername").value;
		var password = document.getElementById("loginPassword").value;
		
		if(users.some(function(user){
			return user.username === username;
		})){
			alert("SignUp failed. Username already exists.");
		}
		else{
			users.push({username:username, password:password});
			alert("SignUp Successsful!");
		}
	})
})/**
 * 
 */