<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Login Page</title>
<link rel = "stylesheet" href = "login.css">
</head>
<body>
<input type = "hidden" id = "status" value = "<%= request.getAttribute("status") %>">
<div class = "container">
        <div class = "forms">
            <div class = "form login">
                <span class = "title">Login</span>
                <form action = "ToDoListLoginServlet" method = "post" >
                    <div class = "input-field">
                        <input type = "text" name = "username" id = "loginUsername" placeholder = "Enter your username" required>
                        <i class = "uil uil-envelope icon"></i>
                    </div>
                    <div class = "input-field">
                        <input type = "password" name = "password" id = "loginPassword" class = "password" placeholder = "Enter your password" required>
                        <i class = "uil uil-lock icon"></i>
                        <i class = "uil uil-eye-slash showHidePw"></i>
                    </div>
                    <div class = "checkbox-text">
                        <div class = "checkbox-content">
                            <input type = "checkbox" id = "logCheck">
                            <label for = "logCheck" class = "text">Remember me</label>
                        </div>
                        
                        <a href = "#" class = "text">Forgot password?</a>
                    </div>
                    <div class = "input-field button">
                        <input type = "submit" value = "Login" id = "loginButton">
                    </div>
                </form>
                <div class = "login-signup">
                    <span class = "text">Not a member?
                        <a href = " signup.jsp" class = "text signup-link">Signup Now</a>
                    </span>
                </div>
            </div>
            
        </div>
    </div>
    <script src="login.js"></script>
    <script type="text/javascript">
    
    var status = document.getElementById("status").value;
    if(status == "failed"){
    	swal("Sorry!","Wrong Username or Password","error");
    }
    
    if (status == "invalisusername"){
    	swal("Sorry!","Please Enter Username","error");
    }
    
    if (status == "invalidpassword"){
    	swal("Sorry!","Please Enter Password","error");
    }
    </script>
</body>
</html>