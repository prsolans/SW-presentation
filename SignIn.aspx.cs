using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace SwagelokPresentation.WebRestricted
{
    public partial class SignIn : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void btnLogin_Click(object sender, EventArgs e)
        {
            if (txtUserName.Text.Trim().ToLower() == "swagelok" && txtPassword.Text.Trim() == "pR3sent^tion")
            {
                HttpCookie authCookie = FormsAuthentication.GetAuthCookie("presentationuser", false);
                Response.Cookies.Add(authCookie);

                Response.Redirect("/presentations/?p=764dd24c");
            }
            else
            {
                lblMessage.Text = "Login incorrect.<br/>";
            }
        }
    }
}