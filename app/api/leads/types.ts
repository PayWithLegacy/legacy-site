export type LeadBody = {
  legal_name: string;
  dba_name: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
};

export type DealTrackerLead = {
  apiKey: string;
  business_corporate_name: string;
  business_dba_name: string;
  first_name: string;
  last_name: string;
  email: string;
  phone1: string;
  city?: string;
  state?: string;
  zip?: string;
  business_address?: string;
  company_website?: string;
  startDate?: string;
  state_of_incorporation?: string;
  entityType?:
    | "Sole Proprietor"
    | "Partnership"
    | "Limited Liability Company"
    | "Limited Liability Partnership"
    | "S-Corporation"
    | "C-Corporation";
  accept_cc_vlead?: "Yes" | "No" | "N/A";
  ip_address?: string;
};
