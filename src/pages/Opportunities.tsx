
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Bookmark, BookmarkCheck, CalendarDays, Tag } from 'lucide-react';
import { formatDistance } from 'date-fns';

// Mock data for initial UI development
// This will be replaced with Supabase data later
const mockOpportunities = [
  {
    id: 1,
    school: 'Adobe',
    title: 'Digital Academy Intern - Experience Design',
    tags: ['Internship', 'Summer', 'UI/UX Design'],
    posted_by: {
      name: 'John Doe',
      avatar_url: '',
    },
    created_at: new Date(Date.now() - 20 * 60 * 60 * 1000), // 20 hours ago
    logo_url: '',
    bookmarked: false,
  },
  {
    id: 2,
    school: 'NVIDIA',
    title: 'Software Engineering Intern, Distributed Scientific Computing',
    tags: ['AI/ML', 'Fall', 'Internship'],
    posted_by: {
      name: 'Jane Smith',
      avatar_url: '',
    },
    created_at: new Date(Date.now() - 21 * 60 * 60 * 1000), // 21 hours ago
    logo_url: '',
    bookmarked: true,
  },
  {
    id: 3,
    school: 'Vupico',
    title: 'Sustainability-focused Supply Chain Management',
    tags: ['AI/ML', 'SWE', 'Startup'],
    posted_by: {
      name: 'David Johnson',
      avatar_url: '',
    },
    created_at: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
    logo_url: '',
    bookmarked: false,
  },
  {
    id: 4,
    school: 'Zoom',
    title: 'Frontend Software Engineer',
    tags: ['Early Career', 'SWE'],
    posted_by: {
      name: 'Emily Brown',
      avatar_url: '',
    },
    created_at: new Date(Date.now() - 48 * 60 * 60 * 1000), // 2 days ago
    logo_url: '',
    bookmarked: false,
  },
  {
    id: 5,
    school: 'Zoom',
    title: 'DevOps Engineer',
    tags: ['AI/ML', 'DevOps', 'SWE'],
    posted_by: {
      name: 'Michael Wilson',
      avatar_url: '',
    },
    created_at: new Date(Date.now() - 48 * 60 * 60 * 1000), // 2 days ago
    logo_url: '',
    bookmarked: true,
  },
];

// Get unique schools for the dropdown
const schools = [...new Set(mockOpportunities.map(opp => opp.school))];

// Get unique tags for the filter
const allTags = [...new Set(mockOpportunities.flatMap(opp => opp.tags))];

