import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(true);
  const phoneNumber = '919999999999';
  const message = 'Hi ORYZENE! I would like to book an event.';

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-40">
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce"
      >
        <MessageCircle size={24} className="text-white" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
