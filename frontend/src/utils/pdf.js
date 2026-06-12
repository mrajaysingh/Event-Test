import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const downloadReceiptPDF = async (bookingData, fileName = 'receipt.pdf') => {
  try {
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    // Background
    pdf.setFillColor(0, 0, 0);
    pdf.rect(0, 0, pageWidth, pageHeight, 'F');

    // Header with gradient effect
    pdf.setFillColor(212, 175, 55);
    pdf.rect(0, 0, pageWidth, 30, 'F');

    // Logo/Title
    pdf.setTextColor(0, 0, 0);
    pdf.setFontSize(20);
    pdf.setFont('helvetica', 'bold');
    pdf.text('ORYZENE', pageWidth / 2, 18, { align: 'center' });

    // Reset text color
    pdf.setTextColor(255, 255, 255);
    pdf.setFontSize(12);

    // Booking Receipt Title
    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.text('BOOKING CONFIRMATION RECEIPT', pageWidth / 2, 50, { align: 'center' });

    // Booking Details
    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'normal');
    let yPos = 70;

    const details = [
      { label: 'Booking ID:', value: bookingData.bookingId },
      { label: 'Customer Name:', value: bookingData.fullName },
      { label: 'Email:', value: bookingData.email },
      { label: 'Phone:', value: bookingData.phone },
      { label: 'Event Type:', value: bookingData.eventType },
      { label: 'Event Date:', value: new Date(bookingData.eventDate).toLocaleDateString() },
      { label: 'Location:', value: bookingData.eventLocation },
      { label: 'Number of Guests:', value: bookingData.numberOfGuests },
      { label: 'Budget Range:', value: bookingData.budgetRange },
      { label: 'Status:', value: bookingData.status }
    ];

    details.forEach((detail) => {
      pdf.setFont('helvetica', 'bold');
      pdf.text(detail.label, 20, yPos);
      pdf.setFont('helvetica', 'normal');
      pdf.text(detail.value, 80, yPos);
      yPos += 8;
    });

    // Footer
    yPos = pageHeight - 30;
    pdf.setFontSize(10);
    pdf.setTextColor(212, 175, 55);
    pdf.text('Thank you for choosing ORYZENE!', pageWidth / 2, yPos, { align: 'center' });
    pdf.text('Turning Every Occasion Into an Unforgettable Experience', pageWidth / 2, yPos + 8, { align: 'center' });

    pdf.save(fileName);
  } catch (error) {
    console.error('Error generating PDF:', error);
  }
};

export const printPage = () => {
  window.print();
};
