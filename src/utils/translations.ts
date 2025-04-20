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
  | 'languageAm'
  | 'bookmarked'
  | 'company'
  | 'title'
  | 'tags'
  | 'postedBy'
  | 'newestFirst'
  | 'oldestFirst'
  | 'noOpportunitiesFound'
  | 'toggleBookmark'
  | 'filterByTags'
  | 'filterByCompany'
  | 'sortByDate';

const translations = {
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
    languageAm: 'Amharic',
    bookmarked: 'Bookmarked',
    company: 'Company',
    title: 'Title',
    tags: 'Tags',
    postedBy: 'Posted By',
    newestFirst: 'Date Posted: Newest',
    oldestFirst: 'Date Posted: Oldest',
    noOpportunitiesFound: 'No opportunities found',
    toggleBookmark: 'Toggle bookmark',
    filterByTags: 'Filter by tags',
    filterByCompany: 'Filter by company',
    sortByDate: 'Sort by date',
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
    languageAm: 'አማርኛ',
    bookmarked: 'ተመዝጊቡ',
    company: 'ኩባንያ',
    title: 'ኣርእስቲ',
    tags: 'መለለዪታታት',
    postedBy: 'ዝለጠፎ',
    newestFirst: 'ዝተለጠፈሉ: ሓድሽ',
    oldestFirst: 'ዝተለጠፈሉ: ጥንታዊ',
    noOpportunitiesFound: 'ዕድላት ኣይተረኸቡን',
    toggleBookmark: 'ምልክት ቦታ ለውጥ',
    filterByTags: 'ብመለለዪታት ኣጻሪ',
    filterByCompany: 'ብኩባንያ ኣጻሪ',
    sortByDate: 'ብዕለት ጎስጕስ',
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
    languageAm: 'አማርኛ',
    bookmarked: 'ምልክት ተደርጎበታል',
    company: 'ኩባንያ',
    title: 'ርዕስ',
    tags: 'መለያዎች',
    postedBy: 'የለጠፈው',
    newestFirst: 'የተለጠፈበት ቀን: አዲስ',
    oldestFirst: 'የተለጠፈበት ቀን: ጥንታዊ',
    noOpportunitiesFound: 'ምንም እድሎች ��ልተገኙም',
    toggleBookmark: 'ምልክት ቦታ ቀይር',
    filterByTags: 'በመለያዎች አጣራ',
    filterByCompany: 'በኩባንያ አጣራ',
    sortByDate: 'በቀን ደርድር',
  },
};

export { translations };
export type { Language, TranslationKey };
