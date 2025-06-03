import { Name, Category } from '../types';

// Kurdish names with meanings
export const names: Name[] = [
  // General Names
  { id: '1', name: 'دانا', meaning: 'واتای خردمەند و ژیر', gender: 'male', popularity: 9, category: 'general' },
  { id: '2', name: 'لانە', meaning: 'شوێنی حەوانەوە و ئاسایش', gender: 'female', popularity: 8, category: 'general' },
  
  { id: '4', name: 'شیلان', meaning: 'جۆرێکە لە گوڵی سوور', gender: 'female', popularity: 9, category: 'general' },
  { id: '5', name: 'هەڵۆ', meaning: 'باڵندەیەکی بەهێز', gender: 'male', popularity: 7, category: 'general' },
  { id: '6', name: 'رۆژان', meaning: 'رۆژەکان', gender: 'female', popularity: 8, category: 'general' },
  { id: '7', name: 'ئاکۆ', meaning: 'واتای کۆکردنەوە و یەکگرتن', gender: 'male', popularity: 8, category: 'general' },
  { id: '8', name: 'تارا', meaning: 'ستێرە، ئەستێرەی رووناک', gender: 'female', popularity: 9, category: 'general' },
  
  // arami Names .................................
  { id: '9', name: 'هێمن', meaning: 'کەسێکی ئارام و لەسەرخۆ', gender: 'male', popularity: 8, category: 'arami' },
  { id: '3', name: 'ئارام', meaning: 'هێمن و لەسەرخۆ', gender: 'male', popularity: 10, category: 'arami' },
  { id: '10', name: 'پەخشان', meaning: 'وشەی پەخشان لە ئەدەبیات، نووسین', gender: 'female', popularity: 7, category: 'famous' },
  { id: '11', name: 'رەنجدەر', meaning: 'کەسێک ماندوو دەبێت', gender: 'male', popularity: 6, category: 'general' },
  { id: '12', name: 'نالی', meaning: 'ناوی شاعیرێکی گەورەی کورد', gender: 'male', popularity: 9, category: 'famous' },
  { id: '13', name: 'مەحوی', meaning: 'ناوی شاعیرێکی گەورەی کورد', gender: 'male', popularity: 8, category: 'famous' },
  { id: '14', name: 'چنار', meaning: 'ناوی دارێکی بەرز', gender: 'female', popularity: 8, category: 'general' },
  
  // Sport Names ERROR
  { id: '15', name: 'هەڵکەوت', meaning: 'دەرفەت یان هەل', gender: 'male', popularity: 7, category: 'general' },
  { id: '16', name: 'زانا', meaning: 'کەسێکی خاوەن زانیاری', gender: 'male', popularity: 8, category: 'general' },
  { id: '17', name: 'ئاسۆ', meaning: 'ئاسۆی ئاسمان، ئایندە', gender: 'male', popularity: 9, category: 'Nature' },
  { id: '18', name: 'لەیلا', meaning: 'شەوی تاریک، شەو', gender: 'female', popularity: 8, category: 'Nature' },
  { id: '19', name: 'هێرۆ', meaning: 'قارەمان، کەسێکی ئازا', gender: 'female', popularity: 7, category: 'general' },
  
  // Musician Names
  { id: '20', name: 'گۆران', meaning: 'ناوی هۆزێکی باشوری کوردستانە، ناوی مۆسیقارێکی ناسراوی کورد', gender: 'male', popularity: 9, category: 'famous' },
  { id: '21', name: 'شەهرام', meaning: 'ناوێکی فارسی بە واتای پاشای شار', gender: 'male', popularity: 8, category: 'famous' },
  { id: '22', name: 'نەزیرە', meaning: 'بێ وێنە، تاقانە', gender: 'female', popularity: 7, category: 'general' },
  { id: '23', name: 'هانا', meaning: 'هیوا و ئومێد', gender: 'female', popularity: 8, category: 'general' },
  { id: '24', name: 'نازدار', meaning: 'کەسێک کە خۆشەویست و ئازیزە', gender: 'female', popularity: 9, category: 'love' },
  
  // Actor Names
  { id: '25', name: 'ژاکاو', meaning: 'گوڵێکی وشک بوو و لاواز', gender: 'female', popularity: 6, category: 'general' },
  { id: '26', name: 'سەروین', meaning: 'بەرزترین، سەرەوە', gender: 'female', popularity: 7, category: 'general' },
  { id: '27', name: 'ئاوات', meaning: 'ئاوات و ئارەزوو', gender: 'male', popularity: 9, category: 'general' },
  { id: '28', name: 'نەرمین', meaning: 'نەرم، نیان', gender: 'female', popularity: 8, category: 'arami' },
  { id: '29', name: 'شاهۆ', meaning: 'ناوی شاخێکی کوردستان', gender: 'male', popularity: 7, category: 'Nature' },
  { id: '30', name: 'ئالان', meaning: 'جوانی و شکۆمەندی', gender: 'male', popularity: 8, category: 'gender' },
  
  // Nature Names
  { id: '31', name: 'باران', meaning: 'بارینی ئاو لە ئاسمان', gender: 'unisex', popularity: 8, category: 'Nature' },
  { id: '32', name: 'چیا', meaning: 'چیا', gender: 'unisex', popularity: 8, category: 'Nature' },
  { id: '33', name: 'دەریا', meaning: 'ڕێژیەکی زۆر ئاو', gender: 'unisex', popularity: 7, category: 'Nature' },
  { id: '34', name: 'ڕوبار', meaning: 'ڕێڕەوی ئاو', gender: 'female', popularity: 7, category: 'Nature' },
  { id: '35', name: 'باهۆز', meaning: 'گەردەلوول، گێژەڵووکە', gender: 'male', popularity: 6, category: 'Nature' },
  { id: '36', name: 'ڕۆژ', meaning: 'خۆر', gender: 'male', popularity: 7, category: 'Nature' },
  { id: '37', name: 'ڕۆژین', meaning: '-', gender: 'female', popularity: 7, category: 'Nature' },
  { id: '38', name: 'سیپان', meaning: 'ناوی چیایەکە لە کوردستانی باکوور', gender: 'male', popularity: 5, category: 'Nature' },
  { id: '39', name: 'ڕوناک', meaning: 'ڕوناکی', gender: 'female', popularity: 7, category: 'Nature' },
  { id: '40', name: 'بەفرین', meaning: 'لە بەفر دروستبوو', gender: 'female', popularity: 7, category: 'Nature' },
  
  // Love Names
  { id: '41', name: 'ژواب', meaning: 'ڕۆژێکی دیاریکراو', gender: '-unisex', popularity: 7, category: 'love' },
  { id: '42', name: 'دیاری', meaning: 'بەخشین', gender: 'male', popularity: 8, category: 'love' },
  { id: '43', name: 'سۆز', meaning: 'میهرەبانی', gender: 'female', popularity: 8, category: 'love' },
  { id: '44', name: 'یار', meaning: 'دۆست، خۆشەویست', gender: 'female', popularity: 6, category: 'love' },
  { id: '45', name: 'دڵدار', meaning: 'خۆشەویست', gender: 'male', popularity: 5, category: 'love' },
  { id: '46', name: 'یاران', meaning: 'خۆشەویستان', gender: 'female', popularity: 7, category: 'love' },
  { id: '47', name: 'بەسۆز', meaning: 'کەسێکی بەسۆز', gender: 'female', popularity: 8, category: 'love' },
  { id: '48', name: 'میهرەبان', meaning: 'کەسێکی دڵنەرم و بەسۆز', gender: 'female', popularity: 7, category: 'love' },
  { id: '49', name: 'نیگا', meaning: 'سەیرکرد"', gender: 'female', popularity: 5, category: 'love' },
  { id: '50', name: 'ئەڤین', meaning: 'خۆشەویستی', gender: 'female', popularity: 9, category: 'love' },
  
  // season Names
  { id: '51', name: 'بەهار', meaning: 'یەکێکە لە وەرزەکانی ساڵ', gender: 'female', popularity: 8, category: 'general' },
  { id: '52', name: 'گەلاوێژ', meaning: 'پێنجەمین مانگی ساڵ و دووەم مانگی ھاوینە', gender: 'female', popularity: 6, category: 'general' },
  { id: '53', name: 'پایز', meaning: 'یەکێکە لە وەرزەکانی ساڵ', gender: 'female', popularity: 5, category: 'general' },
  { id: '54', name: 'سالی', meaning: 'به‌پێی‌ساڵ، بەدرێژایی‌ساڵ، بەساڵ، ساڵێ', gender: 'female', popularity: 5, category: 'general' },
  { id: '55', name: 'نەورۆز', meaning: 'سەری ساڵی کوردی', gender: 'unisex', popularity: 8, category: 'general' },
  
  //flower Names
  { id: '56', name: 'شەوبۆ', meaning: 'جۆرە گوڵێکە بە شەو بۆنی دێت', gender: '', popularity: 6, category: 'flower' },
  { id: '57', name: 'سەوسەن', meaning: 'ناوی جۆرە گوڵێکە', gender: 'female', popularity: 5, category: 'flower' },
  { id: '58', name: 'هەڵاڵە', meaning: 'جۆره‌ گوڵێكه‌', gender: 'female', popularity: 7, category: 'flower' },
  { id: '59', name: 'دالیا', meaning: 'ناوی جۆرە گوڵێکە', gender: 'female', popularity: 7, category: 'flower' },
  { id: '60', name: 'لیندا', meaning: 'ناوی گوڵێکە', gender: 'female', popularity: 3, category: 'flower' },
  { id: '61', name: 'بنەوش', meaning: 'جۆرە گوڵێکە', gender: 'female', popularity: 5, category: 'flower' },
  { id: '62', name: 'ڕۆز', meaning: 'جۆرە گوڵێکە', gender: 'female', popularity: 7, category: 'flower' }, 
  { id: '101', name: 'خوناو', meaning: ' ئەو دڵۆپە ئاوەی لەوەرزی باران بارین دەکەوێتە سەر گیا و گەڵاکان ', gender: 'female', popularity: 6, category: 'general' },
  { id: '102', name: 'شەونم', meaning: ' ئەو دڵۆپە ئاوەی لەوەرزی باران بارین دەکەوێتە سەر گیا و گەڵاکان ', gender: 'female', popularity: 6, category: 'general' },
  { id: '103', name: 'هێور', meaning: ' ئارام ', gender: 'male', popularity: 7, category: 'arami' },
  { id: '104', name: 'ئانیان', meaning: 'نەرم ونیان، لەسەرخۆ', gender: 'female', popularity: 5, category: 'arami' },
  { id: '105', name: 'شەماڵ', meaning: 'بای باکوور', gender: 'male', popularity: 8, category: 'Nature' },
  { id: '106', name: 'شاڵاو', meaning: 'شەپۆل', gender: 'male', popularity: 8, category: 'Nature' },
];

export const categories = [
  { id: 'general', label: 'گشتی' },
  { id: 'Nature', label: 'سروشت' },
  { id: 'love', label: 'خۆشەویستی' },
  { id: 'arami', label: 'ئارامی' },
  { id: 'flower', label: 'گوڵ' },
  { id: 'famous', label: 'کەسایەتی' },
];

export const getRandomName = (category?: Category, gender?: 'male' | 'female' | 'neutral') => {
  let filteredNames = [...names];
  
  if (category && category !== 'general') {
    filteredNames = filteredNames.filter(name => name.category === category);
  }
  
  if (gender) {
    filteredNames = filteredNames.filter(name => name.gender === gender);
  }
  
  // If no names match the filters, return from all names
  if (filteredNames.length === 0) {
    filteredNames = [...names];
  }
  
  const randomIndex = Math.floor(Math.random() * filteredNames.length);
  return filteredNames[randomIndex];
};

export const getNamesByCategory = (category: Category) => {
  return names.filter(name => name.category === category);
};
