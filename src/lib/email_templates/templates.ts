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
</head>
<body style="margin: 0; padding: 0; background-color: #FAFAFAFF; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border: 1px solid #EDEDEDFF; border-radius: 24px; overflow: hidden; border-collapse: separate;">
        <tr><td>${emailNavbar}</td></tr>
        <tr>
            <td style="padding: 48px 40px;">
                <h2 style="color: #000000; font-size: 32px; margin: 0 0 24px 0; font-weight: 800; letter-spacing: -0.02em;">Hello ${name},</h2>
                <p style="color: #4B5563; font-size: 16px; line-height: 1.6; margin: 0 0 32px 0;">
                    We've received your inquiry at <strong>VijStack</strong>. Our team is currently reviewing your project details and we'll get back to you with a tailored response shortly.
                </p>
                <div style="background-color: #f7c948; height: 4px; width: 60px; margin-bottom: 32px; border-radius: 2px;"></div>
                <p style="color: #4B5563; font-size: 16px; line-height: 1.6; margin: 0 0 40px 0;">
                    In the meantime, feel free to explore our latest digital transformations and case studies.
                </p>
                <a href="https://vijstack.com/work" style="display: inline-block; background-color: #000000; color: #ffffff; font-weight: 700; padding: 16px 32px; border-radius: 100px; text-decoration: none; font-size: 14px; letter-spacing: 0.05em; text-align: center;">
                    VIEW PORTFOLIO
                </a>
            </td>
        </tr>
        <tr><td>${emailFooter}</td></tr>
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
<body style="margin: 0; padding: 0; background-color: #FAFAFAFF; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border: 1px solid #EDEDEDFF; border-radius: 24px; overflow: hidden; border-collapse: separate;">
        <tr><td>${emailNavbar}</td></tr>
        <tr>
            <td style="padding: 48px 40px;">
                <div style="display: inline-block; background-color: #f7c948; color: #000000; font-size: 12px; font-weight: 800; padding: 6px 12px; border-radius: 6px; margin-bottom: 16px; letter-spacing: 0.05em;">NEW INQUIRY</div>
                <h2 style="color: #000000; font-size: 28px; margin: 0 0 32px 0; font-weight: 800; letter-spacing: -0.01em;">Action Required</h2>
                
                <div style="background-color: #FAFAFAFF; padding: 32px; border: 1px solid #EDEDEDFF; border-radius: 16px;">
                    <p style="color: #7C737EFF; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 8px 0; font-weight: 700;">Client Email</p>
                    <p style="color: #000000; font-size: 16px; margin: 0 0 32px 0; font-weight: 600;">${client_email}</p>
                    
                    <p style="color: #7C737EFF; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 8px 0; font-weight: 700;">Project Details</p>
                    <div style="color: #374151; font-size: 15px; line-height: 1.7; white-space: pre-wrap; margin: 0;">${message}</div>
                </div>

                <div style="margin-top: 40px; text-align: center;">
                    <a href="mailto:${client_email}" style="display: inline-block; background-color: #000000; color: #ffffff; font-weight: 700; padding: 16px 32px; border-radius: 100px; text-decoration: none; font-size: 14px; letter-spacing: 0.05em;">
                        REPLY TO CLIENT
                    </a>
                </div>
            </td>
        </tr>
        <tr><td>${emailFooter}</td></tr>
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
</head>
<body style="margin: 0; padding: 0; background-color: #FAFAFAFF; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border: 1px solid #EDEDEDFF; border-radius: 24px; overflow: hidden; border-collapse: separate;">
        <tr><td>${emailNavbar}</td></tr>
        <tr>
            <td style="padding: 60px 40px; text-align: center;">
                <h2 style="color: #000000; font-size: 36px; margin: 0 0 20px 0; font-weight: 800; letter-spacing: -0.03em;">Welcome to the fold.</h2>
                <p style="color: #4B5563; font-size: 17px; line-height: 1.6; margin: 0 auto 40px auto; max-width: 420px;">
                    We've added <strong>${email}</strong> to our inner circle. Expect high-signal tech insights and architectural deep-dives.
                </p>
                <div style="background-color: #f7c948; height: 4px; width: 60px; margin: 0 auto 40px auto; border-radius: 2px;"></div>
                <a href="https://vijstack.com" style="display: inline-block; background-color: #000000; color: #ffffff; font-weight: 700; padding: 16px 36px; border-radius: 100px; text-decoration: none; font-size: 14px; letter-spacing: 0.05em; text-transform: uppercase;">
                    EXPLORE SOLUTIONS
                </a>
                <p style="color: #A099A1FF; font-size: 13px; margin-top: 40px; font-weight: 500;">
                    Zero noise. Pure signal.
                </p>
            </td>
        </tr>
        <tr><td>${emailFooter}</td></tr>
    </table>
</body>
</html>
    `;
};
