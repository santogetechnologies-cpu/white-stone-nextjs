// Replace these values only with approved business-card and commercial-register details.
export const company = {
  name: 'White Stone GmbH',
  email: process.env.NEXT_PUBLIC_BUSINESS_EMAIL?.trim() || '',
  phone: process.env.NEXT_PUBLIC_BUSINESS_PHONE?.trim() || '',
  address: process.env.NEXT_PUBLIC_BUSINESS_ADDRESS?.trim() || '',
  director: 'Saqib Ali',
  registerCourt: 'Amtsgericht München',
  registerNumber: '[HRB-Nummer ergänzen]',
  vatId: '[USt-IdNr. gemäß § 27a UStG ergänzen]',
  insurer: 'Allianz Versicherungs-AG',
  insurerTerritory: { de: 'Deutschland', en: 'Germany' }
};
