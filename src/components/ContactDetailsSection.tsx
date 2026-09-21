import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  Copy,
  Check,
  ExternalLink,
  Clock,
  Building,
  Navigation
} from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

interface ContactDetailsSectionProps {
  onShowToast: (msg: string) => void;
}

export const ContactDetailsSection: React.FC<ContactDetailsSectionProps> = ({
  onShowToast
}) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = async (key: string, text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(key);
      onShowToast(`${label} copied to clipboard!`);
      setTimeout(() => setCopiedKey(null), 2000);
    } catch {
      // fallback
    }
  };

  const formattedAddress = PROFILE_DATA.addressLines.join(', ');

  return (
    <div className="w-full max-w-lg mx-auto bg-[#0d1424]/90 border border-slate-800/90 rounded-2xl p-5 sm:p-6 shadow-xl backdrop-blur-md">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3.5 mb-4">
        <div>
          <h3 className="text-base font-bold font-heading text-white flex items-center gap-2">
            <Building className="w-4 h-4 text-[#0067b1]" />
            <span>Official Contact Details</span>
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            RHB Bank Berhad Permas Jaya Branch
          </p>
        </div>
        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
          6171-M
        </span>
      </div>

      <div className="space-y-3">
        {/* Mobile Number */}
        <div className="group flex items-start justify-between p-3 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800/70 hover:border-slate-700 transition-all">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                Direct Mobile (M)
              </div>
              <a
                href={`tel:${PROFILE_DATA.phoneRaw}`}
                className="text-sm font-semibold font-mono text-white hover:text-blue-400 transition-colors"
              >
                {PROFILE_DATA.phoneDisplay}
              </a>
              <div className="text-[11px] text-slate-500 mt-0.5">
                Voice Calls & WhatsApp messaging
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button
              id="copy-phone-btn"
              type="button"
              onClick={() => copyToClipboard('phone', PROFILE_DATA.phoneRaw, 'Phone number')}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              title="Copy phone number"
            >
              {copiedKey === 'phone' ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Email Address */}
        <div className="group flex items-start justify-between p-3 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800/70 hover:border-slate-700 transition-all">
          <div className="flex items-start gap-3 min-w-0">
            <div className="w-9 h-9 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400 shrink-0 mt-0.5">
              <Mail className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                Corporate Email (E)
              </div>
              <a
                href={`mailto:${PROFILE_DATA.email}`}
                className="text-sm font-semibold font-mono text-white hover:text-red-400 transition-colors break-all"
              >
                {PROFILE_DATA.email}
              </a>
              <div className="text-[11px] text-slate-500 mt-0.5">
                RHB Group corporate email
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1 shrink-0">
            <button
              id="copy-email-btn"
              type="button"
              onClick={() => copyToClipboard('email', PROFILE_DATA.email, 'Email address')}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              title="Copy email address"
            >
              {copiedKey === 'email' ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Branch Address */}
        <div className="group flex items-start justify-between p-3 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800/70 hover:border-slate-700 transition-all">
          <div className="flex items-start gap-3 min-w-0">
            <div className="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
              <MapPin className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                Branch Location
              </div>
              <div className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed mt-0.5">
                {PROFILE_DATA.company}
                <br />
                {PROFILE_DATA.addressLines[0]}, {PROFILE_DATA.addressLines[1]}
                <br />
                {PROFILE_DATA.addressLines[2]}
                <br />
                {PROFILE_DATA.addressLines[3]}
                <br />
                <span className="text-slate-400">{PROFILE_DATA.addressLines[4]}</span>
              </div>
              <div className="flex items-center gap-3 mt-2">
                <a
                  id="link-google-maps"
                  href={PROFILE_DATA.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-[#38bdf8] hover:underline"
                >
                  <Navigation className="w-3 h-3" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1 shrink-0">
            <button
              id="copy-address-btn"
              type="button"
              onClick={() => copyToClipboard('address', formattedAddress, 'Branch address')}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              title="Copy address"
            >
              {copiedKey === 'address' ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Corporate Website */}
        <div className="group flex items-start justify-between p-3 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800/70 hover:border-slate-700 transition-all">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
              <Globe className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                Official Web Portal
              </div>
              <a
                id="link-rhb-portal"
                href={PROFILE_DATA.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-white hover:text-blue-400 transition-colors inline-flex items-center gap-1.5"
              >
                <span>{PROFILE_DATA.websiteDisplay}</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
              <div className="text-[11px] text-slate-500 mt-0.5">
                RHB Banking Group official website
              </div>
            </div>
          </div>
        </div>

        {/* Operating Hours Note */}
        <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-slate-900/40 text-[11px] text-slate-400 border border-slate-800/50">
          <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span>Banking Consultation: Monday – Friday 9:15 AM – 4:30 PM (Appointments welcome)</span>
        </div>
      </div>
    </div>
  );
};
