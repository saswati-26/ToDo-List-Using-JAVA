

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class ToDoListServlet
 */
@WebServlet("/Register")
public class ToDoListRegisterServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String uname = request.getParameter("name");
		String uemail = request.getParameter("email");
		String upwd = request.getParameter("pass");
		String ure_pwd = request.getParameter("re_pass");
		RequestDispatcher dispatcher = null;
		Connection con = null;
		
		if(uname == null || uname.equals("")) {
			request.setAttribute("status", "invalidusername");
			dispatcher = request.getRequestDispatcher("signup.jsp");
			dispatcher.forward(request, response);
		}
		
		if(uemail == null || uemail.equals("")) {
			request.setAttribute("status", "invaliduseremail");
			dispatcher = request.getRequestDispatcher("signup.jsp");
			dispatcher.forward(request, response);
		}		
		if(upwd == null || upwd.equals("")) {
			request.setAttribute("status", "invalidpassword");
			dispatcher = request.getRequestDispatcher("signup.jsp");
			dispatcher.forward(request, response);
		}
		else if(!upwd.equals(ure_pwd)) {
			request.setAttribute("status", "invalidconfirmpassword");
			dispatcher = request.getRequestDispatcher("signup.jsp");
			dispatcher.forward(request, response);
		}
		
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/todolist","root","da@2726");
			PreparedStatement pst = con.prepareStatement("insert into user(uname,uemail,upwd) values (?,?,?)");
			pst.setString(1, uname);
			pst.setString(2, uemail);
			pst.setString(3, upwd);
			
			int rowCount = pst.executeUpdate();
			
			dispatcher = request.getRequestDispatcher("signup.jsp");
			if(rowCount > 0) {
				System.out.println("Registered");
				request.setAttribute("status", "success");
			}
			else {
				request.setAttribute("status", "failed");
			}
			dispatcher.forward(request,response);
			
		}catch (Exception e) {
			e.printStackTrace();
		}finally {
			try {
				con.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}

}
