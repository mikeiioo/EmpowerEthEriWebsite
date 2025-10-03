
type Language = 'en' | 'ti' | 'am';

type TranslationKey = 
  | 'navHome'
  | 'navAbout'
  | 'navDirectory'
  | 'navResources'
  | 'navEvents'
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
  // Home page
  | 'empowerEthEri'
  | 'homeTagline'
  | 'impactTitle'
  | 'ourMission'
  | 'ourMissionDescription'
  | 'learnMoreAboutUs'
  | 'youthMentored'
  | 'activeMentors'
  | 'schoolsAcrossCountry'
  | 'readyToGetInvolved'
  | 'readyToGetInvolvedDescription'
  | 'findMentor'
  | 'becomeMentor'
  // About page
  | 'aboutUs'
  | 'ourVision'
  | 'visionStatement'
  | 'missionDescription'
  | 'collegeAdmissions'
  | 'collegeAdmissionsDesc'
  | 'scholarshipSupport'
  | 'scholarshipSupportDesc'
  | 'careerGuidance'
  | 'careerGuidanceDesc'
  | 'expandingHabeshaNetwork'
  | 'expandingHabeshaNetworkDesc'
  | 'faqTitle'
  | 'faqQuestion1'
  | 'faqAnswer1'
  | 'faqQuestion2'
  | 'faqAnswer2'
  | 'faqQuestion3'
  | 'faqAnswer3'
  | 'faqQuestion4'
  | 'faqAnswer4'
  | 'faqQuestion5'
  | 'faqAnswer5'
  // Directory page
  | 'directoryDescription'
  // Resources page
  | 'applicationsTitle'
  | 'applicationsDesc'
  | 'scholarshipsTitle'
  | 'scholarshipsDesc'
  | 'academicsTitle'
  | 'academicsDesc'
  | 'programsTitle'
  | 'programsDesc'
  // Scholarships page
  | 'scholarshipsPageDesc'
  | 'backToResources'
  | 'searchScholarships'
  | 'noResults'
  | 'visitSite'
  // Applications page
  | 'applicationsPageDesc'
  | 'searchApplications'
  // Programs page
  | 'programsPageDesc'
  | 'searchPrograms'
  // Academics page
  | 'academicsPageDesc'
  | 'searchAcademics';

