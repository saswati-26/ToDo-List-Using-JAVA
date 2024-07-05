<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%
if(session.getAttribute("name") == null){
	response.sendRedirect("login.jsp");
}
else
{
	String name=(String)session.getAttribute("name");
}
%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>To Do List</title>
<link 
        href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        integrity = "sha512-1sCRPdkRXhBV2PBLUdRb4tMglw2YP137qatUFeS7zlBy7jJI8Lf4VHWNfZZfpXtYSLу85g
        crossorigin=anonymous"
        referrerpolicy = "no-referrer"
        rel="stylesheet"/>
<link rel = "stylesheet" href = "index.css">
</head>
<body onload = "time()">
<div class = "todo-container">
            <div class = "date-hour">
                <p id = "date">Date</p>
                <p id = "hour">Time</p>
            </div>
            <header>
                <h1>To Do List</h1>
            </header>
            <!--Add to do-->
            <form action = "" id = "todo-form">
                <p>Add your Task here</p>
                <div class = "form-control">
                    <input type = "text" id = "todo-input" placeholder = "Type your task here">
                    <button type = "submit">
                        <i class = "fa fa-plus-square"  style = "font-size: 20px;"></i>
                    </button>
                </div>
            </form>
            <!--Edit to do-->
            <form action = "" id = "edit-form" class = "hide">
                <p>Edit your Task</p>
                <div class = "form-control">
                    <input type = "text" id = "edit-input" placeholder = "Type your task here">
                    <button class = "submit">
                        <i class = "fa-solid fa-check-square"  style = "font-size: 20px;"></i>
                    </button>
                </div>
                <button type = "button" id = "cancel-edit-btn">Cancel </button>
            </form>
            <!--Display todo list-->
            <div class = "todo-list" id = "todo-list">
                <div class = "todo">
                    <h3>Some default Task</h3>
                    <button class = "finished-todo" >
                        <i class = "fa-solid fa-check"></i>
                    </button>
                    <button class = "edit-todo">
                        <i class = "fa-solid fa-pen"></i>
                    </button>
                    <button class = "remove-todo">
                        <i class = "fa-solid fa-xmark"></i>
                    </button>
                </div>
            </div>
        </div>
        <script src="index.js" defer></script>
</body>
</html>