const Opportunities = () => {
  // Wrap the useLanguage hook in a try-catch block
  let t;
  try {
    const { t: translate } = useLanguage();
    t = translate;
  } catch (error) {
    console.error('Language context error:', error);
    // Fallback translation function if context is not available
    t = (key: string) => {
      const fallbackTranslations: Record<string, string> = {
        navOpportunities: 'Opportunities',
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
        sortByDate: 'Sort by date'
      };
      return fallbackTranslations[key] || key;
    };
  }
  
  // State for filters
  const [showBookmarked, setShowBookmarked] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedSchool, setSelectedSchool] = useState<string | null>(null);
  const [sortNewest, setSortNewest] = useState(true);
  const [opportunities, setOpportunities] = useState(mockOpportunities);

  // Toggle bookmark status
  const toggleBookmark = (id: number) => {
    setOpportunities(
      opportunities.map(opp => 
        opp.id === id ? { ...opp, bookmarked: !opp.bookmarked } : opp
      )
    );
  };

  // Apply filters to opportunities
  const filteredOpportunities = opportunities
    .filter(opp => !showBookmarked || opp.bookmarked)
    .filter(opp => !selectedSchool || opp.school === selectedSchool)
    .filter(opp => 
      selectedTags.length === 0 || 
      opp.tags.some(tag => selectedTags.includes(tag))
    )
    .sort((a, b) => {
      if (sortNewest) {
        return b.created_at.getTime() - a.created_at.getTime();
      } else {
        return a.created_at.getTime() - b.created_at.getTime();
      }
    });

  // Get tag badge color based on tag name
  const getTagColor = (tag: string) => {
    switch (tag) {
      case 'AI/ML':
        return 'bg-yellow-100 text-yellow-800';
      case 'Internship':
        return 'bg-blue-100 text-blue-800';
      case 'Summer':
      case 'Fall':
        return 'bg-purple-100 text-purple-800';
      case 'UI/UX Design':
        return 'bg-blue-100 text-blue-800';
      case 'SWE':
        return 'bg-green-100 text-green-800';
      case 'Startup':
        return 'bg-yellow-800 text-white';
      case 'Early Career':
        return 'bg-blue-100 text-blue-800';
      case 'DevOps':
        return 'bg-pink-100 text-pink-800';
      case 'Healthcare':
        return 'bg-red-100 text-red-800';
      case 'Data Science':
        return 'bg-teal-100 text-teal-800';
      case 'Cybersecurity':
        return 'bg-orange-100 text-orange-800';
      case 'Co-op':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Format date to "Xh ago" or "Xd ago"
  const formatTimeAgo = (date: Date) => {
    return formatDistance(date, new Date(), { addSuffix: false });
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8">
          <h1 className="text-3xl font-bold text-etheri-blue">
            {t('navOpportunities')} 🔍
          </h1>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8">
          <Button 
            variant={showBookmarked ? "default" : "outline"} 
            onClick={() => setShowBookmarked(!showBookmarked)}
            className="flex items-center gap-2"
          >
            <Bookmark className="h-4 w-4" />
            {t('bookmarked')}
          </Button>

          <div className="flex items-center gap-2">
            <Tag className="h-4 w-4" />
            <ToggleGroup type="multiple" variant="outline">
              {allTags.map(tag => (
                <ToggleGroupItem 
                  key={tag} 
                  value={tag}
                  onClick={() => {
                    if (selectedTags.includes(tag)) {
                      setSelectedTags(selectedTags.filter(t => t !== tag));
                    } else {
                      setSelectedTags([...selectedTags, tag]);
                    }
                  }}
                  className={selectedTags.includes(tag) ? "bg-primary text-primary-foreground" : ""}
                >
                  {tag}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>

          <Select onValueChange={(value) => setSelectedSchool(value || null)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder={t('company')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Companies</SelectItem>
              {schools.map(school => (
                <SelectItem key={school} value={school}>{school}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button 
            variant="outline" 
            onClick={() => setSortNewest(!sortNewest)}
            className="flex items-center gap-2"
          >
            <CalendarDays className="h-4 w-4" />
            {sortNewest ? t('newestFirst') : t('oldestFirst')}
          </Button>
        </div>

        {/* Column Headers */}
        <div className="hidden md:grid md:grid-cols-4 gap-4 mb-4 font-medium text-gray-600 px-4">
          <div>{t('company')}</div>
          <div>{t('title')}</div>
          <div>{t('tags')}</div>
          <div>{t('postedBy')}</div>
        </div>

        {/* Opportunities List */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          {filteredOpportunities.length === 0 ? (
            <div className="py-12 text-center text-gray-500">
              <p>{t('noOpportunitiesFound')}</p>
            </div>
          ) : (
            filteredOpportunities.map((opportunity) => (
              <div 
                key={opportunity.id} 
                className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 border-b border-gray-100 hover:bg-gray-50"
              >
                {/* Company */}
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-md flex items-center justify-center text-xs mr-3">
                    {opportunity.logo_url ? (
                      <img src={opportunity.logo_url} alt={opportunity.school} className="w-full h-full object-contain" />
                    ) : (
                      opportunity.school.charAt(0)
                    )}
                  </div>
                  <span className="font-medium">{opportunity.school}</span>
                </div>

                {/* Title */}
                <div className="font-medium text-blue-600 hover:underline cursor-pointer">
                  {opportunity.title}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {opportunity.tags.map((tag, index) => (
                    <Badge key={index} className={getTagColor(tag)}>
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Posted By */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Avatar className="h-8 w-8 mr-2">
                      <AvatarImage src={opportunity.posted_by.avatar_url} alt={opportunity.posted_by.name} />
                      <AvatarFallback>{opportunity.posted_by.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-gray-500">{formatTimeAgo(opportunity.created_at)} ago</span>
                  </div>
                  
                  <button 
                    onClick={() => toggleBookmark(opportunity.id)}
                    className="text-gray-400 hover:text-blue-500"
                  >
                    {opportunity.bookmarked ? (
                      <BookmarkCheck className="h-5 w-5 text-blue-500" />
                    ) : (
                      <Bookmark className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Opportunities;
