import { ContactInfo, BankingService, SocialLink } from '../types';

export const PROFILE_DATA: ContactInfo = {
  name: 'Mohd Irwan AK',
  salutation: 'En.',
  role: 'Assistant Sales Manager',
  company: 'RHB Bank Berhad',
  companyRegNo: '196501000373 (6171-M)',
  branch: 'Permas Jaya Branch (2nd Floor)',
  addressLines: [
    'No 35 & 37, 2nd Floor',
    'Jalan Permas 10/2',
    'Bandar Baru Permas Jaya',
    '81750 Masai, Johor Bahru',
    'Johor Darul Takzim, Malaysia.'
  ],
  cityState: 'Johor Bahru, Johor',
  country: 'Malaysia',
  phoneDisplay: '+6019 944 4845',
  phoneRaw: '+60199444845',
  email: 'mohd.irwan.abdul@rhbgroup.com',
  websiteDisplay: 'www.rhbgroup.com',
  websiteUrl: 'https://www.rhbgroup.com',
  whatsappUrl: 'https://wa.me/60199444845',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=RHB+Bank+Jalan+Permas+10%2F2+Bandar+Baru+Permas+Jaya+Johor+Bahru'
};

export const BIOGRAPHY = {
  summary:
    'Dedicated financial advisory professional and Assistant Sales Manager with RHB Bank Berhad in Johor Bahru. With a consultative, client-first methodology, Mohd Irwan partners with homebuyers, property investors, business founders, and private individuals across southern Malaysia to structure competitive mortgage, commercial, and personal financing solutions.',
  extended:
    'Anchored in the bustling commercial hub of Permas Jaya, Johor Bahru, Irwan provides personalized guidance spanning residential property acquisition, subsale and refinancing restructuring, SME working capital facilities, and wealth preservation strategies. Backed by RHB’s premier financial network, every solution is engineered for financial agility, clear terms, and expedited processing.',
  coreStrengths: [
    'Mortgage & Property Financing Advisory',
    'SME & Commercial Credit Solutions',
    'Debt Consolidation & Refinancing',
    'Priority Client Banking Management',
    'Fast-Track Application Processing'
  ]
};

export const BANKING_SERVICES: BankingService[] = [
  {
    id: 'mortgage',
    title: 'Home & Property Mortgage',
    description: 'Competitive financing for residential purchases, new launches, subsale properties, and refinancing with flexible repayment tenures.',
    iconName: 'Home',
    highlight: 'Up to 90%+ margin',
    defaultMessage: 'Hi Mohd Irwan, I would like to consult with you regarding RHB Home & Property Mortgage financing options.'
  },
  {
    id: 'refinance',
    title: 'Property Refinancing & Cash-Out',
    description: 'Unlock capital and optimize interest rates by refinancing existing properties or consolidating higher-interest facilities.',
    iconName: 'RefreshCw',
    highlight: 'Rate optimization',
    defaultMessage: 'Hi Mohd Irwan, I am interested in exploring property refinancing and cash-out facilities with RHB Bank.'
  },
  {
    id: 'sme-business',
    title: 'SME & Commercial Facilities',
    description: 'Working capital, trade facilities, and commercial asset financing engineered to fuel business expansions and liquidity.',
    iconName: 'Briefcase',
    highlight: 'SME growth packages',
    defaultMessage: 'Hi Mohd Irwan, I would like to inquire about RHB SME & Commercial business financing solutions.'
  },
  {
    id: 'personal-financing',
    title: 'Personal & Term Financing',
    description: 'Hassle-free personal financing facilities with attractive profit rates, transparent terms, and swift turnaround.',
    iconName: 'CreditCard',
    highlight: 'Fast approvals',
    defaultMessage: 'Hi Mohd Irwan, I would like to inquire about RHB personal financing and credit facilities.'
  },
  {
    id: 'wealth-deposit',
    title: 'Fixed Deposits & Premier Banking',
    description: 'High-yield term deposits, wealth preservation instruments, and tailored banking perks for valued depositors.',
    iconName: 'ShieldCheck',
    highlight: 'Capital growth',
    defaultMessage: 'Hi Mohd Irwan, please share information regarding current RHB promotional deposit rates and wealth options.'
  }
];

export const PROFESSIONAL_LINKS: SocialLink[] = [
  {
    label: 'RHB Bank Official Portal',
    url: 'https://www.rhbgroup.com',
    icon: 'Globe'
  },
  {
    label: 'Permas Jaya Branch Location',
    url: 'https://www.google.com/maps/search/?api=1&query=RHB+Bank+Jalan+Permas+10%2F2+Bandar+Baru+Permas+Jaya+Johor+Bahru',
    icon: 'MapPin'
  },
  {
    label: 'RHB Group Corporate Profile',
    url: 'https://www.rhbgroup.com/corporate/index.html',
    icon: 'Building2'
  }
];
