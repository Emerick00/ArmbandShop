import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const handleClick = () => {
    window.open('https://wa.me/4915112345678?text=Hallo!%20Ich%20interessiere%20mich%20für%20das%20personalisierte%20Armband.', '_blank');
  };

  return (
    <div className="whatsapp-bubble" onClick={handleClick} data-testid="whatsapp-chat-button">
      <MessageCircle size={32} color="white" />
    </div>
  );
}