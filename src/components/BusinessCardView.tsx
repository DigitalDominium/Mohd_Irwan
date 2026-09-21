import React, { useState } from 'react';
import { RHBLogo } from './RHBLogo';
import { PROFILE_DATA } from '../data/profileData';
import { Phone, Mail, Globe, MapPin, QrCode, Sparkles, RotateCw, ExternalLink } from 'lucide-react';
import portraitImg from '../assets/images/irwan_official_portrait_1789967219785.jpg';

interface BusinessCardViewProps {
  onOpenQR: () => void;
  onOpenInquiry: () => void;
}

export const BusinessCardView: React.FC<BusinessCardViewProps> = ({
  onOpenQR,
  onOpenInquiry
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [cardTheme, setCardTheme] = useState<'noir' | 'classic'>('noir');

  return (
    <div className="w-full flex flex-col items-center">
      {/* Theme and Flip controls */}
      <div className="flex items-center justify-between w-full max-w-lg mb-3 px-1">
        <div className="flex items-center gap-1 bg-slate-900/80 p-1 rounded-xl border border-slate-800 text-xs">
          <button
            id="card-theme-noir"
            onClick={() => setCardTheme('noir')}
            className={`px-3 py-1 rounded-lg font-medium transition-all ${
              cardTheme === 'noir'
                ? 'bg-[#0067b1] text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Executive Noir
          </button>
          <button
            id="card-theme-classic"
            onClick={() => setCardTheme('classic')}
            className={`px-3 py-1 rounded-lg font-medium transition-all ${
              cardTheme === 'classic'
                ? 'bg-slate-700 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Bank Card Replica
          </button>
        </div>

        <button
          id="flip-card-btn"
          onClick={() => setIsFlipped(!isFlipped)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700/60 transition-colors"
        >
          <RotateCw className={`w-3.5 h-3.5 transition-transform duration-500 ${isFlipped ? 'rotate-180' : ''}`} />
          <span>{isFlipped ? 'View Front' : 'Flip to Back'}</span>
        </button>
      </div>

      {/* 3D Card Container */}
      <div
        className="w-full max-w-lg relative [perspective:1200px]"
        style={{ minHeight: '300px' }}
      >
        <div
          className={`relative w-full transition-all duration-700 [transform-style:preserve-3d] ${
            isFlipped ? '[transform:rotateY(180deg)]' : ''
          }`}
        >
          {/* ================= CARD FRONT ================= */}
          <div
            id="business-card-front"
            className={`w-full rounded-2xl p-6 sm:p-7 transition-all duration-300 [backface-visibility:hidden] relative overflow-hidden ${
              cardTheme === 'noir'
                ? 'bg-gradient-to-br from-[#121826] via-[#0d131f] to-[#080d16] text-slate-100 metallic-border'
                : 'bg-gradient-to-br from-[#fafafa] via-[#f5f5f7] to-[#ebebee] text-slate-900 border border-slate-300/80 shadow-2xl'
            }`}
          >
            {/* Ambient background textures */}
            {cardTheme === 'noir' ? (
              <>
                <div className="absolute inset-0 bg-blinds-pattern opacity-40 pointer-events-none" />
                <div className="absolute -top-24 -right-24 w-56 h-56 bg-[#0067b1]/15 rounded-full blur-3xl pointer-events-none" />
              </>
            ) : (
              <div className="absolute top-0 right-0 w-36 h-36 bg-blue-100/50 rounded-full blur-2xl pointer-events-none" />
            )}

            {/* Top Bar: RHB Logo + Status Badge */}
            <div className="relative z-10 flex items-start justify-between mb-5">
              <div className="p-1 rounded-md bg-white/10 backdrop-blur-xs">
                <RHBLogo size="md" monochrome={false} />
              </div>
              <div
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide ${
                  cardTheme === 'noir'
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                    : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Verified Officer</span>
              </div>
            </div>

            {/* Middle Section: Name, Role & Company Details */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center mb-6">
              <div className="sm:col-span-8">
                <h2
                  className={`text-2xl sm:text-3xl font-extrabold tracking-tight font-heading ${
                    cardTheme === 'noir' ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {PROFILE_DATA.name}
                </h2>
                <div
                  className={`text-sm sm:text-base font-semibold mt-0.5 ${
                    cardTheme === 'noir' ? 'text-[#38bdf8]' : 'text-[#0067b1]'
                  }`}
                >
                  {PROFILE_DATA.role}
                </div>
                <div
                  className={`text-xs mt-1 font-medium ${
                    cardTheme === 'noir' ? 'text-slate-400' : 'text-slate-700'
                  }`}
                >
                  {PROFILE_DATA.company}{' '}
                  <span className="text-[10px] opacity-75">
                    {PROFILE_DATA.companyRegNo}
                  </span>
                </div>
                <div
                  className={`text-[11px] mt-2 font-mono leading-relaxed ${
                    cardTheme === 'noir' ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  No 35 & 37, 2nd Floor, Jalan Permas 10/2, Bandar Baru Permas Jaya, 81750 Masai, Johor Bahru
                </div>
              </div>

              {/* Photo thumbnail if noir theme */}
              <div className="sm:col-span-4 flex justify-center sm:justify-end">
                <div
                  className={`relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden border-2 shadow-xl shrink-0 ${
                    cardTheme === 'noir'
                      ? 'border-[#0067b1]/40 shadow-blue-950/60'
                      : 'border-slate-300 shadow-slate-400/40'
                  }`}
                >
                  <img
                    src={portraitImg}
                    alt={PROFILE_DATA.name}
                    className="w-full h-full object-cover object-top grayscale contrast-125 hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Divider */}
            <div
              className={`h-px w-full my-4 ${
                cardTheme === 'noir' ? 'bg-slate-800' : 'bg-slate-200'
              }`}
            />

            {/* Bottom Bar Contact Pills */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <a
                href={`tel:${PROFILE_DATA.phoneRaw}`}
                className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg transition-colors ${
                  cardTheme === 'noir'
                    ? 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                    : 'text-slate-800 hover:text-blue-700 hover:bg-slate-100'
                }`}
              >
                <Phone className="w-3.5 h-3.5 text-[#0067b1] shrink-0" />
                <span className="font-mono font-medium">{PROFILE_DATA.phoneDisplay}</span>
              </a>

              <a
                href={`mailto:${PROFILE_DATA.email}`}
                className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg transition-colors truncate ${
                  cardTheme === 'noir'
                    ? 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                    : 'text-slate-800 hover:text-blue-700 hover:bg-slate-100'
                }`}
              >
                <Mail className="w-3.5 h-3.5 text-[#ed1c24] shrink-0" />
                <span className="truncate font-mono">{PROFILE_DATA.email}</span>
              </a>
            </div>
          </div>

          {/* ================= CARD BACK ================= */}
          <div
            id="business-card-back"
            className="w-full rounded-2xl p-6 sm:p-7 absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden] bg-gradient-to-br from-[#0c121e] via-[#090d16] to-[#04060a] text-slate-100 metallic-border flex flex-col justify-between"
          >
            <div className="absolute inset-0 bg-blinds-pattern opacity-30 pointer-events-none" />

            <div className="relative z-10 flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <RHBLogo size="sm" monochrome={false} />
                <span className="text-xs text-slate-400 font-mono">Official Banking Representative</span>
              </div>
              <span className="text-[10px] text-slate-500 font-mono">196501000373 (6171-M)</span>
            </div>

            <div className="relative z-10 my-auto py-3 text-center">
              <div className="inline-block p-2 bg-white rounded-xl shadow-lg border border-slate-700 cursor-pointer" onClick={onOpenQR}>
                <QrCode className="w-20 h-20 text-slate-900" />
              </div>
              <p className="text-xs font-semibold text-white mt-2">Instant Digital Connection</p>
              <p className="text-[11px] text-slate-400 max-w-xs mx-auto mt-0.5">
                Scan with any smartphone camera to save full contact credentials or explore loan packages.
              </p>
            </div>

            <div className="relative z-10 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span className="font-mono">{PROFILE_DATA.websiteDisplay}</span>
              <button
                type="button"
                onClick={onOpenQR}
                className="text-xs text-[#38bdf8] hover:text-white font-medium flex items-center gap-1"
              >
                <span>Enlarge QR</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
