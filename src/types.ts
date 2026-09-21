export interface ContactInfo {
  name: string;
  salutation?: string;
  role: string;
  company: string;
  companyRegNo: string;
  branch: string;
  addressLines: string[];
  cityState: string;
  country: string;
  phoneDisplay: string;
  phoneRaw: string;
  email: string;
  websiteDisplay: string;
  websiteUrl: string;
  whatsappUrl: string;
  mapsUrl: string;
}

export interface BankingService {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlight?: string;
  defaultMessage: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}
