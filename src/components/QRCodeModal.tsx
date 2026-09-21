import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { X, Download, Share2, Check, Smartphone } from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';
import { generateVCardString, downloadVCard } from '../utils/vcard';

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QRCodeModal: React.FC<QRCodeModalProps> = ({ isOpen, onClose }) => {
  const [qrMode, setQrMode] = useState<'profile' | 'vcard'>('profile');
  const [qrUrl, setQrUrl] = useState<string>('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const dataToEncode = qrMode === 'profile' ? window.location.href : generateVCardString();

    QRCode.toDataURL(dataToEncode, {
      width: 320,
      margin: 2,
      color: {
        dark: '#002B49',
        light: '#FFFFFF'
      }
    })
      .then(url => setQrUrl(url))
      .catch(err => console.error(err));
  }, [isOpen, qrMode]);

  if (!isOpen) return null;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <div
      id="qr-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="qr-modal-card"
        className="relative w-full max-w-md bg-[#0f172a] border border-slate-700/80 rounded-2xl p-6 shadow-2xl text-slate-100"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="qr-modal-close"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-3">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Instant Client Networking</span>
          </div>
          <h3 className="text-xl font-bold font-heading text-white">Scan to Connect</h3>
          <p className="text-xs text-slate-400 mt-1">
            Point smartphone camera at the QR code below
          </p>
        </div>

        {/* Tab switch for Profile URL vs Direct Contact Card */}
        <div className="flex p-1 bg-slate-900/90 rounded-xl border border-slate-800 mb-5">
          <button
            id="qr-tab-profile"
            onClick={() => setQrMode('profile')}
            className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-semibold transition-all ${
              qrMode === 'profile'
                ? 'bg-[#0067b1] text-white shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Digital Profile
          </button>
          <button
            id="qr-tab-vcard"
            onClick={() => setQrMode('vcard')}
            className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-semibold transition-all ${
              qrMode === 'vcard'
                ? 'bg-[#0067b1] text-white shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Save to Contacts (.vcf)
          </button>
        </div>

        {/* QR Code Container */}
        <div className="flex justify-center p-4 bg-white rounded-xl shadow-inner border border-slate-200 mb-5">
          {qrUrl ? (
            <img
              src={qrUrl}
              alt="QR Code"
              className="w-56 h-56 object-contain"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="w-56 h-56 flex items-center justify-center text-slate-400 text-sm">
              Generating QR...
            </div>
          )}
        </div>

        <p className="text-center text-xs text-slate-400 mb-5">
          {qrMode === 'profile'
            ? 'Scans directly to this interactive digital profile webpage'
            : `Instantly prompts phone to add "${PROFILE_DATA.name}" to address book`}
        </p>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-3">
          <button
            id="qr-download-vcard-btn"
            onClick={downloadVCard}
            className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
          >
            <Download className="w-4 h-4 text-blue-400" />
            <span>Download .VCF</span>
          </button>
          <button
            id="qr-copy-link-btn"
            onClick={handleCopyLink}
            className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#0067b1] hover:bg-[#005a9c] text-white text-xs font-semibold shadow-md transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-300" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4" />
                <span>Copy Link</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
