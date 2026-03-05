import { emailNavbar } from "./navbar";
import { emailFooter } from "./footer";

/**
 * Confirmation email sent to the client after they submit a contact form.
 */
export const EmailToClient = (email: string, name: string) => {
    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Message Received - VijStack</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f3f4f6; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
        <tr>
            <td>
                ${emailNavbar}
            </td>
        </tr>
        <tr>
            <td style="padding: 0 40px 60px 40px;">
                <h2 style="color: #111827; font-size: 28px; margin-bottom: 16px; font-weight: 700; letter-spacing: -0.5px;">Hello ${name},</h2>
                <p style="color: #4b5563; font-size: 16px; line-height: 1.8; margin-bottom: 32px;">
                    We've received your inquiry at **VijStack**. Our team is currently reviewing your message and we'll get back to you with the next steps shortly.
                </p>
                <div style="height: 1px; background-color: #e5e7eb; margin-bottom: 32px;"></div>
                <p style="color: #4b5563; font-size: 16px; line-height: 1.8; margin-bottom: 40px;">
                    In the meantime, you can explore some of our latest digital transformations.
                </p>
                <a href="https://vijstack.com/work" style="display: inline-block; background-color: #3b82f6; color: #ffffff; font-weight: 600; padding: 14px 28px; border-radius: 4px; text-decoration: none; font-size: 14px; letter-spacing: 0.5px;">
                    VIEW PORTFOLIO
                </a>
            </td>
        </tr>
        <tr>
            <td>
                ${emailFooter}
            </td>
        </tr>
    </table>
</body>
</html>
    `;
};

/**
 * Notification email sent to the VijStack team containing the lead's details.
 */
export const EmailToVijStackTeam = (message: string, client_email: string) => {
    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #f3f4f6; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
        <tr>
            <td>
                ${emailNavbar}
            </td>
        </tr>
        <tr>
            <td style="padding: 0 40px 60px 40px;">
                <h2 style="color: #111827; font-size: 22px; margin-bottom: 32px; font-weight: 600; letter-spacing: -0.3px;">New Inquiry Received</h2>
                <div style="background-color: #f9fafb; padding: 32px; border: 1px solid #e5e7eb; border-radius: 4px;">
                    <p style="color: #6b7280; font-size: 11px; text-transform: uppercase; letter-spacing: 1.2px; margin-bottom: 8px; font-weight: 700;">Source</p>
                    <p style="color: #111827; font-size: 15px; margin-bottom: 32px; font-weight: 500;">
                        ${client_email}
                    </p>
                    
                    <p style="color: #6b7280; font-size: 11px; text-transform: uppercase; letter-spacing: 1.2px; margin-bottom: 8px; font-weight: 700;">Message Body</p>
                    <p style="color: #374151; font-size: 15px; line-height: 1.8; white-space: pre-wrap; margin: 0;">
                        ${message}
                    </p>
                </div>
                <div style="margin-top: 40px; text-align: center;">
                    <a href="mailto:${client_email}" style="color: #3b82f6; text-decoration: none; font-size: 14px; font-weight: 600; border-bottom: 1px solid #3b82f6; padding-bottom: 2px;">
                        Reply directly to client &rarr;
                    </a>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                ${emailFooter}
            </td>
        </tr>
    </table>
</body>
</html>
    `;
};

/**
 * Newsletter subscription confirmation email.
 */
export const EmailNewsletterSubscribed = (email: string, name?: string) => {
    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to VijStack</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f3f4f6; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
        <tr>
            <td>
                ${emailNavbar}
            </td>
        </tr>
        <tr>
            <td style="padding: 0 40px 60px 40px; text-align: center;">
                <h2 style="color: #111827; font-size: 32px; margin-bottom: 20px; font-weight: 700; letter-spacing: -1px;">Welcome to the fold.</h2>
                <p style="color: #4b5563; font-size: 16px; line-height: 1.8; margin-bottom: 32px; max-width: 400px; margin-left: auto; margin-right: auto;">
                    We've added **${email}** to our inner circle. Expect exclusive tech insights and architectural deep-dives.
                </p>
                <div style="margin: 40px 0;">
                    <a href="https://vijstack.com" style="display: inline-block; background-color: #000000; color: #ffffff; font-weight: 600; padding: 14px 32px; border-radius: 4px; text-decoration: none; font-size: 13px; letter-spacing: 1px; text-transform: uppercase;">
                        Enter Marketplace
                    </a>
                </div>
                <p style="color: #9ca3af; font-size: 13px;">
                    Zero noise. Pure signal.
                </p>
            </td>
        </tr>
        <tr>
            <td>
                ${emailFooter}
            </td>
        </tr>
    </table>
</body>
</html>
    `;
};
