export const template = (email) => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
<title>Beautiful Email Template</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style type="text/css">
    /* CLIENT-SPECIFIC STYLES */
    #outlook a{padding:0;}
    .ReadMsgBody{width:100%;} .ExternalClass{width:100%;}
    .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div {line-height: 100%;}
    body, table, td, a{-webkit-text-size-adjust:100%; -ms-text-size-adjust:100%;}
    table, td{mso-table-lspace:0pt; mso-table-rspace:0pt;}
    img{-ms-interpolation-mode:bicubic;}

    /* RESET STYLES */
    body{margin:0; padding:0; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);}
    img{border:0; height:auto; line-height:100%; outline:none; text-decoration:none;}
    table{border-collapse:collapse !important;}
    body{height:100% !important; margin:0; padding:0; width:100% !important;}

    /* CUSTOM STYLES */
    .gradient-bg {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }
    
    .card {
        background: #ffffff;
        border-radius: 20px;
        box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        overflow: hidden;
    }
    
    .header-section {
        background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
        padding: 40px 30px;
        text-align: center;
    }
    
    .content-section {
        padding: 50px 40px;
        text-align: center;
    }
    
    .icon {
        width: 80px;
        height: 80px;
        background: rgba(255,255,255,0.2);
        border-radius: 50%;
        margin: 0 auto 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 40px;
    }
    
    .button {
        display: inline-block;
        padding: 18px 40px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: #ffffff !important;
        text-decoration: none;
        border-radius: 50px;
        font-weight: 600;
        font-size: 16px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
        transition: all 0.3s ease;
        border: none;
        cursor: pointer;
    }
    
    .button:hover {
        transform: translateY(-2px);
        box-shadow: 0 15px 35px rgba(102, 126, 234, 0.6);
    }
    
    .footer {
        background: #f8f9fa;
        padding: 30px;
        text-align: center;
        border-top: 1px solid #e9ecef;
    }

    /* MOBILE STYLES */
    @media screen and (max-width: 600px) {
        .wrapper {
            width: 100% !important;
            margin: 10px !important;
        }
        
        .content-section {
            padding: 30px 20px !important;
        }
        
        .header-section {
            padding: 30px 20px !important;
        }
        
        .button {
            padding: 15px 30px !important;
            font-size: 14px !important;
        }
        
        h1 {
            font-size: 24px !important;
        }
        
        .description {
            font-size: 14px !important;
        }
    }
</style>
</head>
<body style="margin: 0; padding: 0;">

<!-- MAIN CONTAINER -->
<table border="0" cellpadding="0" cellspacing="0" width="100%" class="gradient-bg" style="min-height: 100vh;">
    <tr>
        <td align="center" style="padding: 40px 20px;">
            
            <!-- EMAIL CARD -->
            <table border="0" cellpadding="0" cellspacing="0" width="600" class="wrapper card" style="max-width: 600px; background: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.1);">
                
                <!-- HEADER SECTION -->
                <tr>
                    <td class="header-section" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); padding: 40px 30px; text-align: center;">
                        <div style="width: 80px; height: 80px; background: rgba(255,255,255,0.2); border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; line-height: 80px;">
                            <span style="font-size: 40px; color: #ffffff;">✨</span>
                        </div>
                        <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: 700; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; text-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                            Welcome!
                        </h1>
                        <p style="margin: 10px 0 0 0; color: rgba(255,255,255,0.9); font-size: 16px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
                            We're excited to have you on board
                        </p>
                    </td>
                </tr>
                
                <!-- CONTENT SECTION -->
                <tr>
                    <td class="content-section" style="padding: 50px 40px; text-align: center;">
                        <h2 style="margin: 0 0 20px 0; color: #2c3e50; font-size: 24px; font-weight: 600; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
                            Your Journey Starts Here
                        </h2>
                        <p class="description" style="margin: 0 0 35px 0; color: #6c757d; font-size: 16px; line-height: 1.6; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
                            Thank you for joining us! We've prepared something special for you. Click the button below to get started and explore all the amazing features we have to offer.
                        </p>
                        
                        <!-- CALL TO ACTION BUTTON -->
                        <table border="0" cellspacing="0" cellpadding="0" style="margin: 0 auto;">
                            <tr>
                                <td>
                                    <a href="http://localhost:3000/api/users/verify/${email}" class="button" style="display: inline-block; padding: 18px 40px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; border-radius: 50px; font-weight: 600; font-size: 16px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);">
                                        Confirm Now
                                    </a>
                                </td>
                            </tr>
                        </table>
                        
                        <p style="margin: 30px 0 0 0; color: #95a5a6; font-size: 14px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
                            If you have any questions, feel free to reach out to our support team.
                        </p>
                    </td>
                </tr>
                
                <!-- FOOTER SECTION -->
                <tr>
                    <td class="footer" style="background: #f8f9fa; padding: 30px; text-align: center; border-top: 1px solid #e9ecef;">
                        <p style="margin: 0 0 10px 0; color: #6c757d; font-size: 14px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
                            © 2024 Your Company Name. All rights reserved.
                        </p>
                        <p style="margin: 0; color: #95a5a6; font-size: 12px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
                            You received this email because you signed up for our service.
                        </p>
                    </td>
                </tr>
                
            </table>
            
        </td>
    </tr>
</table>

</body>
</html>`
} 
