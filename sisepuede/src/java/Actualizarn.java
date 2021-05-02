/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import java.sql.ResultSet;
import javax.servlet.ServletConfig;

/**
 *
 * @author Usuario
 */
public class Actualizarn extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    private Connection con;
    private Statement set;
    private ResultSet rs;
    
    public void init(ServletConfig cfg)throws ServletException{
        
        String url="jdbc:mysql:3306//localhost/registro4iv9";
        
        String userName="root";
        String password="root";
        
        try{
           
            Class.forName("com.mysql.jdbc.Driver");
            
            url="jdbc:mysql://localhost/registro4iv9";
            con=DriverManager.getConnection(url,userName,password);
            set=con.createStatement();
            
            System.out.println("Conexion exitosa");
            
        }catch(Exception e){
            System.out.println("Conexion no exitosa");
            System.out.println(e.getMessage());
            System.out.println(e.getStackTrace());
        }
    }
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            String nom,id;
            nom = request.getParameter("nombre");
            id=request.getParameter("idactualizarn");
            
            try{
                
                String q="update mregistro "
                        + "set nom_usu "
                        +"values"
                        + "('"+nom+"')"
                        + "where id="+id;
                
                set.executeUpdate(q);
                System.out.println("Actualizacion exitoso en la tabla");
                    
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet Actualizarn</title>");            
            out.println("</head>");
            out.println("<body>"
                    + "<br>"
                    +"Tu nombre es:"+nom);
            out.println("<h1>Actualizacion exitosa exitoso</h1>"
                    + "<a href='index.html'>Regresar al Menu principal</a>");
            out.println("</body>");
            out.println("</html>");
            }catch(Exception e){
                
                System.out.println("Error al actualizar la tabla");
                System.out.println(e.getMessage());
                System.out.println(e.getStackTrace());
                out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet Actualizar</title>");            
            out.println("</head>");
            out.println("<body>"+"<br>");
            out.println("<h1>Actalizacion no exitosa no exitoso ocurrio un error</h1>"
                    + "<a href='index.html'>Regresar al Menu principal</a>");
            out.println("</body>");
            out.println("</html>");
            }
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
