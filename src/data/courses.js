import thumb from '../assets/course-thumb.jpg'
import avatar from '../assets/instructor-avatar.jpg'

export const featuredCourse = {
  title: 'Introduction to Financial Management and Guidance',
  instructor: 'Ram Saili',
  thumb,
  avatar,
}
export const categories = ['All', 'UI/UX Design', 'Digital Marketing', 'Full Stack', 'SEO Course']

export const allCourses = [
  { id: 'a1', category: 'UI/UX Design', dateRange: '12–24 Jan', title: 'UI/UX: Master the Art of Design', description: 'Learn the fundamentals of user interface and user experience design through hands-on projects and real case studies.', rating: 5, reviews: 117, price: 8000, originalPrice: 10000, thumb },
  { id: 'a2', category: 'Full Stack', dateRange: '2–14 Feb', title: 'Full-Stack Web Development Bootcamp', description: 'Build complete web applications from scratch using modern frameworks, covering both frontend and backend.', rating: 4, reviews: 89, price: 9500, originalPrice: 12000, thumb },
  { id: 'a3', category: 'Digital Marketing', dateRange: '20 Jan–5 Feb', title: 'Digital Marketing Essentials', description: 'Master SEO, social media, and content strategy to grow any brand online with confidence.', rating: 5, reviews: 64, price: 6500, originalPrice: 8500, thumb },
  { id: 'a4', category: 'SEO Course', dateRange: '15–28 Feb', title: 'SEO Fundamentals for Beginners', description: 'Learn how search engines rank content and how to optimize pages to climb the results organically.', rating: 4, reviews: 132, price: 5500, originalPrice: 7500, thumb },
  { id: 'a5', category: 'UI/UX Design', dateRange: '1–15 Mar', title: 'Advanced Prototyping with Figma', description: 'Take your prototyping skills further with interactive components, variants, and design systems.', rating: 5, reviews: 201, price: 7000, originalPrice: 9000, thumb },
  { id: 'a6', category: 'Full Stack', dateRange: '10–22 Mar', title: 'API Design and Backend Architecture', description: 'Understand REST and GraphQL API design, authentication, and scalable backend architecture patterns.', rating: 5, reviews: 98, price: 9000, originalPrice: 11500, thumb },
  { id: 'a7', category: 'Digital Marketing', dateRange: '5–19 Mar', title: 'Social Media Strategy & Growth', description: 'Plan, create, and measure social content that builds an audience and drives real engagement.', rating: 4, reviews: 156, price: 4800, originalPrice: 6200, thumb },
  { id: 'a8', category: 'SEO Course', dateRange: '18–30 Mar', title: 'Technical SEO Deep Dive', description: 'Go beyond keywords — site speed, crawlability, structured data, and technical audits that move rankings.', rating: 5, reviews: 174, price: 6000, originalPrice: 8000, thumb },
]

export const continueLearning = [
  {
    id: 'c1',
    category: 'Account',
    title: 'Introduction to Account and Management',
    instructor: 'Ram Saili',
    duration: '4hr 12m',
    progress: 62,
    thumb,
    avatar,
  },
  {
    id: 'c2',
    category: 'Finance',
    title: 'Introduction to Financial Management and Guidance',
    instructor: 'Ram Saili',
    duration: '3hr 40m',
    progress: 28,
    thumb,
    avatar,
  },
]


export const trendingCourses = [
  {
    id: 'tr1',
    dateRange: '1–15 Mar',
    title: 'Public Speaking & Communication Skills',
    description:
      'Build confidence and clarity speaking in front of any audience, in person or on camera.',
    rating: 5,
    reviews: 201,
    price: 5000,
    originalPrice: 7000,
    thumb,
  },
  {
    id: 'tr2',
    dateRange: '10–22 Mar',
    title: 'Financial Literacy for Beginners',
    description:
      'Understand budgeting, saving, and investing basics to take control of your financial future.',
    rating: 5,
    reviews: 98,
    price: 4500,
    originalPrice: 6000,
    thumb,
  },
  {
    id: 'tr3',
    dateRange: '5–19 Mar',
    title: 'Spoken English Mastery',
    description:
      'Improve fluency and pronunciation through guided practice and real conversation drills.',
    rating: 4,
    reviews: 156,
    price: 4000,
    originalPrice: 5500,
    thumb,
  },
  {
    id: 'tr4',
    dateRange: '18–30 Mar',
    title: 'Mathematics for High School',
    description:
      'A structured course covering algebra, geometry, and calculus fundamentals for SEE/+2 students.',
    rating: 5,
    reviews: 174,
    price: 3500,
    originalPrice: 5000,
    thumb,
  },
  
]

export const featuredSpotlights = [
  {
    id: 'f1',
    badge: 'New Release',
    title: 'Introduction to Financial Management and Guidance',
    instructor: 'Ram Saili',
    thumb,
    avatar,
  },
  {
    id: 'f2',
    badge: 'Popular',
    title: 'Introduction to Financial Management and Guidance',
    instructor: 'Ram Saili',
    thumb,
    avatar,
  },
  {
    id: 'f3',
    badge: "Editor's Pick",
    title: 'Introduction to Financial Management and Guidance',
    instructor: 'Ram Saili',
    thumb,
    avatar,
  },
]
export const savedCourses = [
  { ...allCourses[0], id: 's1' },
  { ...allCourses[2], id: 's2' },
  { ...allCourses[4], id: 's3' },
  { ...allCourses[6], id: 's4' },
]
export const topPicks = [
  { id: 't1', duration: '14h 21m', title: 'UI/UX: Master the Art of Design', rating: 5, reviews: 117, price: 8000, thumb },
  { id: 't2', duration: '25h 50m', title: 'Full-Stack Web Development Bootcamp', rating: 4, reviews: 89, price: 9500, thumb },
  { id: 't3', duration: '18h 10m', title: 'Digital Marketing Essentials', rating: 5, reviews: 64, price: 6500, thumb },
  { id: 't4', duration: '22h 40m', title: 'Data Analysis with Python', rating: 4, reviews: 132, price: 8800, thumb },
  { id: 't5', duration: '16h 05m', title: 'Public Speaking & Communication Skills', rating: 5, reviews: 201, price: 5000, thumb },
  { id: 't6', duration: '20h 30m', title: 'Financial Literacy for Beginners', rating: 5, reviews: 98, price: 4500, thumb },
  { id: 't7', duration: '19h 45m', title: 'Spoken English Mastery', rating: 4, reviews: 156, price: 4000, thumb },
  { id: 't8', duration: '23h 15m', title: 'Mathematics for High School', rating: 5, reviews: 174, price: 3500, thumb },
]