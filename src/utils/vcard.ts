import { PROFILE_DATA } from '../data/profileData';

export function generateVCardString(): string {
  const addressFormatted = PROFILE_DATA.addressLines.join(', ');
  
  return [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:AK;Mohd Irwan;;;`,
    `FN:${PROFILE_DATA.name}`,
    `ORG:${PROFILE_DATA.company}`,
    `TITLE:${PROFILE_DATA.role}`,
    `TEL;TYPE=CELL,VOICE:${PROFILE_DATA.phoneRaw}`,
    `EMAIL;TYPE=WORK,INTERNET:${PROFILE_DATA.email}`,
    `URL:${PROFILE_DATA.websiteUrl}`,
    `ADR;TYPE=WORK:;;No 35 & 37 2nd Floor, Jalan Permas 10/2, Bandar Baru Permas Jaya;Masai, Johor Bahru;Johor;81750;Malaysia`,
    `LABEL;TYPE=WORK:${addressFormatted}`,
    `NOTE:Assistant Sales Manager - RHB Bank Berhad Permas Jaya Branch`,
    'END:VCARD'
  ].join('\r\n');
}

export function downloadVCard(): void {
  const vcardData = generateVCardString();
  const blob = new Blob([vcardData], { type: 'text/vcard;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `Mohd_Irwan_AK_RHB_Bank.vcf`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
