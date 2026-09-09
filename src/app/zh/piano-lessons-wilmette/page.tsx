import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Wilmette 私人钢琴课 | 石文婷 Wenting Shi",
  description:
    "施坦威艺术家、Naxos 唱片艺术家石文婷在伊利诺伊州 Wilmette 提供私人钢琴课，为芝加哥北岸认真学习音乐的学生提供个性化指导。",
  alternates: {
    canonical: "/zh/piano-lessons-wilmette",
    languages: {
      en: "/piano-lessons-wilmette",
      zh: "/zh/piano-lessons-wilmette",
    },
  },
  openGraph: {
    title: "Wilmette 私人钢琴课 | 石文婷 Wenting Shi",
    description: "施坦威艺术家、Naxos 唱片艺术家石文婷在 Wilmette 提供私人钢琴课。",
    type: "website",
    locale: "zh_CN",
  },
};

const inquiryHref = "mailto:wshi.piano@gmail.com?subject=%E9%92%A2%E7%90%B4%E8%AF%BE%E7%A8%8B%E5%92%A8%E8%AF%A2";

export default function ChinesePianoLessonsWilmettePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header locale="zh" />

      <article className="mx-auto max-w-6xl px-5 pb-20 pt-28 sm:px-8 sm:pt-32">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.72fr)] lg:items-start">
          <div>
            <p className="mb-5 text-xs tracking-[0.18em] text-white/60">芝加哥北岸</p>
            <h1 className="max-w-3xl text-4xl font-light leading-tight sm:text-5xl lg:text-6xl">Wilmette 私人钢琴课</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">为认真投入音乐学习的年轻钢琴学生提供个性化指导。</p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
              石文婷在伊利诺伊州 Wilmette 提供私人钢琴课，面向希望获得扎实音乐与艺术成长的学生。作为施坦威艺术家和 Naxos 唱片艺术家，她与来自 Wilmette 及芝加哥北岸各社区的学生合作。
            </p>
            <a href={inquiryHref} className="mt-9 inline-block border border-white px-5 py-3 text-sm tracking-[0.12em] transition-colors hover:bg-white hover:text-black">咨询钢琴课程</a>
          </div>

          <figure>
            <Image
              src="/images/artist.JPG"
              alt="钢琴家与钢琴教师石文婷，Wilmette，Illinois"
              width={800}
              height={1067}
              className="h-auto w-full object-cover"
              priority
            />
          </figure>
        </div>

        <div className="mt-20 grid gap-x-16 gap-y-14 border-t border-white/20 pt-14 lg:grid-cols-2">
          <section>
            <h2 className="text-2xl font-light sm:text-3xl">关于石文婷</h2>
            <p className="mt-5 leading-relaxed text-white/75">石文婷是国际音乐会钢琴家、施坦威艺术家及 Naxos 唱片艺术家。她曾就读于茱莉亚音乐学院、耶鲁音乐学院、柏林艺术大学及维也纳国立音乐与表演艺术大学。</p>
            <Link href="/zh/resume" className="mt-5 inline-block text-sm underline underline-offset-4 transition-opacity hover:opacity-70">了解石文婷</Link>
          </section>

          <section>
            <h2 className="text-2xl font-light sm:text-3xl">教学理念</h2>
            <p className="mt-5 leading-relaxed text-white/75">课程着力于建立可靠的技术基础、细腻的音色控制、音乐理解与风格意识。学生将逐步学会独立练习、以更敏锐的听觉审视自己的演奏，并建立个人的艺术表达。</p>
          </section>

          <section>
            <h2 className="text-2xl font-light sm:text-3xl">适合哪些学生</h2>
            <p className="mt-5 leading-relaxed text-white/75">工作室尤其适合已有钢琴学习经验的学生、中高级程度的钢琴学习者、学习动力强的低龄学生，以及准备演出、考试、比赛或试演的学生。是否合适将根据每位学生的学习背景与目标个别判断。</p>
          </section>

          <section>
            <h2 className="text-2xl font-light sm:text-3xl">服务地区</h2>
            <p className="mt-5 leading-relaxed text-white/75">工作室位于 Wilmette，服务芝加哥北岸的家庭，包括 Wilmette、Winnetka、Kenilworth、Northfield、Evanston、Glencoe 及周边社区。</p>
          </section>

          <section>
            <h2 className="text-2xl font-light sm:text-3xl">演出、试演与比赛准备</h2>
            <p className="mt-5 leading-relaxed text-white/75">针对进阶学生的指导可包括曲目选择、音乐诠释、技术发展，以及为演出、比赛和试演进行周密准备，始终以学生当前的发展阶段为基础。</p>
          </section>

          <section>
            <h2 className="text-2xl font-light sm:text-3xl">咨询课程</h2>
            <p className="mt-5 leading-relaxed text-white/75">欢迎在咨询时说明学生的年龄、学习年限、目前或近期曲目、现任老师（如适用）以及音乐学习目标。这些信息有助于判断工作室是否合适。</p>
            <a href={inquiryHref} className="mt-5 inline-block text-sm underline underline-offset-4 transition-opacity hover:opacity-70">咨询钢琴课程</a>
          </section>
        </div>

        <section className="mt-20 border-t border-white/20 pt-14">
          <h2 className="text-2xl font-light sm:text-3xl">常见问题</h2>
          <div className="mt-8 grid gap-x-16 gap-y-8 md:grid-cols-2">
            <div><h3 className="text-lg">私人钢琴课在哪里进行？</h3><p className="mt-3 leading-relaxed text-white/75">课程在伊利诺伊州 Wilmette 提供。</p></div>
            <div><h3 className="text-lg">石文婷教授哪些程度的学生？</h3><p className="mt-3 leading-relaxed text-white/75">工作室以学习动力强的学生为主，尤其适合中高级学生与学习态度认真的低龄学生。</p></div>
            <div><h3 className="text-lg">是否指导比赛和试演？</h3><p className="mt-3 leading-relaxed text-white/75">可以。是否进行比赛或试演准备，会依据学生的目标与发展阶段决定。</p></div>
            <div><h3 className="text-lg">Wilmette 以外的学生可以学习吗？</h3><p className="mt-3 leading-relaxed text-white/75">可以。石文婷也与来自芝加哥北岸其他社区的家庭合作。</p></div>
            <div><h3 className="text-lg">如何申请或咨询课程？</h3><p className="mt-3 leading-relaxed text-white/75">请通过邮件说明学生的年龄、学习背景、近期曲目和音乐目标。</p></div>
          </div>
        </section>
      </article>
    </main>
  );
}