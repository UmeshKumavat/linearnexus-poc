export interface Stat {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  timeframe: string;
}

export interface Activity {
  id: string;
  senderName: string;
  senderEmail: string;
  subject: string;
  time: string;
  status: 'replied' | 'pending' | 'ignored';
  intent: 'high' | 'medium' | 'low';
}

export interface Lead {
  id: string;
  leadName: string;
  company: string;
  score: number;
  status: 'New' | 'Contacted' | 'Qualified' | 'Proposal' | 'Closed Won' | 'Closed Lost';
  sourceEmail: string;
  owner: string;
  createdDate: string;
}

export interface Contact {
  id: string;
  name: string;
  email: string;
  company: string;
  jobTitle: string;
  source: string;
  createdDate: string;
}

export interface InboxMessage {
  id: string;
  sender: string;
  email: string;
  subject: string;
  body: string;
  intent: 'high' | 'medium' | 'low';
  time: string;
  account: 'Gmail' | 'Outlook' | 'IMAP';
  status: 'unread' | 'read' | 'replied';
}

export interface SidebarItem {
  name: string;
  path: string;
  icon: string;
}
