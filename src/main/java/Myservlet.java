

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class Myservlet
 */
@WebServlet("/Myservlet1")
public class Myservlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

    /**
     * Default constructor. 
     */
    public Myservlet() {
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	PrintWriter pw=response.getWriter();
	pw.print("<html>");
	pw.print("<head>");
	pw.print("</head>");
	pw.print("<body>");
	pw.print("<b>Welcome</b>");
	pw.print("</body>");
	pw.print("</html>");
	
	}

	

}
