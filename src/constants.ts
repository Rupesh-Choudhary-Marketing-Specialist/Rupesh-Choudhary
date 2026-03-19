import React from 'react';

export interface Backlink {
  website: string;
  da: number;
  pa: number;
  spamScore: string;
  category: string;
}

export const BACKLINK_DATA: Backlink[] = [
  // Business Directories
  { website: "linkedin.com", da: 99, pa: 88, spamScore: "1%", category: "Business Directory" },
  { website: "facebook.com", da: 96, pa: 68, spamScore: "3%", category: "Business Directory" },
  { website: "yelp.com", da: 85, pa: 93, spamScore: "1%", category: "Business Directory" },
  { website: "crunchbase.com", da: 73, pa: 91, spamScore: "1%", category: "Business Directory" },
  { website: "indiamart.com", da: 72, pa: 75, spamScore: "1%", category: "Business Directory" },
  { website: "sulekha.com", da: 77, pa: 62, spamScore: "1%", category: "Business Directory" },
  { website: "justdial.com", da: 61, pa: 61, spamScore: "--", category: "Business Directory" },
  { website: "about.me", da: 74, pa: 92, spamScore: "11%", category: "Business Directory" },
  { website: "foursquare.com", da: 92, pa: 66, spamScore: "1%", category: "Business Directory" },
  
  // Guest Posting
  { website: "github.com", da: 96, pa: 87, spamScore: "1%", category: "Guest Posting" },
  { website: "buzzfeed.com", da: 93, pa: 77, spamScore: "1%", category: "Guest Posting" },
  { website: "quora.com", da: 93, pa: 77, spamScore: "10%", category: "Guest Posting" },
  { website: "academia.edu", da: 93, pa: 69, spamScore: "1%", category: "Guest Posting" },
  { website: "seekingalpha.com", da: 90, pa: 69, spamScore: "10%", category: "Guest Posting" },
  { website: "hubpages.com", da: 70, pa: 91, spamScore: "1%", category: "Guest Posting" },
  { website: "medium.com", da: 95, pa: 80, spamScore: "1%", category: "Guest Posting" },
  
  // Social Bookmarking
  { website: "twitter.com", da: 92, pa: 81, spamScore: "49%", category: "Social Bookmarking" },
  { website: "pinterest.com", da: 94, pa: 98, spamScore: "11%", category: "Social Bookmarking" },
  { website: "reddit.com", da: 92, pa: 91, spamScore: "1%", category: "Social Bookmarking" },
  { website: "digg.com", da: 92, pa: 80, spamScore: "1%", category: "Social Bookmarking" },
  { website: "slashdot.org", da: 91, pa: 73, spamScore: "1%", category: "Social Bookmarking" },
  { website: "tumblr.com", da: 86, pa: 100, spamScore: "28%", category: "Social Bookmarking" },
  
  // Image Backlinks
  { website: "imgur.com", da: 92, pa: 77, spamScore: "4%", category: "Image Backlink" },
  { website: "flickr.com", da: 92, pa: 95, spamScore: "17%", category: "Image Backlink" },
  { website: "behance.net", da: 92, pa: 84, spamScore: "1%", category: "Image Backlink" },
  { website: "deviantart.com", da: 90, pa: 87, spamScore: "1%", category: "Image Backlink" },
  { website: "pixabay.com", da: 94, pa: 84, spamScore: "4%", category: "Image Backlink" },
  { website: "dribbble.com", da: 92, pa: 79, spamScore: "7%", category: "Image Backlink" },
];

export const AI_TOOLS = [
  {
    category: "Strategy & General AI",
    tools: ["ChatGPT-4o", "Claude 3.5 Sonnet", "Google Gemini 1.5 Pro"]
  },
  {
    category: "SEO & Keyword Research",
    tools: ["SEMrush", "Ahrefs", "Surfer SEO", "Clearscope", "Rank Math", "Search Atlas", "Alli AI", "MarketMuse"]
  },
  {
    category: "Content Creation",
    tools: ["Jasper AI", "Copy.ai", "Writesonic", "Frase", "Writer.com", "Grammarly AI", "Quillbot"]
  },
  {
    category: "Email Marketing & CRM",
    tools: ["Klaviyo", "ActiveCampaign", "HubSpot AI", "Seventh Sense", "Lavender", "Encharge", "Apollo.io"]
  },
  {
    category: "Analytics & Performance",
    tools: ["GA4 AI", "Looker Studio", "Microsoft Clarity", "Triple Whale"]
  },
  {
    category: "Ads & Social Media",
    tools: ["Adzooma", "Revealbot", "Sprout Social", "Hootsuite", "AdCreative.ai"]
  },
  {
    category: "Visuals & Video",
    tools: ["Midjourney v7", "Canva Magic Studio", "Ideogram", "Runway Gen-3", "Descript", "ElevenLabs"]
  },
  {
    category: "Productivity & Automation",
    tools: ["Zapier", "Make.com", "Gumloop", "NotebookLM"]
  }
];
