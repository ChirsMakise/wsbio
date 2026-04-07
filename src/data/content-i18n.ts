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
      "文婷已正式获任施坦威艺术家，跻身这一汇聚世界杰出演奏家的荣誉行列。",
    cta: "阅读更多",
    externalLinkLabel: "查看 Steinway & Sons 艺术家主页",
  },
  "naxos-album": {
    title: "Naxos 独奏专辑",
    subtitle: "发行日期：2026 年 4 月 24 日",
    description:
      "文婷已于美国伊利诺伊州埃文斯顿的 Nichols Hall 完成 Naxos 独奏专辑录制。\n\n本张专辑收录弗朗茨·李斯特珍贵且具有代表性的钢琴作品。\n\n官方发行日期为 2026 年 4 月 24 日。",
    cta: "了解更多",
    externalLinkLabel: "Naxos 详情页",
    secondaryExternalLinkLabel: "预购",
    tertiaryExternalLinkLabel: "全平台收听与购买链接",
  },
  "luminarts-2023": {
    title: "Luminarts 文化基金会，2023",
    subtitle: "2023 年古典音乐 Fellow",
    description:
      "Luminarts 文化基金会通过竞赛项目支持芝加哥充满活力的艺术生态，为杰出青年艺术家提供资金奖励、艺术机会与导师指导，帮助他们从学院训练顺利迈向职业舞台。Fellows 还将持续获得基金会支持，包括职业发展、演出机会及项目资助。\n\n“……师从 James Giles 教授的钢琴博士生文婷·石（Wenting Shi）获评 Luminarts Cultural Foundation 2023 年古典音乐 Fellow，并获得 10,000 美元奖金。……”",
    cta: "阅读更多",
    externalLinkLabel: "阅读全文",
  },
  "thaviu-isaak-2023": {
    title: "2023 Thaviu-Isaak 钢琴比赛",
    subtitle: "一等奖",
    description: "文婷在 2023 Thaviu-Isaak 钢琴比赛中获得一等奖。",
    cta: "阅读更多",
    externalLinkLabel: "了解更多",
    secondaryExternalLinkLabel: "关于比赛",
  },
  "schnabel-2022": {
    title: "2022年6月，阿图尔·施纳贝尔奖",
    subtitle: "柏林，2022 年 6 月 17 日",
    description: "点击观看 2022 年 6 月 17 日获奖者音乐会现场演出视频。",
    cta: "观看演出",
  },
};

