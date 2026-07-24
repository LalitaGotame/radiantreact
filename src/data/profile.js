export const userProfile = {
  name: 'Sagar Timilsina',
  email: 'timilsinasagar03@gmail.com',
  phone: '9874521360',
  avatar: null, // null shows placeholder icon, or pass an image path
}

export const learningStats = {
  totalHours: 383,
  totalMinutes: 5,
  thisWeekMinutes: 40,
  todayMinutes: 2,
  progressPercent: 0,
  ongoingLiveClasses: [],
  weeklyActivity: [
    { day: 'Mon', minutes: 5 },
    { day: 'Tue', minutes: 0 },
    { day: 'Wed', minutes: 0 },
    { day: 'Thu', minutes: 0 },
    { day: 'Fri', minutes: 0 },
    { day: 'Sat', minutes: 0 },
    { day: 'Sun', minutes: 0 },
  ],
}

export const activeSessions = [
  {
    id: 1,
    platform: 'Browser',
    date: 'Jul 24, 2026',
    opened: '11:51 AM',
    closed: 'Active Now',
    ip: '27.34.72.164',
    isCurrent: true,
  },
  {
    id: 2,
    platform: 'Browser',
    date: 'Jul 22, 2026',
    opened: '12:44 PM',
    closed: '11:51 AM',
    ip: '27.34.72.142',
    isCurrent: false,
  },
  {
    id: 3,
    platform: 'Browser',
    date: 'Jul 21, 2026',
    opened: '01:25 PM',
    closed: '12:44 PM',
    ip: '27.34.72.233',
    isCurrent: false,
  },
  {
    id: 4,
    platform: 'Browser',
    date: 'Jul 20, 2026',
    opened: '12:33 PM',
    closed: '01:25 PM',
    ip: '27.34.72.246',
    isCurrent: false,
  },
  {
    id: 5,
    platform: 'Browser',
    date: 'Jul 20, 2026',
    opened: '12:27 PM',
    closed: '12:33 PM',
    ip: '27.34.72.246',
    isCurrent: false,
  },
]