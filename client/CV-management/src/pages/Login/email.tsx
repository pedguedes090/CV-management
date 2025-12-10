import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';


function App() {
  // const [fromName, setFromName] = useState<string>('');
  // const [fromEmail, setFromEmail] = useState<string>(''); // thêm email người gửi
  const [toEmail, setToEmail] = useState<string>(''); // email người nhận
  const [message, setMessage] = useState<string>('');
  const [sending, setSending] = useState<boolean>(false);

  // Khởi tạo EmailJS public key (ok để để public theo thiết kế EmailJS)
  useEffect(() => {
    // Replace with your EmailJS public key if needed
    emailjs.init('O7YT3F9iDfejzbDfe');
  }, []);
  const randompasscode = Math.floor(100000 + Math.random() * 900000);
  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic client-side validation
    if (!toEmail || !message) {
      alert('Please fill in all fields.');
      return;
    }

    // Optional: simple email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(toEmail)) {
      alert('Please enter valid email addresses.');
      return;
    }

    const templateParams = {

      to_email: toEmail,
      passcode: randompasscode,

    };

    setSending(true);
    try {
      // You can either pass the public key as the 4th arg or call emailjs.init earlier (we did init)
      await emailjs.send(
        'service_3rpuhwh',
        'template_cargfnr',
        templateParams
      );

      alert('Email sent successfully!');
      // Optionally clear form
      // setFromName('');
      // setFromEmail('');
      setToEmail('');
      setMessage('');
    } catch (error: any) {
      console.error('Error sending email:', error);
      const msg = error?.text || error?.message || 'Unknown error';
      alert('Error sending email: ' + msg);
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={sendEmail}>
      {/* <input
        type="text"
        placeholder="Your Name"
        value={fromName}
        onChange={(e) => setFromName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Your Email"
        value={fromEmail}
        onChange={(e) => setFromEmail(e.target.value)}
        required
      /> */}
      <input
        type="email"
        placeholder="Recipient Email"
        value={toEmail}
        onChange={(e) => setToEmail(e.target.value)}
        required
      />
      <textarea
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <button type="submit" disabled={sending}>
        {sending ? 'Sending...' : 'Send Email'}
      </button>
    </form>
  );
}

export default App;