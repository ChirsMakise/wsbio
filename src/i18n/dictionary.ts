import { Locale } from "./config";

export interface Dictionary {
  header: {
    soundOn: string;
    soundOff: string;
    menu: string;
    close: string;
    language: string;
  };
  footer: {
    upcomingConcerts: string;
    viewDates: string;
  };
  common: {
    back: string;
    viewAll: string;
    viewDetails: string;
    readMore: string;
    learnMore: string;
    getTickets: string;
    keepScrolling: string;
    last: string;
    next: string;
  };
  home: {
    news: string;
    upcomingConcerts: string;
    recentConcert: string;
    program: string;
    readFullBiography: string;
    mute: string;
  };
  news: {
    pageTitle: string;
    sectionTitle: string;
    allNews: string;
    viewAllNews: string;
    watchVideo: string;
  };
  concerts: {
    pageTitle: string;
    allConcerts: string;
    upcomingConcerts: string;
    pastConcerts: string;
    upcomingConcert: string;
    pastConcert: string;
    program: string;
    viewAllConcerts: string;
    viewEventLink: string;
  };
  resume: {
    pageTitle: string;
    backToHome: string;
  };
  contact: {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
    sendMessage: string;
    sending: string;
    success: string;
    error: string;
  };
  navigation: {
    news: string;
    upcomingConcerts: string;
    gallery: string;
    resume: string;
    contact: string;
  };
}

const en: Dictionary = {
  header: {
    soundOn: "SOUND ON",
    soundOff: "SOUND OFF",
    menu: "MENU",
    close: "CLOSE",
    language: "中文",
  },
  footer: {
    upcomingConcerts: "UPCOMING CONCERTS",
    viewDates: "VIEW DATES",
  },
  common: {
    back: "BACK",
    viewAll: "VIEW ALL",
    viewDetails: "VIEW DETAILS",
    readMore: "READ MORE",
    learnMore: "LEARN MORE",
    getTickets: "GET TICKETS",
    keepScrolling: "KEEP SCROLLING",
    last: "LAST",
    next: "NEXT",
  },
  home: {
    news: "News",
    upcomingConcerts: "Upcoming Concerts",
    recentConcert: "Recent Concert",
    program: "Program",
    readFullBiography: "READ FULL BIOGRAPHY",
    mute: "MUTE",
  },
  news: {
    pageTitle: "News",
    sectionTitle: "News & Announcements",
    allNews: "All News",
    viewAllNews: "VIEW ALL NEWS",
    watchVideo: "WATCH VIDEO",
  },
  concerts: {
    pageTitle: "Concert",
    allConcerts: "All Concerts",
    upcomingConcerts: "Upcoming Concerts",
    pastConcerts: "Past Concerts",
    upcomingConcert: "Upcoming Concert",
    pastConcert: "Past Concert",
    program: "Program",
    viewAllConcerts: "VIEW ALL CONCERTS",
    viewEventLink: "VIEW EVENT LINK",
  },
  resume: {
    pageTitle: "Artistic Resumé",
    backToHome: "BACK TO HOME",
  },
  contact: {
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    message: "Message",
    sendMessage: "SEND MESSAGE",
    sending: "SENDING...",
    success: "Thank you! Your message has been sent.",
    error: "Something went wrong. Please try again.",
  },
  navigation: {
    news: "News",
    upcomingConcerts: "Upcoming Concerts",
    gallery: "Wenting's Gallery",
    resume: "Artistic Resumé",
    contact: "Contact",
  },
};

const zh: Dictionary = {
  header: {
    soundOn: "声音开启",
    soundOff: "声音关闭",
    menu: "菜单",
    close: "关闭",
    language: "EN",
  },
  footer: {
    upcomingConcerts: "近期音乐会",
    viewDates: "查看日期",
  },
  common: {
    back: "返回",
    viewAll: "查看全部",
    viewDetails: "查看详情",
    readMore: "阅读更多",
    learnMore: "了解更多",
    getTickets: "获取门票",
    keepScrolling: "继续滚动",
    last: "上一条",
    next: "下一条",
  },
  home: {
    news: "新闻",
    upcomingConcerts: "近期音乐会",
    recentConcert: "最近演出",
    program: "曲目",
    readFullBiography: "阅读全文",
    mute: "静音",
  },
  news: {
    pageTitle: "新闻",
    sectionTitle: "新闻与公告",
    allNews: "全部新闻",
    viewAllNews: "查看全部新闻",
    watchVideo: "观看视频",
  },
  concerts: {
    pageTitle: "音乐会",
    allConcerts: "全部音乐会",
    upcomingConcerts: "近期音乐会",
    pastConcerts: "往期音乐会",
    upcomingConcert: "近期音乐会",
    pastConcert: "往期音乐会",
    program: "曲目",
    viewAllConcerts: "查看全部音乐会",
    viewEventLink: "查看活动链接",
  },
  resume: {
    pageTitle: "艺术简历",
    backToHome: "返回首页",
  },
  contact: {
    firstName: "名",
    lastName: "姓",
    email: "邮箱",
    message: "留言",
    sendMessage: "发送信息",
    sending: "发送中...",
    success: "感谢！您的信息已发送。",
    error: "发送失败，请稍后重试。",
  },
  navigation: {
    news: "新闻",
    upcomingConcerts: "近期音乐会",
    gallery: "文婷影像",
    resume: "艺术简历",
    contact: "联系",
  },
};

export function getDictionary(locale: Locale): Dictionary {
  return locale === "zh" ? zh : en;
}
