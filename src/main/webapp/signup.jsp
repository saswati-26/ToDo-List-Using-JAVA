<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>SignUp Page</title>
<link rel = "stylesheet" href = "login.css">
</head>
<body>

<input type = "hidden" id = "status" value = "<%= request.getAttribute("status") %>">

<div class = "container">
        <div class = "forms">
            <!-- Registration Form -->
            <div class = "form login">
                <span class = "title">Registration</span>
                <form action = "Register" method="post">
                    <div class = "input-field">
                        <input type = "text" name = "name" id = "signupUsername" placeholder = "Enter your name" required>
                        <i class = "uil uil-user"></i>
                    </div>
                    <div class = "input-field">
                        <input type = "text" name = "email" placeholder = "Enter your email" required>
                        <i class = "uil uil-envelope icon"></i>
                    </div>
                    <div class = "input-field">
                        <input type = "password" name = "pass" class = "password" placeholder = "Create a password" required>
                        <i class = "uil uil-lock icon"></i>
                    </div>
                    <div class = "input-field">
                        <input type = "password" name = "re_pass" class = "password" placeholder = "Confirm a password" required>
                        <i class = "uil uil-lock icon"></i>
                        <i class = "uil uil-eye-slash showHidePw"></i>
                    </div>
                    <div class = "checkbox-text">
                        <div class = "checkbox-content">
                            <input type = "checkbox" id = "termCon">
                            <label for = "termCon" class = "text" >I accepted all terms and conditions</label>
                        </div>
                    </div>
                    <div class="input-field button">
                        <input type = "submit" value = "Signup" id = "signupButton">
                    </div>
                </form>
                <div class = "login-signup">
                    <span class = "text">Already a member?
                        <a href = "login.jsp" class = "text login-link">Login Now</a>
                    </span>
                </div>
            </div>
        </div>
    </div>
    <script type="login.js"></script>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
	<link rel="stylesheet" href="alert/dist/sweetalert.css"> 
	
	<script type="text/javascript">
		var status = document.getElementById("status").value;
		if (status == "success"){
			swal("Congrats!", "Account Created Successfully", "success");
		}
		if (status == "invalisusername"){
	    	swal("Sorry!","Please Enter Username","error");
	    }
		if (status == "invalisuseremail"){
	    	swal("Sorry!","Please Enter Email","error");
	    }
	    if (status == "invalidpassword"){
	    	swal("Sorry!","Please Enter Password","error");
	    }
	    if (status == "invalidconfirmpassword"){
	    	swal("Sorry!","Password do not match","error");
	    }
	</script>
</body>
</html>