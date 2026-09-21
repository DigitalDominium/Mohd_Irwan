import React from 'react';
import { ExternalLink, Globe, MapPin, Building2, Shield, Info } from 'lucide-react';
import { PROFESSIONAL_LINKS, PROFILE_DATA } from '../data/profileData';

export const ProfessionalLinksSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-4 h-4 text-blue-400" />;
      case 'MapPin':
        return <MapPin className="w-4 h-4 text-amber-400" />;
      case 'Building2':
        return <Building2 className="w-4 h-4 text-emerald-400" />;
      default:
        return <ExternalLink className="w-4 h-4 text-slate-400" />;
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto space-y-4">
      <div className="bg-[#0d1424]/90 border border-slate-800/90 rounded-2xl p-5 sm:p-6 shadow-xl backdrop-blur-md">
        <div className="flex items-center gap-2 text-[#38bdf8] text-xs font-semibold uppercase tracking-wider mb-2">
          <Globe className="w-4 h-4" />
          <span>Verified Channels</span>
        </div>
        <h3 className="text-lg font-bold font-heading text-white mb-3">
          Professional Links & Portals
        </h3>

        <div className="space-y-2.5">
          {PROFESSIONAL_LINKS.map((link, idx) => (
            <a
              key={idx}
              id={`pro-link-${idx}`}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-3 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 hover:border-slate-700 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center shrink-0">
                  {getIcon(link.icon)}
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-200 group-hover:text-blue-300 transition-colors">
                  {link.label}
                </span>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-slate-300 transition-colors shrink-0" />
            </a>
          ))}
        </div>

        {/* Banking Notice & PIDM Disclosure */}
        <div className="mt-5 pt-4 border-t border-slate-800/80 space-y-2">
          <div className="flex items-start gap-2 text-[11px] text-slate-400 leading-relaxed">
            <Shield className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
            <span>
              <strong>RHB Bank Berhad</strong> (Registration No. {PROFILE_DATA.companyRegNo}) is a licensed financial institution regulated by Bank Negara Malaysia.
            </span>
          </div>
          <div className="flex items-start gap-2 text-[11px] text-slate-500 leading-relaxed">
            <Info className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
            <span>
              Eligible deposits protected by PIDM up to RM250,000 per depositor. Contact Mohd Irwan AK directly for personalized verification.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
