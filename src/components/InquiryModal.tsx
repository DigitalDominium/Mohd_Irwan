import React, { useState } from 'react';
import { X, Send, Mail, MessageSquareText, Shield, CheckCircle2 } from 'lucide-react';
import { PROFILE_DATA, BANKING_SERVICES } from '../data/profileData';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  initialServiceId
}) => {
  const [selectedService, setSelectedService] = useState<string>(
    initialServiceId || 'mortgage'
  );
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userMessage, setUserMessage] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  if (!isOpen) return null;

  const currentService = BANKING_SERVICES.find(s => s.id === selectedService) || BANKING_SERVICES[0];

  const buildMessageContent = () => {
    let msg = `Salam / Hi Mohd Irwan,\n\nI am interested in consulting regarding: ${currentService.title}.\n`;
    if (userName.trim()) msg += `My Name: ${userName.trim()}\n`;
    if (userPhone.trim()) msg += `Contact Number: ${userPhone.trim()}\n`;
    if (userMessage.trim()) {
      msg += `\nNotes / Requirement:\n${userMessage.trim()}\n`;
    } else {
      msg += `\n${currentService.defaultMessage}\n`;
    }
    msg += `\nLooking forward to your professional advice. Thank you.`;
    return msg;
  };

  const handleSendWhatsApp = () => {
    const text = buildMessageContent();
    const encoded = encodeURIComponent(text);
    const url = `https://wa.me/60199444845?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  const handleSendEmail = () => {
    const body = buildMessageContent();
    const subject = encodeURIComponent(`Banking Consultation Inquiry: ${currentService.title} - ${userName || 'Client'}`);
    const encodedBody = encodeURIComponent(body);
    const url = `mailto:${PROFILE_DATA.email}?subject=${subject}&body=${encodedBody}`;
    window.location.href = url;
    onClose();
  };

  const handleCopyText = async () => {
    try {
      await navigator.clipboard.writeText(buildMessageContent());
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <div
      id="inquiry-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="inquiry-modal-dialog"
        className="relative w-full max-w-lg bg-[#0c1220] border border-slate-700/80 rounded-2xl p-6 sm:p-7 shadow-2xl text-slate-100 max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <button
          id="inquiry-modal-close"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-2">
            <MessageSquareText className="w-3.5 h-3.5" />
            <span>Direct Advisory Channel</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
            Consult Mohd Irwan AK
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Assistant Sales Manager • RHB Bank Permas Jaya, Johor Bahru
          </p>
        </div>

        {/* Category selector */}
        <div className="mb-4">
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
            Select Banking Solution
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {BANKING_SERVICES.map(svc => (
              <button
                key={svc.id}
                id={`service-select-${svc.id}`}
                type="button"
                onClick={() => setSelectedService(svc.id)}
                className={`text-left p-2.5 rounded-xl border text-xs transition-all ${
                  selectedService === svc.id
                    ? 'bg-[#0067b1]/20 border-[#0067b1] text-white ring-1 ring-[#0067b1]'
                    : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
                }`}
              >
                <div className="font-semibold text-slate-200">{svc.title}</div>
                <div className="text-[11px] text-slate-400 truncate">{svc.highlight}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Inputs */}
        <div className="space-y-3 mb-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor="client-name" className="block text-xs text-slate-400 mb-1">
                Your Name
              </label>
              <input
                id="client-name"
                type="text"
                placeholder="e.g. Kenneth Tan / Puan Aisyah"
                value={userName}
                onChange={e => setUserName(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#0067b1] focus:ring-1 focus:ring-[#0067b1]"
              />
            </div>
            <div>
              <label htmlFor="client-phone" className="block text-xs text-slate-400 mb-1">
                Your Phone Number
              </label>
              <input
                id="client-phone"
                type="tel"
                placeholder="e.g. +6012 345 6789"
                value={userPhone}
                onChange={e => setUserPhone(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#0067b1] focus:ring-1 focus:ring-[#0067b1]"
              />
            </div>
          </div>

          <div>
            <label htmlFor="client-notes" className="block text-xs text-slate-400 mb-1">
              Details / Financing Requirements (Optional)
            </label>
            <textarea
              id="client-notes"
              rows={3}
              placeholder="e.g. Inquiring about housing loan for property in Johor Bahru (~RM 650k), or refinancing package..."
              value={userMessage}
              onChange={e => setUserMessage(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#0067b1] focus:ring-1 focus:ring-[#0067b1] resize-none"
            />
          </div>
        </div>

        {/* Security / Privacy Assurance */}
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900/80 border border-slate-800/80 text-[11px] text-slate-400 mb-5">
          <Shield className="w-4 h-4 text-blue-400 shrink-0" />
          <span>Official RHB Bank representative channel. Direct 1-to-1 confidential inquiry.</span>
        </div>

        {/* Send Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            id="inquiry-submit-whatsapp"
            type="button"
            onClick={handleSendWhatsApp}
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-lg shadow-emerald-950/40 transition-all active:scale-[0.98]"
          >
            <Send className="w-4 h-4" />
            <span>Send via WhatsApp</span>
          </button>
          <button
            id="inquiry-submit-email"
            type="button"
            onClick={handleSendEmail}
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#0067b1] hover:bg-[#005a9c] text-white font-semibold text-sm shadow-lg shadow-blue-950/40 transition-all active:scale-[0.98]"
          >
            <Mail className="w-4 h-4" />
            <span>Send via Email</span>
          </button>
        </div>

        <div className="text-center mt-3">
          <button
            id="inquiry-copy-text"
            type="button"
            onClick={handleCopyText}
            className="text-xs text-slate-400 hover:text-slate-200 underline underline-offset-4"
          >
            {isCopied ? 'Message Copied!' : 'Copy drafted text to clipboard'}
          </button>
        </div>
      </div>
    </div>
  );
};
