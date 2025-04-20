
type Language = 'en' | 'ti' | 'am';

type TranslationKey = 
  | 'navHome'
  | 'navAbout'
  | 'navDirectory'
  | 'navResources'
  | 'navOpportunities'
  | 'navProfile'
  | 'tagline'
  | 'aboutFounder'
  | 'missionStatement'
  | 'ourGoals'
  | 'faq'
  | 'directoryMentors'
  | 'directoryContacts'
  | 'languageEn'
  | 'languageTi'
  | 'languageAm';

const translations: Record<Language, Record<TranslationKey, string>> = {
  en: {
    navHome: 'Home',
    navAbout: 'About',
    navDirectory: 'Directory',
    navResources: 'Resources',
    navOpportunities: 'Opportunities',
    navProfile: 'Profile',
    tagline: 'Bridging the gap one youth at a time',
    aboutFounder: 'Our Founder',
    missionStatement: 'Mission Statement',
    ourGoals: 'Our Goals',
    faq: 'Frequently Asked Questions',
    directoryMentors: 'Mentors',
    directoryContacts: 'Contacts',
    languageEn: 'English',
    languageTi: 'Tigrinya',
    languageAm: 'Amharic'
  },
  ti: {
    navHome: 'ገዛ',
    navAbout: 'ብዛዕባና',
    navDirectory: 'ዝርዝር',
    navResources: 'ሰነዳት',
    navOpportunities: 'ዕድላት',
    navProfile: 'መግለጺ',
    tagline: 'ንመንእሰያት ሓደ ብሓደ ዝርርብ',
    aboutFounder: 'መስራቲና',
    missionStatement: 'ዕላማና',
    ourGoals: 'ሸቶታትና',
    faq: 'ዝበዝሑ ሕቶታት',
    directoryMentors: 'መማኽራን',
    directoryContacts: 'ርክባት',
    languageEn: 'እንግሊዝኛ',
    languageTi: 'ትግርኛ',
    languageAm: 'አማርኛ'
  },
  am: {
    navHome: 'መነሻ',
    navAbout: 'ስለኛ',
    navDirectory: 'ማውጫ',
    navResources: 'ግብዓቶች',
    navOpportunities: 'እድሎች',
    navProfile: 'መገለጫ',
    tagline: 'ወጣቶችን አንድ በአንድ ማገናኘት',
    aboutFounder: 'መስራቾቻችን',
    missionStatement: 'የተልዕኮ መግለጫ',
    ourGoals: 'ግቦቻችን',
    faq: 'የተደጋጋሚ ጥያቄዎች',
    directoryMentors: 'አማካሪዎች',
    directoryContacts: 'ግንኙነቶች',
    languageEn: 'እንግሊዘኛ',
    languageTi: 'ትግርኛ',
    languageAm: 'አማርኛ'
  }
};

export { translations };
export type { Language, TranslationKey };
