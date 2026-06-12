import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

export const sendBookingConfirmationEmail = async (booking) => {
  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: booking.email,
    subject: 'Your ORYZENE Event Booking Confirmation',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; background-color: #f5f5f5; }
          .container { max-width: 600px; margin: 0 auto; background-color: white; padding: 20px; border-radius: 8px; }
          .header { background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%); color: #D4AF37; padding: 20px; text-align: center; border-radius: 8px; }
          .header h1 { margin: 0; font-size: 28px; }
          .header p { margin: 5px 0 0 0; font-size: 14px; }
          .content { padding: 20px; }
          .booking-details { background-color: #f9f9f9; padding: 15px; border-left: 4px solid #D4AF37; margin: 15px 0; }
          .detail-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #eee; }
          .detail-row:last-child { border-bottom: none; }
          .label { font-weight: bold; color: #333; }
          .value { color: #666; }
          .status { background-color: #fff3cd; border-left: 4px solid #D4AF37; padding: 10px; margin: 15px 0; }
          .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; border-top: 1px solid #eee; }
          .button { display: inline-block; background-color: #D4AF37; color: #000; padding: 12px 30px; text-decoration: none; border-radius: 4px; margin-top: 15px; }
          .highlight { color: #D4AF37; font-weight: bold; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>ORYZENE</h1>
            <p>Turning Every Occasion Into an Unforgettable Experience</p>
          </div>
          
          <div class="content">
            <p>Dear <strong>${booking.fullName}</strong>,</p>
            
            <p>Thank you for choosing <span class="highlight">ORYZENE</span> for your event! We are thrilled to help you create an unforgettable experience.</p>
            
            <p><strong>Your booking has been received and is under review.</strong></p>
            
            <div class="booking-details">
              <div class="detail-row">
                <span class="label">Booking ID:</span>
                <span class="value"><strong>${booking.bookingId}</strong></span>
              </div>
              <div class="detail-row">
                <span class="label">Event Type:</span>
                <span class="value">${booking.eventType}</span>
              </div>
              <div class="detail-row">
                <span class="label">Event Date:</span>
                <span class="value">${new Date(booking.eventDate).toLocaleDateString()}</span>
              </div>
              <div class="detail-row">
                <span class="label">Location:</span>
                <span class="value">${booking.eventLocation}</span>
              </div>
              <div class="detail-row">
                <span class="label">Number of Guests:</span>
                <span class="value">${booking.numberOfGuests}</span>
              </div>
              <div class="detail-row">
                <span class="label">Budget Range:</span>
                <span class="value">${booking.budgetRange}</span>
              </div>
            </div>
            
            <div class="status">
              <strong>Current Status:</strong> ${booking.status}
              <p style="margin: 5px 0 0 0; font-size: 14px;">Our team will review your booking and contact you within 24 hours with next steps.</p>
            </div>
            
            <p><strong>Next Steps:</strong></p>
            <ul>
              <li>Our team will review your booking</li>
              <li>We'll contact you to discuss requirements and finalize details</li>
              <li>Once confirmed, you'll receive payment details</li>
              <li>Track your booking status anytime using your Booking ID</li>
            </ul>
            
            <p>For any queries, please don't hesitate to reach out to us:</p>
            <p>
              📧 Email: <strong>${process.env.ADMIN_EMAIL}</strong><br>
              📱 Phone: <strong>+91 XXXXXXXXXX</strong>
            </p>
            
            <p>Best regards,<br><span class="highlight">Team ORYZENE</span></p>
          </div>
          
          <div class="footer">
            <p>&copy; 2024 ORYZENE Event Management. All rights reserved.</p>
            <p>This is an automated email, please do not reply.</p>
          </div>
        </div>
      </body>
      </html>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Booking confirmation email sent to:', booking.email);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

export const sendContactReplyEmail = async (email, name, subject, message) => {
  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: email,
    subject: `Re: ${subject}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; background-color: #f5f5f5; }
          .container { max-width: 600px; margin: 0 auto; background-color: white; padding: 20px; border-radius: 8px; }
          .header { background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%); color: #D4AF37; padding: 20px; text-align: center; border-radius: 8px; }
          .content { padding: 20px; }
          .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; border-top: 1px solid #eee; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>ORYZENE</h1>
          </div>
          <div class="content">
            <p>Dear ${name},</p>
            <p>Thank you for contacting ORYZENE. We appreciate your inquiry and will get back to you soon.</p>
            <p>${message}</p>
            <p>Best regards,<br>Team ORYZENE</p>
          </div>
          <div class="footer">
            <p>&copy; 2024 ORYZENE Event Management</p>
          </div>
        </div>
      </body>
      </html>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};
