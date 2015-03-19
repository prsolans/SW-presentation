<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="SignIn.aspx.cs" Inherits="SwagelokPresentation.WebRestricted.SignIn" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" >
<head id="Head1" runat="server">
    <title>Swagelok Presentation Preview</title>
    <link href="CSS/admincore.css" rel="stylesheet" type="text/css" />
    <script type="text/javascript" language="javascript">
        function setClientDateTime() {
            var dateField = document.getElementById('<%= this.hidClientDateTime.ClientID %>');
            dateField.value = (new Date()).getTimezoneOffset().toString();
        }
    </script>
    <link href="_Content/bootstrap.min.css" rel="stylesheet" type="text/css"/>
    <link href="_Content/jquery.mobile.structure-1.4.5.min.css" rel="stylesheet"/>
    <link href="_Content/jquery.mobile.theme-1.4.5.min.css" rel="stylesheet"/>
    <link href="_Content/Site.css" rel="stylesheet" type="text/css"/>
    <link rel="stylesheet" type="text/css" href="_Content/MyFontsWebfontsKit.css">
</head>
<body onload="setClientDateTime()">
<form id="form1" runat="server">
    <asp:Panel ID="pnlLogin" runat="server" DefaultButton="btnLogin">
    <div data-role='page' data-pageid="1" id="page-container" data-ajax="false">
        <table border="0" cellpadding="0" cellspacing="0" width="100%"><tr><td width="100%" align="center">
        <table border="0" cellpadding="0" cellspacing="0"><tr><td align="left">
        <asp:HiddenField ID="hidClientDateTime" runat="server" />
        <fieldset style="width : 100%;">
            <legend>Login</legend>
            <table class="table_fields">
                <tr>
                    <td>Username:</td>
                    <td><asp:TextBox ID="txtUserName"  runat="server" Width="150" /></td>
                </tr>
                <tr>
                    <td>Password:</td>
                    <td><asp:TextBox ID="txtPassword"  runat="server" TextMode="Password" Width="150" /></td>
                </tr>
                <tr>
                    <td colspan="2">
                        <asp:LinkButton ID="btnLogin" runat="server" ToolTip="Login" OnClick="btnLogin_Click">Login</asp:LinkButton>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <asp:Label runat="server" ID="lblMessage"/>
                    </td>
                </tr>
            </table>
        </fieldset>
        </td></tr></table>
        </td></tr></table>
    </div>
    </asp:Panel>
</form>
</body>
</html>