const zhConcertOverrides: Partial<Record<string, Partial<LocalizedConcert>>> = {
  "checkout-apr-2026-album-release": {
    title: "钢琴聚焦：文婷全李斯特专辑发布音乐会",
    venue: "The CheckOut（芝加哥）",
    description:
      "为庆祝钢琴家石文婷于 Naxos 发行全李斯特新专辑，音乐会“Play and Pray”将呈现李斯特音乐的广阔谱系：从璀璨而少见的性格小品，到具有精神纵深的《b 小调奏鸣曲》。\n\n作为屡获殊荣的国际钢琴家与施坦威艺术家，石文婷将以卓越技巧、诗性敏感与深度诠释，展现作品中兼具炫技光彩与内在精神的核心魅力。\n\n现场可购买专辑，演出后文婷将进行签名。\n\n本场演出全年龄可入场。\n主办方：The CheckOut。\n\n可加入候补名单购票。\n入场时间：2:30 PM。",
    program: ["全李斯特曲目", "罕见性格小品", "李斯特：《b小调奏鸣曲》"],
  },
  "chicago-feb-2026": {
    title: "芝加哥独奏音乐会",
    venue: "芝加哥 CheckOut 音乐会系列",
    description: "于 The CheckOut 音乐会系列举办的钢琴独奏音乐会。",
    program: [
      "乔治·罗赫伯格：《狂欢音乐》— No.2《布鲁斯》；No.5《托卡塔-拉格泰姆》",
      "舒伯特：降B大调即兴曲 D.935 No.3",
      "拉威尔：《夜之加斯帕》",
      "斯特拉文斯基：《彼得鲁什卡》三乐章",
    ],
  },
  "henan-chamber-dec-2025": {
    title: "河南理工大学与余音四重奏室内乐音乐会",
    venue: "河南理工大学",
    address: "中国河南",
    description:
      "受邀以访问教授身份驻留河南理工大学音乐学院。\n\n本场室内乐之夜与余音弦乐四重奏合作，演出贝多芬、勃拉姆斯与德沃夏克作品。",
    program: [
      "贝多芬：D大调第五钢琴三重奏 Op.70 No.1“幽灵”",
      "勃拉姆斯：g小调第一钢琴四重奏 Op.25",
      "德沃夏克：A大调钢琴五重奏 Op.81",
    ],
  },
  "henan-solo-dec-2025": {
    title: "河南理工大学独奏音乐会",
    venue: "河南理工大学",
    address: "中国河南",
    description:
      "受邀以访问教授身份驻留河南理工大学音乐学院。\n\n独奏音乐会曲目包括舒伯特、拉赫玛尼诺夫、斯特拉文斯基与李斯特。",
    program: ["舒伯特", "拉赫玛尼诺夫", "斯特拉文斯基", "李斯特"],
  },
  "northbrook-nov-2025": {
    title: "北溪（伊利诺伊州）独奏音乐会",
    venue: "北溪独奏音乐会",
    description:
      "施坦威艺术家石文婷邀您走入一座“幻影剧场”，让每一首作品都化作鲜明角色、每一个音符都闪烁情绪之光。跨越数个世纪的钢琴音乐在此交汇，于持续转化中呈现灵魂的低语与呐喊。\n\n曲目涵盖海顿、罗赫伯格、拉赫玛尼诺夫与斯特拉文斯基。",
    program: ["约瑟夫·海顿", "乔治·罗赫伯格", "谢尔盖·拉赫玛尼诺夫", "伊戈尔·斯特拉文斯基"],
  },
  "henan-chamber-sep-2025": {
    title: "文婷与朋友们——室内乐之夜",
    venue: "河南大学音乐厅",
    address: "中国开封",
    description: "一场跨越风格、轻松而充满活力的钢琴室内乐之夜！",
    program: [
      "贝多芬：D大调第五钢琴三重奏 Op.70 No.1“幽灵”",
      "勃拉姆斯：g小调第一钢琴四重奏 Op.25",
      "德沃夏克：A大调钢琴五重奏 Op.81",
    ],
  },
  "henan-masterclass-sep-2025": {
    title: "河南大学大师课与荣誉授予",
    venue: "河南大学",
    address: "中国开封",
    description:
      "文婷将在河南大学举办大师课。活动后，河南省音乐家协会将授予其“艺术发展与交流大使”荣誉称号，以表彰其艺术成就及对国际文化交流的卓越贡献。",
  },
  "henan-solo-sep-2025": {
    title: "河南大学独奏音乐会",
    venue: "河南大学",
    address: "中国开封",
    description: "文婷将于 9 月 17 日在河南大学举办独奏音乐会。",
    program: [
      "约瑟夫·海顿：C 大调第 60 号奏鸣曲 Hob.XVI/50",
      "乔治·罗赫伯格：《狂欢音乐》钢琴组曲",
      "谢尔盖·拉赫玛尼诺夫：《音画练习曲》Op.33",
      "中场休息",
      "弗里德里克·肖邦：24 首前奏曲 Op.28",
    ],
  },
  "berlin-jul-2025": {
    title: "柏林独奏音乐会",
    venue: "柏林 UdK 大音乐厅",
    address: "Hardenbergstraße / Fasanenstraße 33, 10623 Berlin, Germany",
    description: "曲目主题：“Play and Pray”。",
    program: [
      "乔治·罗赫伯格：《狂欢音乐》钢琴组曲",
      "II. Blues",
      "IV. Toccata - Rag",
      "卡罗尔·席曼诺夫斯基：《假面》Op.34",
      "II. Tantris le Bouffon",
      "III. Sérénade de Don Juan",
      "伊戈尔·斯特拉文斯基：《彼得鲁什卡》三乐章",
      "I. Danse russe",
      "II. Chez Pétrouchka",
      "III. La semaine grasse",
      "中场休息",
      "弗朗茨·李斯特：b 小调奏鸣曲 S.178",
    ],
  },
  "steinway-hinsdale-jun-2025": {
    title: "施坦威 Hinsdale 琴行独奏音乐会",
    venue: "施坦威 Hinsdale 琴行",
    description:
      "时间：2025 年 6 月 28 日（周六）6:00 pm（CDT）。\n\n票务：电话/短信 773-687-9889 或 630-325-0500。\n\n曲目包括李斯特、斯特拉文斯基与罗赫伯格作品。",
    program: ["弗朗茨·李斯特", "伊戈尔·斯特拉文斯基", "乔治·罗赫伯格"],
  },
  "steinway-chicago-jun-2025": {
    title: "施坦威芝加哥琴行独奏音乐会",
    venue: "施坦威芝加哥琴行",
    description:
      "时间：2025 年 6 月 21 日（周六）6:00 pm（CDT）。\n\n票务：电话/短信 773-687-9889。\n\n曲目包括李斯特与肖邦作品。",
    program: ["弗朗茨·李斯特", "弗雷德里克·肖邦"],
  },
  "galvin-jun-2025": {
    title: "Galvin 音乐厅独奏音乐会",
    venue: "西北大学 Evanston 湖景 Galvin 音乐厅独奏音乐会",
    description:
      "本场独奏会主题为“War and Peace（战争与和平）”，以音乐回应生命与世界。\n\n曲目包含轻盈舞曲风格作品及普罗科菲耶夫选段。",
    program: ["轻盈舞曲风格作品", "谢尔盖·普罗科菲耶夫作品选段"],
  },
  "eiu-may-2025": {
    title: "东伊利诺伊大学独奏与大师课",
    venue: "东伊利诺伊大学独奏会及大师课",
    description:
      "活动时间：2025 年 5 月 1 日至 2 日。\n\n先举行钢琴独奏会，随后举办大师课。\n\n全场李斯特作品，包含罕见舞曲改编与《b 小调奏鸣曲》。\n\n联系方式：Doudna Fine Arts Center，217-581-3110，doudnatix@eiu.edu。",
    program: ["李斯特：舞曲改编作品", "李斯特：b小调奏鸣曲"],
  },
  "chicago-downtown-apr-2025": {
    title: "芝加哥市中心独奏音乐会",
    venue: "New Music School 音乐厅",
    description:
      "演出日期：2025 年 4 月 25 日。\n\n时间：7:00 pm - 8:30 pm。\n\n本场曲目聚焦李斯特罕见的钢琴独奏作品。",
    program: ["弗朗茨·李斯特作品专场"],
  },
  "czech-jan-2025": {
    title: "捷克拉赫玛尼诺夫第二钢琴协奏曲演出",
    venue: "与 Hradec Králové 爱乐乐团合作",
    description: "2025 年 1 月 30 日，捷克 Hradec Králové。",
    program: [
      "安东宁·德沃夏克：《D♭大调随想谐谑曲》Op.66",
      "谢尔盖·拉赫玛尼诺夫：c小调第二钢琴协奏曲 Op.18（石文婷）",
      "约翰内斯·勃拉姆斯：e小调第四交响曲 Op.98",
    ],
  },
  "shenzhen-dec-2024": {
    title: "深圳小提琴与钢琴二重奏音乐会",
    venue: "海上世界文化艺术中心",
    description:
      "2024 年 12 月 30 日于深圳举行。\n\n另有信息显示：2025 年 1 月 18 日 2:00 PM。\n\n曲目包含维瓦尔第、席曼诺夫斯基、勃拉姆斯、德彪西等作曲家作品。",
    program: ["维瓦尔第", "席曼诺夫斯基", "勃拉姆斯", "德彪西"],
  },
  "uchicago-oct-2024": {
    title: "芝加哥大学 Tea-Time 音乐会",
    venue: "Fulton 音乐厅“时间旅行者”独奏会",
    description: "曲目包括海顿、拉赫玛尼诺夫与罗赫伯格作品。",
    program: ["约瑟夫·海顿", "谢尔盖·拉赫玛尼诺夫", "乔治·罗赫伯格"],
  },
  "zhengzhou-aug-2024": {
    title: "“琳琅满目”钢琴与弦乐重奏音乐会",
    venue: "“琳琅满目”钢琴与弦乐重奏音乐会",
    description: "2024 年 8 月 25 日 7:30 pm。演出肖斯塔科维奇、贝多芬、拉威尔与德沃夏克作品。",
    program: ["肖斯塔科维奇", "贝多芬", "拉威尔", "德沃夏克"],
  },
  "zhengzhou-solo-aug-2024": {
    title: "“弹指韶光”中国钢琴独奏音乐会",
    venue: "河南艺术中心，郑州",
    description: "完整曲目请见票务网站。",
  },
  "berlin-concerto-jun-2024": {
    title: "柏林协奏曲演出",
    venue: "柏林 UdK 大音乐厅",
    description: "与 Brandenburger Symphoniker 合作演出肖斯塔科维奇第二钢琴协奏曲。",
    program: ["德米特里·肖斯塔科维奇：第二钢琴协奏曲"],
  },
  "berlin-steinway-may-2024": {
    title: "柏林独奏音乐会",
    venue: "柏林施坦威",
    description: "曲目待更新。",
  },
  "northwestern-apr-2024": {
    title: "西北大学文婷钢琴独奏音乐会",
    venue: "西北大学 Bienen 音乐学院 Mary B Galvin 音乐厅",
    description: "主题：“Pray and Play”。演出时间：2024 年 4 月 19 日（周五）晚 8:30。",
    program: ["弗朗茨·李斯特", "亚历山大·斯克里亚宾", "卡罗尔·席曼诺夫斯基", "乔治·罗赫伯格", "伊戈尔·斯特拉文斯基"],
  },
  "uchicago-mar-2024": {
    title: "芝加哥大学“奇幻旅程”午后音乐会",
    venue: "芝加哥大学“奇幻旅程”Tea Time 音乐会",
    description:
      "2024 年 3 月 21 日 | 4:30 pm | Fulton Recital Hall。\n\n曲目包括李斯特、席曼诺夫斯基与斯特拉文斯基作品。\n\n文婷寄语：\n\n这将是一场共同启程的音乐旅程。我们会先来到瑞士瓦伦施塔特湖畔，聆听如湖水般宁静的旋律；随后转入法式剧场，在“丑角”的喜剧性格中感受灵动音符；再到意大利，邂逅多情而洒脱的唐璜；最终抵达俄罗斯狂欢节，魔术师唤醒三位木偶角色，交织出爱与幻想的故事。",
    program: ["弗朗茨·李斯特", "卡罗尔·席曼诺夫斯基", "伊戈尔·斯特拉文斯基"],
  },
  "italy-jul-2023": {
    title: "意大利独奏音乐会",
    venue: "阿马尔菲音乐节开幕音乐会",
    description: "曲目包括勃拉姆斯与拉赫玛尼诺夫作品。",
    program: ["勃拉姆斯", "拉赫玛尼诺夫"],
  },
  "galvin-apr-2023": {
    title: "Evanston Galvin 音乐厅独奏音乐会（美国）",
    venue: "西北大学 Bienen 音乐学院 Galvin 音乐厅独奏会",
    description: "更多信息请见西北大学活动页面。",
    program: [
      "勃拉姆斯：帕格尼尼主题变奏曲 Op.35 第一册",
      "贝多芬：f小调第二十三钢琴奏鸣曲 Op.57“热情”",
      "舒伯特：降B大调即兴曲 D.935 No.3",
      "斯克里亚宾：升g小调第二钢琴奏鸣曲 Op.19",
      "勃拉姆斯：帕格尼尼主题变奏曲 Op.35 第二册",
    ],
  },
  "berlin-mar-2023": {
    title: "柏林独奏音乐会",
    venue: "C. Bechstein 柏林中心",
    description: "曲目包含莫扎特、勃拉姆斯、拉赫玛尼诺夫、斯克里亚宾与拉威尔作品。",
    program: ["莫扎特", "勃拉姆斯", "拉赫玛尼诺夫", "斯克里亚宾", "拉威尔"],
  },
  "musikverein-may-2022": {
    title: "维也纳音乐之友协会室内乐音乐会",
    venue: "维也纳音乐之友协会（Musikverein）",
    description: "门票可在 musikverein 官网查询购买。",
    program: ["霍利格、布列兹与贝里奥作品"],
  },
  "wien-musiktheater-may13-2022": {
    title: "维也纳 Gesellschaft für Musiktheater 音乐厅独奏会",
    venue: "Gesellschaft für Musiktheater 音乐厅",
    description: "联系邮箱：musiktheater@iti-arte.at",
    program: ["海顿、拉威尔、巴托克与拉赫玛尼诺夫作品"],
  },
  "brussels-may-2022": {
    title: "布鲁塞尔独奏音乐会",
    venue: "Music Arts Loi 独奏音乐会",
    description: "曲目待更新。",
  },
  "wien-johanneskapelle-may-2022": {
    title: "圣约翰内斯·内波穆克小教堂独奏音乐会",
    venue: "圣约翰内斯·内波穆克小教堂",
    description:
      "票务、咨询与预约：+43 664 977-7882；www.cziffrastiftung.at；www.johanneskapelle.at。",
    program: ["拉威尔、拉赫玛尼诺夫、齐夫拉与李斯特作品"],
  },
  "wien-musiktheater-may-2022": {
    title: "维也纳 Gesellschaft für Musiktheater 音乐厅独奏会",
    venue: "Gesellschaft für Musiktheater 音乐厅",
    description: "联系邮箱：musiktheater@iti-arte.at",
  },
  "wien-musiktheater-mar-2022": {
    title: "维也纳 Gesellschaft für Musiktheater 音乐厅独奏会",
    venue: "Gesellschaft für Musiktheater 音乐厅",
    description: "联系邮箱：musiktheater@iti-arte.at",
    program: ["演出贝多芬、格拉纳多斯、阿尔贝尼兹、拉威尔与李斯特作品"],
  },
};