const translations = {
  en: {
    navHome: 'Home',
    navAbout: 'About',
    navDirectory: 'Directory',
    navEvents: "Events",
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
    // Home page
    empowerEthEri: 'EmpowerEthEri',
    homeTagline: 'Bringing Academic and Career Empowerment to the Habesha Diaspora',
    impactTitle: 'The Impact we have made so far...',
    ourMission: 'Our Mission',
    ourMissionDescription: 'EmpowerEthEri is a nonprofit mentorship program dedicated to connecting East African youth within the Metro within the Metro Atlanta community to mentors who can guide them through college applications, career development, and navigating adulthood.',
    learnMoreAboutUs: 'Learn More About Us',
    youthMentored: 'Youth Mentored',
    activeMentors: 'Active Mentors',
    schoolsAcrossCountry: 'schools across the country',
    readyToGetInvolved: 'Ready to Get Involved?',
    readyToGetInvolvedDescription: 'Whether you\'re looking for a mentor or want to share your knowledge with the next generation, we have a place for you in our community. Registration is closed for the 2025- 2026 season but stay updated through our socials for resources',
    findMentor: 'Find a Mentor',
    becomeMentor: 'Become a Mentor',
    // About page
    aboutUs: 'About Us',
    ourVision: 'Our Vision',
    visionStatement: 'EmpowerEthEri hopes to realize a future where every East African high school student in the Metro Atlanta area understands their options for higher education and maximizes their potential.',
    missionDescription: 'EmpowerEthEri aims to maximize higher education opportunities for East African youth by providing information and resources to ensure their success. Our organization utilizes a free mentorship program created by first-generation East African college students and conducts informational events tailored to support academic growth and achievement. When students are fully equipped to succeed during the college application process, we believe this can then empower kids to fulfill their potential—whatever that may look like.',
    collegeAdmissions: 'College Admissions',
    collegeAdmissionsDesc: 'Guidance and support for navigating the college application process and higher education opportunities.',
    scholarshipSupport: 'Scholarship Support',
    scholarshipSupportDesc: 'Assistance in finding and applying for scholarships to make education more accessible and affordable.',
    careerGuidance: 'Career Guidance',
    careerGuidanceDesc: 'Connect youth with professionals in diverse fields to explore career paths and build networks.',
    expandingHabeshaNetwork: 'Expanding Community',
    expandingHabeshaNetworkDesc: 'Expanding community and building connections between students and mentors to strengthen cultural bonds and professional relationships.',
    faqTitle: 'FAQ',
    faqQuestion1: 'What is EmpowerEthEri?',
    faqAnswer1: 'EmpowerEthEri is a mentorship program connecting East African youth with established older peers for guidance, support, and community building.',
    faqQuestion2: 'Who can join as a mentee?',
    faqAnswer2: 'Any young person of East African descent in high school who is looking for guidance in education, career, or cultural identity.',
    faqQuestion3: 'How do I become a mentor?',
    faqAnswer3: 'Please contact our main office through our social media or email.',
    faqQuestion4: 'Is the program free?',
    faqAnswer4: 'Yes, all mentorship services are provided free of charge to ensure accessibility for all youth.',
    faqQuestion5: 'Where do mentorship sessions take place?',
    faqAnswer5: 'Mentorship can be conducted virtually or in-person depending on location and preferences of the mentor-mentee pair. However there will be many inperson and virtual events with the everyone in the program',
    // Directory page
    directoryDescription: 'Meet the mentors behind EmpowerEthEri and stay connected!',
    // Resources page
    applicationsTitle: 'Applications',
    applicationsDesc: 'Find internship, college, and job application resources.',
    scholarshipsTitle: 'Scholarships',
    scholarshipsDesc: 'Browse scholarships tailored for Eritrean and Ethiopian youth.',
    academicsTitle: 'Academics',
    academicsDesc: 'Access study guides, tutoring, and academic support links.',
    programsTitle: 'Programs',
    programsDesc: 'Discover mentorship and extracurricular programs.',
    // Scholarships page
    scholarshipsPageDesc: 'Explore scholarships for Eritrean and Ethiopian students as well as first-generation, immigrant, and Black youth.',
    backToResources: '← Back to Resources',
    searchScholarships: 'Search scholarships...',
    noResults: 'No results found.',
    visitSite: 'Visit Site',
    // Applications page
    applicationsPageDesc: 'Browse our list of resources for college, internship, and job applications.',
    searchApplications: 'Search applications...',
    // Programs page
    programsPageDesc: 'Discover mentorship opportunities and extracurricular programs that support youth in your community!',
    searchPrograms: 'Search programs...',
    // Academics page
    academicsPageDesc: 'Browse study guides, tutoring, and academic support resources to help you thrive.',
    searchAcademics: 'Search academic resources...',
  },
  ti: {
    navHome: 'ገዛ',
    navAbout: 'ብዛዕባና',
    navDirectory: 'ዝርዝር',
    navResources: 'ሰነዳት',
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
    // Home page
    empowerEthEri: 'ኢምፓወርኢትኢሪ',
    homeTagline: 'ንሃበሻ ዲያስፖራ ኣካዳሚክ ኣምኣት ምሃብ',
    impactTitle: 'ክሳብ ሕጂ ዝገበርናዮ ጽልዋ...',
    ourMission: 'መልእኽትና',
    ourMissionDescription: 'ኢምፓወርኢትኢሪ ኣብ ሜትሮ ኣትላንታ ህንጻ ንዘለው ዓበይቲ ኤርትራውያንን ኢትዮጵያውያንን መንእሰያት ምስ መማኽሮም ዘራኽብ ድማ ኣካል ትካል እዩ።',
    learnMoreAboutUs: 'ተወሳኺ ብዛዕባና ተመሃር',
    youthMentored: 'ዝተመኽሩ መንእሰያት',
    activeMentors: 'ንቡር መማኽሮም',
    schoolsAcrossCountry: 'ኣብ ሃገር ዘለዉ ቤት ትምህርቲ',
    readyToGetInvolved: 'ክትሳተፍ ድሉው ዲኻ?',
    readyToGetInvolvedDescription: 'መማኻሪ ትደሊ ወይ ንዝመጽእ ወለዶ ፍልጠትካ ክትካፍል ትደሊ፣ ኣብ ማሕበረሰብና ቦታካ ኣሎ።',
    findMentor: 'መማኻሪ ርከብ',
    becomeMentor: 'መማኻሪ ኩን',
    // About page
    aboutUs: 'ብዛዕባና',
    ourVision: 'ራእይና',
    visionStatement: 'ኢምፓወርኢትኢሪ ኣብ ሜትሮ ኣትላንታ ዞባ ዘሎ ዝኾነ ቃል ኣፍሪቃዊ ቤት ትምህርቲ ተማሃራይ ንላዕለዋይ ትምህርቲ ዘለዎ ኣማራጺታት ዝርድእን ዓቕሙ ዝመልእን ዕላማ ይሰርዕ።',
    missionDescription: 'ኢምፓወርኢትኢሪ ንቃል ኣፍሪቃዊ መንእሰያት ንላዕለዋይ ትምህርቲ እዋናት ንምውሳኽ ሓበሬታን ሃፍትን ብምሃብ ዝዓለመሉ እዩ። ትካልና ብቀዳሞት ወለዶ ቃል ኣፍሪቃዊ ዩኒቨርሲቲ ተመሃሮ ዝተፈጥረ ብዘይ ክፍሊት መማኽርቲ መደብ ይጥቀም።',
    collegeAdmissions: 'ኮለጅ መእተዊ',
    collegeAdmissionsDesc: 'ንኮለጅ ኣተዋዊ ሕቶን ንላዕለዋይ ትምህርቲ እዋናትን ምምራሕን ደገፍን።',
    scholarshipSupport: 'ዕጩንነት ደገፍ',
    scholarshipSupportDesc: 'ዕጩንነት ንምርካብን ንምዝላቕን ሓገዝ፣ ትምህርቲ ተበጻሒ ንምግባር።',
    careerGuidance: 'ስራሕ ምምራሕ',
    careerGuidanceDesc: 'መንእሰያት ምስ ዝተፈላለዩ ዓውድታት ፕሮፌሽናላት ንምራብጣን ስራሕ መስመራትን ኔትወርክን ንምፍታሽ።',
    expandingHabeshaNetwork: 'ሃበሻ ኔትወርክ ምስፋሕ',
    expandingHabeshaNetworkDesc: 'ኣብ ሃበሻ ማሕበረሰብ ውሽጢ ርክባት ምህናጽ፣ ባህላዊ ራኽስታትን ፕሮፌሽናል ርክባትን ንምጽናዕ።',
    faqTitle: 'ተደጋጋሚ ሕቶታት',
    faqQuestion1: 'እንታይ እዩ ኢምፓወርኢትኢሪ?',
    faqAnswer1: 'ኢምፓወርኢትኢሪ ኤርትራውያንን ኢትዮጵያውያንን መንእሰያት ምስ ዝተረጋገጹ ዓበይቲ ዓርክታቶም ንምምራሕ፣ ደገፍን ማሕበረሰብ ህንጻን ዘራኽብ መማኻሪ መደብ እዩ።',
    faqQuestion2: 'መን እዩ ከም ተማሃራይ ክሳተፍ ዝኽእል?',
    faqAnswer2: 'ኣብ ሃይ ስኩል ዘሎ ዝኾነ ኤርትራዊ ወይ ኢትዮጵያዊ ወረዳ መንእሰይ፣ ኣብ ትምህርቲ፣ ስራሕ ወይ ባህላዊ ማንነት ምምራሕ ዝደሊ።',
    faqQuestion3: 'ከመይ ጌረ መማኻሪ ክኸውን እኽእል?',
    faqAnswer3: 'በጃኻ ብሶሻል ሚድያ ወይ ኢመይል ንዋና ቤት ጽሕፈትና ተወከስ።',
    faqQuestion4: 'እቲ መደብ ብዘይ ክፍሊት ድዩ?',
    faqAnswer4: 'እወ፣ ኩሉ መማኽርቲ ግልጋሎታት ንኩሎም መንእሰያት ተበጻሒነት ንምርግጋጽ ብዘይ ክፍሊት ይወሃብ።',
    faqQuestion5: 'መማኽርቲ ሰለስተታት ኣበይ ይፍጸም?',
    faqAnswer5: 'መማኽርቲ ከም ቦታን ምርጫን መማኻሪ-ተማሃራይ ጾታ፣ ቨርቹዋል ወይ ዝተተንጸርሒ ክኸውን ይኽእል። ይኹን እምበር ምስ ኩሉ ኣብቲ መደብ ዘለዉ ብዙሓት ዝተሳተፉን ቨርቹዋል ግንቦታትን ክኸውን እዩ።',
    // Directory page
    directoryDescription: 'ንኢምፓወርኢትኢሪ ድሕሪት ዘለዉ መማኽሮም ተራኸቡን ተራኸቡን!',
    // Resources page
    applicationsTitle: 'ኣተዋዊታት',
    applicationsDesc: 'ኢንተርንሺፕ፣ ኮለጅን ስራሕ ኣተዋዊ ሃፍትታትን ርከቡ።',
    scholarshipsTitle: 'ዕጩንነታት',
    scholarshipsDesc: 'ንኤርትራውያንን ኢትዮጵያውያንን መንእሰያት ዝተዳለዉ ዕጩንነታት ቃኽሉ።',
    academicsTitle: 'ኣካዳሚክስ',
    academicsDesc: 'ናይ ትምህርቲ መምርሒታት፣ ቲዩተሪንግን ኣካዳሚክ ደገፍ ኣገናዕታትን ተበግሱ።',
    programsTitle: 'መደባት',
    programsDesc: 'መማኽርቲን ተወሳኺ ትምህርታዊ መደባትን ኣጽናዑ።',
    // Scholarships page
    scholarshipsPageDesc: 'ንኤርትራውያን፣ ኢትዮጵያውያን ተማሃሮ፣ ቀዳሞት ወለዶ፣ ስደተኛታትን ጸሊም መንእሰያትን ዕጩንነታት ኣጽናዑ።',
    backToResources: '← ናብ ሃፍትታት ተመለስ',
    searchScholarships: 'ዕጩንነታት ደሌ...',
    noResults: 'ውጽኢት ኣይተረኸበን።',
    visitSite: 'ናብቲ ሳይት ኪድ',
    // Applications page
    applicationsPageDesc: 'ንኮለጅ፣ ኢንተርንሺፕን ስራሕ ኣተዋዊታትን ንዝኾነ ሃፍትታት ዝርዝርና ቃኽሉ።',
    searchApplications: 'ኣተዋዊታት ደሌ...',
    // Programs page
    programsPageDesc: 'ኣብ ማሕበረሰብኩም ንመንእሰያት ዝደግፉ መማኽርቲ እዋናትን ተወሳኺ ትምህርታዊ መደባትን ኣጽናዑ!',
    searchPrograms: 'መደባት ደሌ...',
    // Academics page
    academicsPageDesc: 'ንምዕባለ ዝሕግዙ ናይ ትምህርቲ መምርሒታት፣ ቲዩተሪንግን ኣካዳሚክ ደገፍ ሃፍትታትን ቃኽሉ።',
    searchAcademics: 'ኣካዳሚክ ሃፍትታት ደሌ...',
  },
  am: {
    navHome: 'መነሻ',
    navAbout: 'ስለኛ',
    navDirectory: 'ማውጫ',
    navResources: 'ግብዓቶች',
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
    // Home page
    empowerEthEri: 'ኢምፓወርኢትኢሪ',
    homeTagline: 'ለሀበሻ ዲያስፖራ የአካዴሚክ እና የሙያ ማበረታቻ ማምጣት',
    impactTitle: 'እስካሁን ያደረግናው ተፅእኖ...',
    ourMission: 'የኛ ተልዕኮ',
    ourMissionDescription: 'ኢምፓወርኢትኢሪ በሜትሮ አትላንታ ማህበረሰብ ውስጥ ያሉ ወጣት ኤርትራውያን እና ኢትዮጵያውያን በኮሌጅ ማመልከቻዎች፣ በሙያ ልማት እና በአዋቂነት ጉዞ ውስጥ ሊመሩአቸው የሚችሉ አማካሪዎች ጋር የሚያገናኝ የመገልገሊያ አልባ መማሪያ ፕሮግራም ነው።',
    learnMoreAboutUs: 'ስለኛ የበለጠ ተማር',
    youthMentored: 'የተመከሩ ወጣቶች',
    activeMentors: 'ንቁ አማካሪዎች',
    schoolsAcrossCountry: 'በሀገሪቱ ዙሪያ ያሉ ትምህርት ቤቶች',
    readyToGetInvolved: 'ለመሳተፍ ዝግጁ ነህ?',
    readyToGetInvolvedDescription: 'አማካሪ እየፈለጉ ወይም ለቀጣዩ ትውልድ እውቀታቸውን ለማካፈል እየፈለጉ ነው፣ በማህበረሰባችን ውስጥ ለእርስዎ ቦታ አለን።',
    findMentor: 'አማካሪ ፈልግ',
    becomeMentor: 'አማካሪ ሁን',
    // About page
    aboutUs: 'ስለኛ',
    ourVision: 'ራዕያችን',
    visionStatement: 'ኢምፓወርኢትኢሪ በሜትሮ አትላንታ አካባቢ ያለ እያንዳንዱ የምስራቅ አፍሪካ ሁለተኛ ደረጃ ተማሪ ለከፍተኛ ትምህርት ያላቸውን አማራጮች እንዲረዱ እና አቅማቸውን እንዲያሳዩ የሚያዘጋጅበት ወደፊት እንዲሳካ ይደገፋል።',
    missionDescription: 'ኢምፓወርኢትኢሪ ለምስራቅ አፍሪካ ወጣቶች የከፍተኛ ትምህርት እድሎችን ለመጨመር መረጃና ሀብቶችን በመስጠት ስኬታቸውን ለማረጋገጥ ይዓለማል። ድርጅታችን በመጀመሪያ ትውልድ የምስራቅ አፍሪካ ዩኒቨርሲቲ ተማሪዎች የተፈጠረ ነጻ መማሪያ ፕሮግራም ይጠቀማል።',
    collegeAdmissions: 'የኮሌጅ መግቢያ',
    collegeAdmissionsDesc: 'የኮሌጅ ማመልከቻ ሂደት እና የከፍተኛ ትምህርት እድሎችን ለማሰስ መመሪያ እና ድጋፍ።',
    scholarshipSupport: 'የስኮላርሺፕ ድጋፍ',
    scholarshipSupportDesc: 'ትምህርትን የበለጠ ተደራሽ እና በተመጣጣኝ ዋጋ ለማድረግ ስኮላርሺፖችን በማግኘት እና በማመልከት ረገድ እርዳታ።',
    careerGuidance: 'የሙያ መመሪያ',
    careerGuidanceDesc: 'ወጣቶችን ከተለያዩ ዘርፎች ፕሮፌሽናሎች ጋር ማገናኘት የሙያ መንገዶችን ለመዳሰስ እና አውታረ መረቦች ለመገንባት።',
    expandingHabeshaNetwork: 'የሀበሻ አውታረ መረብ ማስፋት',
    expandingHabeshaNetworkDesc: 'በሀበሻ ማህበረሰብ ውስጥ ግንኙነቶችን መገንባት ባህላዊ ትስስርን እና ሙያዊ ግንኙነቶችን ለማጠናከር።',
    faqTitle: 'ተደጋጋሚ ጥያቄዎች',
    faqQuestion1: 'ኢምፓወርኢትኢሪ ምንድ ነው?',
    faqAnswer1: 'ኢምፓወርኢትኢሪ ኤርትራውያን እና ኢትዮጵያውያን ወጣቶችን ከተረጋገጡ የቆዩ አቻዎች ጋር ለመመሪያ፣ ድጋፍ እና የማህበረሰብ ግንባታ የሚያገናኝ የመማሪያ ፕሮግራም ነው።',
    faqQuestion2: 'ማን እንደ ተማሪ መሳተፍ ይችላል?',
    faqAnswer2: 'በሁለተኛ ደረጃ ትምህርት ቤት ያለ ማንኛውም ኤርትራዊ ወይም ኢትዮጵያዊ ወጣት፣ በትምህርት፣ በሙያ ወይም በባህላዊ ማንነት መመሪያ የሚፈልግ።',
    faqQuestion3: 'እንዴት አማካሪ መሆን እችላለሁ?',
    faqAnswer3: 'እባክዎ በሶሻል ሚዲያ ወይ በኢሜል ዋናውን ቢሮአችን ያግኙ።',
    faqQuestion4: 'ፕሮግራሙ ነጻ ነው?',
    faqAnswer4: 'አዎ፣ ሁሉም የመማሪያ አገልግሎቶች ለሁሉም ወጣቶች ተደራሽነትን ለማረጋገጥ ነጻ ይሰጣሉ።',
    faqQuestion5: 'የመማሪያ ክፍለ ጊዜዎች የት ይካሄዳሉ?',
    faqAnswer5: 'መማር በአማካሪ-ተማሪ ጥንድ አቀማመጥ እና ምርጫዎች ላይ በመመርኮዝ በቨርቹዋል ወይም በአካል ሊከናወን ይችላል። ይሁን እንጂ በፕሮግራሙ ውስጥ ካሉ ሁሉ ሰው ጋር ብዙ በአካል እና ቨርቹዋል ዝግጅቶች ይኖራሉ።',
    // Directory page
    directoryDescription: 'ከኢምፓወርኢትኢሪ ጀርባ ያሉትን አማካሪዎች ያገናኙ እና ተገናኙ!',
    // Resources page
    applicationsTitle: 'ማመልከቻዎች',
    applicationsDesc: 'የኢንተርንሺፕ፣ ኮሌጅ እና የስራ ማመልከቻ ሀብቶችን ያግኙ።',
    scholarshipsTitle: 'ስኮላርሺፖች',
    scholarshipsDesc: 'ለኤርትራውያን እና ኢትዮጵያውያን ወጣቶች የተነደፉ ስኮላርሺፖችን ይመልከቱ።',
    academicsTitle: 'አካዳሚክስ',
    academicsDesc: 'የጥናት መመሪያዎች፣ ቲዩተሪንግ እና የአካዳሚክ ድጋፍ አገናኞችን ይድረሱ።',
    programsTitle: 'ፕሮግራሞች',
    programsDesc: 'የመማሪያ እና ተጨማሪ የትምህርት ፕሮግራሞችን ያግኙ።',
    // Scholarships page
    scholarshipsPageDesc: 'ለኤርትራውያን እና ኢትዮጵያውያን ተማሪዎች እንዲሁም ለመጀመሪያ ትውልድ፣ ስደተኛ እና ጥቁር ወጣቶች ስኮላርሺፖችን ይመልከቱ።',
    backToResources: '← ወደ ሀብቶች ተመለስ',
    searchScholarships: 'ስኮላርሺፖችን ይፈልጉ...',
    noResults: 'ምንም ውጤት አልተገኘም።',
    visitSite: 'ጣቢያን ይጎብኙ',
    // Applications page
    applicationsPageDesc: 'ለኮሌጅ፣ ኢንተርንሺፕ እና የስራ ማመልከቻዎች የሀብቶች ዝርዝራችንን ይመልከቱ።',
    searchApplications: 'ማመልከቻዎችን ይፈልጉ...',
    // Programs page
    programsPageDesc: 'በማህበረሰብዎ ውስጥ ወጣቶችን የሚደግፉ የመማሪያ እድሎች እና ተጨማሪ የትምህርት ፕሮግራሞችን ያግኙ!',
    searchPrograms: 'ፕሮግራሞችን ይፈልጉ...',
    // Academics page
    academicsPageDesc: 'እርስዎ እንዲበለጽጉ የሚያግዙ የጥናት መመሪያዎች፣ ቲዩተሪንግ እና የአካዳሚክ ድጋፍ ሀብቶችን ይመልከቱ።',
    searchAcademics: 'የአካዳሚክ ሀብቶችን ይፈልጉ...',
  },
};

export { translations };
export type { Language, TranslationKey };
