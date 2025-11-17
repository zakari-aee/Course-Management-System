import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';

const WhatsAppNotification = ({ students = [] }) => {
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    if (message.trim() === '') return;
    // Placeholder: You can integrate WhatsApp API here
    console.log('Sending WhatsApp notification:', message);
    setSent(true);
    setTimeout(() => setSent(false), 3000); // Reset after 3s
    setMessage('');
  };

  return (
    <Card>
      <h2 className="text-2xl font-semibold mb-4">WhatsApp Notifications</h2>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Write your message..."
        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 mb-4 resize-none"
        rows={4}
      />
      <Button variant="primary" onClick={handleSend}>
        Send WhatsApp Message
      </Button>
      {sent && <p className="text-green-600 mt-2 font-medium">Message sent successfully!</p>}

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Recipients</h3>
        <ul className="space-y-1">
          {students.map((student, idx) => (
            <li key={idx} className="text-gray-700">
              {student.name} - {student.phone}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default WhatsAppNotification;