const zhBio = {
  short:
    "施坦威艺术家石文婷是一位享誉国际的钢琴家，以细腻的艺术表现力与独特的音乐语言而闻名。她的艺术背景横跨亚洲、欧洲与美国，在舞台上呈现出兼具深度、色彩与叙事感的演绎。",
  full:
    "施坦威艺术家、旅美钢琴演奏家石文婷，任教于美国西北大学比恩音乐学院、芝加哥音乐学院及芝加哥新音乐学校。\n\n作为演奏家，石文婷的足迹遍及世界各大音乐厅，包括纽约林肯中心爱丽丝·塔利音乐厅、巴黎加沃音乐厅以及维也纳金色大厅等，并与捷克赫拉德茨-克拉洛韦爱乐乐团、香港交响乐团、上海交响乐团等合作演出。\n\n石文婷是美国Luminarts文化艺术基金会艺术家。在国内外重要赛事中屡获殊荣，曾获世界国际音乐比赛联盟（WFIMC）第五届中国香港国际钢琴大赛银奖（为中国籍选手在该赛事中的最高荣誉）。此外，她还在德国柏林阿图尔·施纳贝尔国际钢琴比赛、美国谢尔盖与奥尔加·库塞维茨基青年艺术家钢琴比赛、美国圣何塞国际钢琴比赛、加拿大多伦多国际钢琴比赛、中国台北肖邦国际钢琴比赛及罗马尼亚布加勒斯特国际钢琴比赛等赛事中获奖。\n\n在学术方面，她以全额奖学金考入美国茱莉亚音乐学院，获得音乐学士及硕士学位，并荣获“阿图尔·鲁宾斯坦奖”。随后，她先后获得耶鲁大学音乐艺术硕士学位、奥地利维也纳国立音乐与表演艺术大学艺术硕士学位、德国柏林艺术大学演奏博士学位，以及美国西北大学音乐艺术博士学位。\n\n石文婷长期致力于音乐教育与艺术推广，曾在包括美国芝加哥大学、东伊利诺伊大学、加利福尼亚大学尔湾分校在内的高校，以及国内多座主要城市开展音乐会与教学活动，将舞台演出与公众教育有机结合。基于其在艺术、文化与社会层面的持续贡献，她被河南省音乐家协会授予“艺术发展与交流大使”称号，并受邀赴多所高校开展驻校交流，举办独奏与室内乐音乐会，同时从事教学与学术活动。\n\n其首张个人专辑已由全球知名唱片公司拿索斯（Naxos）于2026年4月全球发行；其独立翻译的《诠释莫扎特》（伊娃与保罗·巴杜拉-斯柯达著）将由上海教育出版社于2026年出版。",
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
    ...(zhConcertOverrides[concert.id] || {}),
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
