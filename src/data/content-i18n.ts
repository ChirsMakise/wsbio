import {
  allConcerts,
  bioContent,
  contactInfo,
  heroContent,
  isUpcoming,
  newsItems,
  siteConfig,
} from "@/data/content";
import { Locale } from "@/i18n/config";

export type LocalizedNewsItem = (typeof newsItems)[number];
export type LocalizedConcert = (typeof allConcerts)[number];

const zhNewsOverrides: Partial<Record<string, Partial<LocalizedNewsItem>>> = {
  "steinway-artist": {
    title: "施坦威艺术家",
    subtitle: "官方任命",
    description:
      "文婷已正式受聘为施坦威艺术家，加入这一汇聚世界顶尖钢琴家的荣誉行列。",
    cta: "阅读更多",
  },
  "naxos-album": {
    title: "Naxos 独奏专辑",
    subtitle: "发行日期：2026年4月24日",
    description:
      "文婷已在美国伊利诺伊州埃文斯顿著名的 Nichols Hall 完成其 Naxos 独奏专辑录制。\n\n本次录音收录了弗朗茨·李斯特珍贵且重要的钢琴作品。\n\n官方发行日期为 2026 年 4 月 24 日。",
    cta: "了解更多",
    externalLinkLabel: "Naxos 详情页",
    secondaryExternalLinkLabel: "预购",
    tertiaryExternalLinkLabel: "全平台收听与购买链接",
  },
  "luminarts-2023": {
    title: "Luminarts 文化基金会，2023",
    subtitle: "2023 古典音乐 Fellow",
    cta: "阅读更多",
  },
  "thaviu-isaak-2023": {
    title: "2023 Thaviu-Isaak 钢琴比赛",
    subtitle: "一等奖",
    description: "文婷在 2023 Thaviu-Isaak 钢琴比赛中获得一等奖。",
    cta: "阅读更多",
    secondaryExternalLinkLabel: "关于比赛",
  },
  "schnabel-2022": {
    title: "2022年6月，阿图尔·施纳贝尔奖",
    subtitle: "柏林，2022年6月17日",
    description: "点击观看 2022 年 6 月 17 日获奖者音乐会现场演出。",
    cta: "观看演出",
  },
};

const zhConcertTitleOverrides: Partial<Record<string, string>> = {
  "checkout-apr-2026-album-release": "Solo Piano Spotlight- 文婷全李斯特专辑发布音乐会",
  "chicago-feb-2026": "芝加哥独奏音乐会",
};

const zhBio = {
  short:
    "施坦威艺术家石文婷是一位享誉国际的钢琴家，以细腻的艺术表现力与独特的音乐语言而闻名。她的艺术背景横跨亚洲、欧洲与美国，在舞台上呈现出兼具深度、色彩与叙事感的演绎。",
  full:
    "施坦威艺术家石文婷是一位享誉国际的钢琴家，其艺术成就曾获多项重要荣誉。她曾获美国 Luminarts Cultural Foundation Fellowship Award 一等奖，并获授 Fellow Artist 称号。其他重要奖项还包括美国 Thaviu-Isaak 钢琴比赛一等奖，以及柏林 Artur Schnabel Piano Competition、香港国际钢琴比赛（WFIMC）、Serge & Olga Koussevitzky Young Artist Awards Piano Competition 和 San Jose International Piano Competition 等赛事奖项。她同时也是奥地利 Cziffra Foundation 颁发 Georges Cziffra Prize 的获奖者。\n\n石文婷的学术与艺术训练体现出她对音乐卓越的不懈追求。她本科阶段荣获 Arthur Rubinstein Prize for Academic and Artistic Achievement，随后在 The Juilliard School 与 Yale School of Music 完成研究生阶段学习。立足德奥音乐传统，她以最高等级荣誉（Auszeichnung / With Distinction）毕业于 University of Music and Performing Arts Vienna，并在 Berlin University of the Arts 获得德国最高演奏学位 Konzertexamen。她亦拥有 Northwestern University Bienen School of Music 的 Doctor of Musical Arts（音乐艺术博士）学位。\n\n作为国际钢琴演奏家，石文婷曾与多支重要乐团合作演出，包括 Shanghai Symphony Orchestra、Shenzhen Symphony Orchestra、Hong Kong Symphony Orchestra 及 Hradec Králové Philharmonic Orchestra。她曾在全球多座重要音乐厅登台，包括 Alice Tully Hall（纽约）、Salle Gaveau（巴黎）、Royal Museum of Fine Arts of Belgium（布鲁塞尔）、Hong Kong City Hall 以及 Musikverein（维也纳）。\n\n除舞台演出外，石文婷亦积极投入教学、合作与文化交流。她曾担任 Pearl River · Kayserburg International Youth Piano Competition（2021、2023）评委，参与 University of Music and Performing Arts Vienna 与 ORF Radio Symphony Hall 合作的纪念专辑项目，并首演作曲家李敏铎作品 Fantasia 1975，后收录于 Piano Artistry 杂志。她长期关注音乐教育与公众推广，曾在中国多座城市开展“演出 + 教学”巡演。因其在艺术、文化与社会层面的贡献，她获河南省音乐家协会授予 Art Development and Exchange Ambassador 称号，并受邀于多所中国高校驻留交流。\n\n她即将出版 Eva and Paul Badura-Skoda 所著 Interpreting Mozart 的英译中译本（由 Shanghai Education Publishing House 于 2026 年出版）。其 Naxos 厂牌首张专辑将收录李斯特舞曲改编作品，并计划于 2026 年 4 月全球发行。\n\n她目前任教于 Northwestern University、Chicago New Music School 以及 Music Institute of Chicago。",
  quote:
    "对我而言，施坦威始终像一种纯粹的魔法——黑白琴键能化作斑斓的世界，每个音符都在讲述故事，每段旋律都在点亮想象。",
};

const zhContactInfo = {
  headline: "联系文婷",
  description: "文婷现居芝加哥，是施坦威艺术家及教育合作伙伴。",
  cta: "欢迎洽谈教学、演出与合作邀约。",
};

const zhHeroContent = {
  ...heroContent,
  cta: {
    ...heroContent.cta,
    text: "立即聆听",
  },
};

export function getSiteConfig() {
  return siteConfig;
}

export function getHeroContent(locale: Locale) {
  return locale === "zh" ? zhHeroContent : heroContent;
}

export function getBioContent(locale: Locale) {
  return locale === "zh" ? zhBio : bioContent;
}

export function getContactInfo(locale: Locale) {
  return locale === "zh" ? { ...contactInfo, ...zhContactInfo } : contactInfo;
}

export function getNewsItems(locale: Locale): LocalizedNewsItem[] {
  if (locale === "en") return newsItems;

  return newsItems.map((item) => {
    const override = zhNewsOverrides[item.id] || {};
    return {
      ...item,
      ...override,
    };
  });
}

export function getAllConcerts(locale: Locale): LocalizedConcert[] {
  if (locale === "en") return allConcerts;

  return allConcerts.map((concert) => ({
    ...concert,
    title: zhConcertTitleOverrides[concert.id] || concert.title,
  }));
}

export function getUpcomingConcerts(locale: Locale): LocalizedConcert[] {
  return getAllConcerts(locale)
    .filter((concert) => isUpcoming(concert.dateISO))
    .sort((a, b) => new Date(a.dateISO).getTime() - new Date(b.dateISO).getTime());
}

export function getPastConcerts(locale: Locale): LocalizedConcert[] {
  return getAllConcerts(locale)
    .filter((concert) => !isUpcoming(concert.dateISO))
    .sort((a, b) => new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime());
}
