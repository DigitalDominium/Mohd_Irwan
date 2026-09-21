import React, { useState } from 'react';
import {
  MessageCircle,
  Mail,
  Phone,
  UserPlus,
  QrCode,
  MapPin,
  Check,
  Send,
  Calendar
} from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';
import { downloadVCard } from '../utils/vcard';

interface QuickActionButtonsProps {
  onOpenQR: () => void;
  onOpenInquiry: () => void;
  onShowToast: (msg: string) => void;
}

export const QuickActionButtons: React.FC<QuickActionButtonsProps> = ({
  onOpenQR,
  onOpenInquiry,
  onShowToast
}) => {
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSaveContact = () => {
    downloadVCard();
    setSavedSuccess(true);
    onShowToast('Contact file (.vcf) downloaded!');
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  const whatsappDirectUrl = `https://wa.me/60199444845?text=${encodeURIComponent(
    'Salam / Hi Mohd Irwan, I would like to inquire about RHB Bank mortgage and financing services.'
  )}`;

  const emailDirectUrl = `mailto:${PROFILE_DATA.email}?subject=${encodeURIComponent(
    'Banking Consultation Inquiry - RHB Bank'
  )}&body=${encodeURIComponent(
    `Salam / Hi Mohd Irwan,\n\nI came across your RHB Bank digital profile and would like to arrange an inquiry regarding banking facilities.\n\nThank you.`
  )}`;

  return (
    <div className="w-full max-w-lg mx-auto space-y-3">
      {/* Primary Communication Duo: WhatsApp + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* WhatsApp Button */}
        <a
          id="btn-whatsapp"
          href={whatsappDirectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-between p-3.5 sm:p-4 rounded-xl bg-gradient-to-r from-[#075e54] to-[#128c7e] hover:from-[#096a60] hover:to-[#17a393] text-white shadow-lg shadow-emerald-950/40 border border-emerald-500/30 transition-all duration-200 active:scale-[0.98]"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-black/20 flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5 text-emerald-200 group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-left">
              <div className="text-xs font-medium text-emerald-200 uppercase tracking-wider">
                Instant Chat
              </div>
              <div className="text-sm sm:text-base font-bold text-white leading-tight">
                WhatsApp Me
              </div>
            </div>
          </div>
          <Send className="w-4 h-4 text-emerald-200 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
        </a>

        {/* Email Button */}
        <a
          id="btn-email"
          href={emailDirectUrl}
          className="group relative flex items-center justify-between p-3.5 sm:p-4 rounded-xl bg-gradient-to-r from-[#004f8a] to-[#0067b1] hover:from-[#005a9c] hover:to-[#0077cd] text-white shadow-lg shadow-blue-950/40 border border-blue-400/30 transition-all duration-200 active:scale-[0.98]"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-black/20 flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5 text-blue-200 group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-left">
              <div className="text-xs font-medium text-blue-200 uppercase tracking-wider">
                Official Email
              </div>
              <div className="text-sm sm:text-base font-bold text-white leading-tight">
                Email Inquiry
              </div>
            </div>
          </div>
          <Send className="w-4 h-4 text-blue-200 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
        </a>
      </div>

      {/* Secondary Fast Action Row: Call + Save Contact + Scan QR */}
      <div className="grid grid-cols-3 gap-2.5">
        {/* Phone Call */}
        <a
          id="btn-call"
          href={`tel:${PROFILE_DATA.phoneRaw}`}
          className="flex flex-col items-center justify-center py-3 px-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-200 transition-all duration-200 group active:scale-[0.97]"
        >
          <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center mb-1 text-blue-400 group-hover:scale-110 transition-transform">
            <Phone className="w-4 h-4" />
          </div>
          <span className="text-xs font-semibold text-slate-200">Call Direct</span>
          <span className="text-[10px] text-slate-400 font-mono mt-0.5">Permas Jaya</span>
        </a>

        {/* Save Contact (.vcf) */}
        <button
          id="btn-save-contact"
          onClick={handleSaveContact}
          type="button"
          className="flex flex-col items-center justify-center py-3 px-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-200 transition-all duration-200 group active:scale-[0.97]"
        >
          <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center mb-1 text-emerald-400 group-hover:scale-110 transition-transform">
            {savedSuccess ? (
              <Check className="w-4 h-4 text-emerald-300" />
            ) : (
              <UserPlus className="w-4 h-4" />
            )}
          </div>
          <span className="text-xs font-semibold text-slate-200">
            {savedSuccess ? 'Saved!' : 'Save VCF'}
          </span>
          <span className="text-[10px] text-slate-400 font-mono mt-0.5">To Contacts</span>
        </button>

        {/* QR Code */}
        <button
          id="btn-qr-share"
          onClick={onOpenQR}
          type="button"
          className="flex flex-col items-center justify-center py-3 px-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-200 transition-all duration-200 group active:scale-[0.97]"
        >
          <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center mb-1 text-purple-400 group-hover:scale-110 transition-transform">
            <QrCode className="w-4 h-4" />
          </div>
          <span className="text-xs font-semibold text-slate-200">Show QR</span>
          <span className="text-[10px] text-slate-400 font-mono mt-0.5">Scan & Share</span>
        </button>
      </div>

      {/* Consultation Request Prompt Bar */}
      <div className="pt-1">
        <button
          id="btn-request-consultation"
          onClick={onOpenInquiry}
          className="w-full flex items-center justify-between p-3 rounded-xl bg-[#0e1626] hover:bg-[#121c32] border border-blue-500/20 hover:border-blue-500/40 text-left transition-all group"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white group-hover:text-blue-300 transition-colors">
                Schedule a Banking Consultation
              </div>
              <div className="text-[11px] text-slate-400">
                Mortgage eligibility check • SME facilities • Refinancing advice
              </div>
            </div>
          </div>
          <span className="text-xs font-medium text-blue-400 group-hover:translate-x-0.5 transition-transform">
            Start &rarr;
          </span>
        </button>
      </div>
    </div>
  );
};
