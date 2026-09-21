import React, { useState } from 'react';
import { RHBLogo } from './components/RHBLogo';
import { BusinessCardView } from './components/BusinessCardView';
import { QuickActionButtons } from './components/QuickActionButtons';
import { ContactDetailsSection } from './components/ContactDetailsSection';
import { BiographySection } from './components/BiographySection';
import { ProfessionalLinksSection } from './components/ProfessionalLinksSection';
import { QRCodeModal } from './components/QRCodeModal';
import { InquiryModal } from './components/InquiryModal';
import { PROFILE_DATA } from './data/profileData';
import { downloadVCard } from './utils/vcard';
import portraitImg from './assets/images/irwan_official_portrait_1789967219785.jpg';
import {
  MessageCircle,
  Mail,
  Phone,
  UserPlus,
  Share2,
  CheckCircle2,
  MapPin,
  Building,
  CreditCard,
  User,
  ExternalLink,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'card' | 'contact' | 'bio' | 'links'>('card');
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleOpenInquiryForService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setIsInquiryModalOpen(true);
  };

  const whatsappDirectUrl = `https://wa.me/60199444845?text=${encodeURIComponent(
    'Salam / Hi Mohd Irwan, I would like to inquire about RHB Bank banking and financing services.'
  )}`;

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col relative overflow-x-hidden">
      {/* Background ambient decorative glow */}
      <div className="fixed inset-0 executive-radial-glow pointer-events-none z-0" />
      <div className="fixed inset-0 bg-blinds-pattern opacity-20 pointer-events-none z-0" />

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div
          id="app-toast-notification"
          className="fixed top-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-900/95 border border-blue-500/40 text-white text-xs font-semibold shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-top-3 duration-200"
        >
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Header Navigation */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-[#090d16]/85 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <RHBLogo size="sm" monochrome={false} />
            <div className="hidden sm:block h-4 w-px bg-slate-800" />
            <span className="hidden sm:inline-block text-xs font-mono text-slate-400">
              Permas Jaya Branch
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="header-btn-qr"
              type="button"
              onClick={() => setIsQRModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700/60 transition-colors"
            >
              <Share2 className="w-3.5 h-3.5 text-blue-400" />
              <span className="hidden xs:inline">Share Card</span>
            </button>
            <button
              id="header-btn-save-vcf"
              type="button"
              onClick={() => {
                downloadVCard();
                showToast('Contact file (.vcf) downloaded!');
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0067b1] hover:bg-[#005a9c] text-white text-xs font-semibold shadow-sm transition-colors"
            >
              <UserPlus className="w-3.5 h-3.5" />
              <span>Save Contact</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Body */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-10 z-10 space-y-8">
        {/* Executive Profile Showcase Header */}
        <section
          id="profile-hero"
          className="relative rounded-3xl bg-gradient-to-b from-[#0f172a] via-[#0d1424] to-[#090d16] border border-slate-800 p-6 sm:p-8 shadow-2xl overflow-hidden"
        >
          {/* Subtle venetian blind ambient overlay behind portrait */}
          <div className="absolute inset-0 bg-blinds-pattern opacity-30 pointer-events-none" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 text-center sm:text-left">
            {/* Dramatic Studio Portrait Frame */}
            <div className="relative shrink-0">
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-slate-700/80 shadow-2xl relative group bg-black">
                <img
                  src={portraitImg}
                  alt={PROFILE_DATA.name}
                  className="w-full h-full object-cover object-top grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>
              {/* Official verified badge */}
              <div
                className="absolute -bottom-2.5 left-1/2 sm:left-auto sm:right-[-6px] -translate-x-1/2 sm:translate-x-0 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#0067b1] border border-blue-400 text-white text-[10px] font-bold shadow-md tracking-wider uppercase"
                title="RHB Bank Verified Officer"
              >
                <ShieldCheck className="w-3 h-3" />
                <span>RHB</span>
              </div>
            </div>

            {/* Profile Identity & Credentials */}
            <div className="flex-1 min-w-0">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available for Loan & Banking Advisory</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-heading text-white">
                {PROFILE_DATA.name}
              </h1>

              <div className="text-lg sm:text-xl font-semibold text-[#38bdf8] mt-1">
                {PROFILE_DATA.role}
              </div>

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mt-2 text-xs text-slate-300 font-medium">
                <span className="font-semibold text-white">{PROFILE_DATA.company}</span>
                <span className="text-slate-600">•</span>
                <span className="font-mono text-slate-400">{PROFILE_DATA.companyRegNo}</span>
              </div>

              <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs text-slate-400 mt-2 font-mono">
                <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span>Permas Jaya, Johor Bahru, Malaysia</span>
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <span className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700/80 text-slate-300">
                  Home Mortgage
                </span>
                <span className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700/80 text-slate-300">
                  Refinancing
                </span>
                <span className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700/80 text-slate-300">
                  SME Commercial Loans
                </span>
                <span className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700/80 text-slate-300">
                  Personal Financing
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Primary Interactive Contact CTA Buttons (WhatsApp, Email, Call, VCF, QR) */}
        <section id="quick-action-cta" className="relative z-10">
          <QuickActionButtons
            onOpenQR={() => setIsQRModalOpen(true)}
            onOpenInquiry={() => {
              setSelectedServiceId(undefined);
              setIsInquiryModalOpen(true);
            }}
            onShowToast={showToast}
          />
        </section>

        {/* Navigation Tabs */}
        <nav
          id="profile-navigation-tabs"
          className="flex justify-center p-1 bg-slate-900/90 rounded-2xl border border-slate-800 max-w-lg mx-auto"
        >
          <button
            id="tab-card"
            type="button"
            onClick={() => setActiveTab('card')}
            className={`flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'card'
                ? 'bg-[#0067b1] text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <CreditCard className="w-3.5 h-3.5" />
            <span>Digital Card</span>
          </button>

          <button
            id="tab-contact"
            type="button"
            onClick={() => setActiveTab('contact')}
            className={`flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'contact'
                ? 'bg-[#0067b1] text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Contact</span>
          </button>

          <button
            id="tab-bio"
            type="button"
            onClick={() => setActiveTab('bio')}
            className={`flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'bio'
                ? 'bg-[#0067b1] text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>Biography</span>
          </button>

          <button
            id="tab-links"
            type="button"
            onClick={() => setActiveTab('links')}
            className={`flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'links'
                ? 'bg-[#0067b1] text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Building className="w-3.5 h-3.5" />
            <span>Portals</span>
          </button>
        </nav>

        {/* Tab Views */}
        <section id="tab-content" className="relative z-10 transition-all duration-300">
          {activeTab === 'card' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <BusinessCardView
                onOpenQR={() => setIsQRModalOpen(true)}
                onOpenInquiry={() => {
                  setSelectedServiceId(undefined);
                  setIsInquiryModalOpen(true);
                }}
              />
              <ContactDetailsSection onShowToast={showToast} />
            </div>
          )}

          {activeTab === 'contact' && (
            <div className="animate-in fade-in duration-300">
              <ContactDetailsSection onShowToast={showToast} />
            </div>
          )}

          {activeTab === 'bio' && (
            <div className="animate-in fade-in duration-300">
              <BiographySection onSelectService={handleOpenInquiryForService} />
            </div>
          )}

          {activeTab === 'links' && (
            <div className="animate-in fade-in duration-300">
              <ProfessionalLinksSection />
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-[#060910] py-8 px-4 text-center text-xs text-slate-500 z-10">
        <div className="max-w-4xl mx-auto space-y-3">
          <div className="flex justify-center">
            <RHBLogo size="sm" monochrome={true} className="opacity-50" />
          </div>
          <p className="font-mono">
            {PROFILE_DATA.name} • {PROFILE_DATA.role}
          </p>
          <p className="text-[11px] text-slate-600">
            {PROFILE_DATA.company} ({PROFILE_DATA.companyRegNo}) • Permas Jaya Branch, Johor Bahru
          </p>
          <div className="pt-2 text-[10px] text-slate-600">
            Official digital business profile. Licensed financial institution governed by Bank Negara Malaysia.
          </div>
        </div>
      </footer>

      {/* Sticky Mobile Quick Bottom Bar */}
      <div
        id="mobile-sticky-bar"
        className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0c1220]/95 backdrop-blur-lg border-t border-slate-800 p-2.5 flex items-center gap-2"
      >
        <a
          id="mobile-bar-whatsapp"
          href={whatsappDirectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#075e54] to-[#128c7e] text-white text-xs font-bold shadow-md active:scale-95 transition-transform"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>

        <a
          id="mobile-bar-email"
          href={`mailto:${PROFILE_DATA.email}`}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#0067b1] text-white text-xs font-bold shadow-md active:scale-95 transition-transform"
        >
          <Mail className="w-4 h-4" />
          <span>Email</span>
        </a>

        <button
          id="mobile-bar-vcf"
          type="button"
          onClick={() => {
            downloadVCard();
            showToast('Contact (.vcf) saved!');
          }}
          className="p-2.5 rounded-xl bg-slate-800 text-slate-200 border border-slate-700 active:scale-95 transition-transform"
          aria-label="Save VCF Contact"
        >
          <UserPlus className="w-4 h-4" />
        </button>
      </div>

      {/* QR Code Modal */}
      <QRCodeModal
        isOpen={isQRModalOpen}
        onClose={() => setIsQRModalOpen(false)}
      />

      {/* Consultation Inquiry Modal */}
      <InquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
        initialServiceId={selectedServiceId}
      />
    </div>
  );
}
