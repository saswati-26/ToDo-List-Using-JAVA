

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;



@WebServlet("/ToDoListLoginServlet")
public class ToDoListLoginServlet extends HttpServlet
{
	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
		String url="jdbc:mysql://localhost/todolist";
		String cname="root";
		String pass="da@2726";
        HttpSession session=request.getSession();
        int l=0;
        try {
        	Class.forName("com.mysql.cj.jdbc.Driver");
        	Connection con = DriverManager.getConnection(url,cname,pass);
            String n=request.getParameter("username");
            String p=request.getParameter("password");
        	System.out.println(n);
            System.out.println(p);

            
    		Statement st = con.createStatement();
            ResultSet rs = st.executeQuery("select * from user");
            while(rs.next())
            {
            	String un=rs.getString("uname");
                String pp=rs.getString("upwd");
                
                
                
                if(p.equals(pp)&&n.equals(un))
                {
                	l=0;
                    session.setAttribute("name",rs.getString("uname"));
                    session.setAttribute("password",rs.getString("upwd"));
                    
                    //session.setAttribute("rollno",rs.getString("SRoll"));
                    //session.setAttribute("bra",rs.getString("SBranch"));
                    
                    //session.setAttribute("num",rs.getString("SNum"));
                    //session.setAttribute("mail",rs.getString("SMail"));
//                    session.removeAttribute("error");
                    
                	
                	System.out.println("Matched");
                	String name=rs.getString("uname");
        		    session.setAttribute("username",name);
        		    response.sendRedirect("index.jsp");
        		    break;
                }
                else
                {
                	l=1;
                }
            }
            if(l==1)
            {
            	session.setAttribute("status","Wrong Password");
            	response.sendRedirect("login.jsp");
            }
            st.close();
            con.close();
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		}
     
	}
}