import React from 'react';
import {
  ShieldCheck,
  Award,
  Home,
  Briefcase,
  RefreshCw,
  CreditCard,
  ChevronRight,
  UserCheck,
  CheckCircle2
} from 'lucide-react';
import { BIOGRAPHY, BANKING_SERVICES } from '../data/profileData';

interface BiographySectionProps {
  onSelectService: (serviceId: string) => void;
}

export const BiographySection: React.FC<BiographySectionProps> = ({
  onSelectService
}) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Home':
        return <Home className="w-4 h-4 text-blue-400" />;
      case 'RefreshCw':
        return <RefreshCw className="w-4 h-4 text-teal-400" />;
      case 'Briefcase':
        return <Briefcase className="w-4 h-4 text-amber-400" />;
      case 'CreditCard':
        return <CreditCard className="w-4 h-4 text-rose-400" />;
      default:
        return <ShieldCheck className="w-4 h-4 text-emerald-400" />;
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto space-y-5">
      {/* Biography Card */}
      <div className="bg-[#0d1424]/90 border border-slate-800/90 rounded-2xl p-5 sm:p-6 shadow-xl backdrop-blur-md">
        <div className="flex items-center gap-2 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2">
          <UserCheck className="w-4 h-4" />
          <span>Professional Profile</span>
        </div>
        <h3 className="text-xl font-bold font-heading text-white mb-3">
          About Mohd Irwan AK
        </h3>

        <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>{BIOGRAPHY.summary}</p>
          <p className="text-slate-400">{BIOGRAPHY.extended}</p>
        </div>

        {/* Competencies Badges */}
        <div className="mt-4 pt-4 border-t border-slate-800/80">
          <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
            Key Competencies & Advisory Focus
          </div>
          <div className="flex flex-wrap gap-1.5">
            {BIOGRAPHY.coreStrengths.map((strength, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-300 font-medium"
              >
                <CheckCircle2 className="w-3 h-3 text-[#0067b1]" />
                <span>{strength}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Professional Banking Services / Solutions */}
      <div className="bg-[#0d1424]/90 border border-slate-800/90 rounded-2xl p-5 sm:p-6 shadow-xl backdrop-blur-md">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-1">
              <Award className="w-4 h-4" />
              <span>Financing Portfolio</span>
            </div>
            <h3 className="text-lg font-bold font-heading text-white">
              RHB Banking Solutions
            </h3>
          </div>
          <span className="text-[11px] text-slate-400">Click to inquire</span>
        </div>

        <div className="space-y-2.5">
          {BANKING_SERVICES.map(service => (
            <button
              key={service.id}
              id={`service-card-${service.id}`}
              type="button"
              onClick={() => onSelectService(service.id)}
              className="w-full group text-left p-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 hover:border-[#0067b1]/60 transition-all flex items-center justify-between gap-3"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                  {getIcon(service.iconName)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                      {service.title}
                    </span>
                    {service.highlight && (
                      <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        {service.highlight}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-400 leading-normal mt-0.5">
                    {service.description}
                  </p>
                </div>
              </div>

              <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all shrink-0" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
