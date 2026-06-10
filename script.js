/* ==============================================
   作品集 - 交互脚本（含中英双语）
   作品数据 + 筛选 + 滚动入场 + 数字滚动 + 装饰动效 + i18n
   ============================================== */

// ===== 中英字典 =====
const i18n = {
  zh: {
    "page-title": "作品集",
    "logo": "永远相信美好的事情即将发生",

    "nav-work": "作品",
    "nav-about": "关于",
    "nav-skill": "技能",
    "nav-contact": "联系",
    "btn-resume": "简历",

    "kicker": "科技师 / AI 创作",
    "hero-sub": "软件专业出身，专注把品牌信息、节奏和视觉想象做成清晰、有记忆点的动态影像。",
    "btn-view-work": "查看作品",
    "btn-contact": "联系合作",
    "meta-coverage-label": "覆盖类型",
    "meta-coverage-value": "项目管理 / 系统架构设计 / 前后端开发 / 数据库设计 / 测试与运维",
    "meta-method-label": "创作方法",
    "meta-method-value": "Java/Python + SpringBoot/MyBatis 全栈开发 + AI 辅助代码生成",
    "hero-footer-tag": "welcome / AI GENERATED IDEA",

    "eyebrow-work": "SELECTED WORK",
    "work-title": "無限進步",
    "work-desc": "作品按素材类型整理，点击卡片可以查看该分类下的视频内容。",

    "filter-all": "全部",
    "filter-web": "Web项目",
    "filter-backend": "后端服务",
    "filter-mini": "小程序",
    "filter-tiktok": "Tiktok 作品",
    "filter-ai": "AI作品",
    "filter-devops": "运维部署",

    "eyebrow-about": "ABOUT",
    "about-title": "软件工程专业出身，<br>爱探索，也爱创新。",
    "about-desc": "项目经历覆盖系统架构设计、前后端开发、数据库设计与性能优化，含 Web 应用、小程序及企业级项目。能够快速理解业务需求，并熟练借助 AI 辅助代码开发与问题排查。",
    "stat-label-1": "项目类型",
    "stat-label-2": "核心方向",
    "stat-label-3": "传统工作",
    "stat-num-3": "偶尔手搓",

    "eyebrow-workflow": "WORKFLOW",
    "workflow-title": "从需求到动态表达",
    "flow-title-1": "理解目标",
    "flow-desc-1": "先明确用户场景、业务目标和技术优先级，让方案服务于核心需求。",
    "flow-title-2": "建立节奏",
    "flow-desc-2": "用架构设计、模块拆分和接口定义组织开发路径，确保可维护与可扩展。",
    "flow-title-3": "AI 辅助扩展",
    "flow-desc-3": "结合 Copilot、GPT 提升代码生成、问题排查和文档编写效率。",

    "eyebrow-skill": "TOOLKIT",
    "skill-title": "技能 / 软件",
    "skill-name-1": "Cursor",
    "skill-desc-1": "辅助开发工具",
    "skill-name-2": "Codex",
    "skill-desc-2": "办公帮手 / 节奏控制",
    "skill-name-3": "即梦",
    "skill-desc-3": "AI 视频 / 画面生成",
    "skill-name-4": "可灵",
    "skill-desc-4": "AI 视频 / 内容生成",
    "skill-name-5": "GPT",
    "skill-desc-5": "AI 辅助 / 灵感拓展",
    "skill-name-6": "Mysql",
    "skill-desc-6": "数据库 / 存储",

    "eyebrow-contact": "CONTACT",
    "contact-title": "一起做一个<br>更会动的想法。",
    "contact-desc": "欢迎联系求职机会、项目合作或作品集交流。",
    "contact-label-1": "电话 / TEL",
    "contact-action-1": "复制电话 →",
    "contact-label-2": "邮箱 / EMAIL",
    "contact-action-2": "复制邮箱 →",
    "contact-label-3": "简历 / RESUME",
    "contact-action-3": "查看简历 →",
    "copy-ok-phone": "✓ 已复制电话",
    "copy-ok-email": "✓ 已复制邮箱",

    "footer": "© 2026 开发 with AI，让想象被看见。",
    "work-link": "查看详情 →",
  },

  en: {
    "page-title": "Portfolio",
    "logo": "Always believe good things are about to happen",

    "nav-work": "Work",
    "nav-about": "About",
    "nav-skill": "Skill",
    "nav-contact": "Contact",
    "btn-resume": "Resume",

    "kicker": "Motion Designer / AI Creator",
    "hero-sub": "With a background in film & software, I focus on turning brand messages, rhythm, and visual ideas into clear, memorable motion.",
    "btn-view-work": "View Work",
    "btn-contact": "Contact",
    "meta-coverage-label": "Coverage",
    "meta-coverage-value": "Project Management / System Architecture / Full-stack Dev / Database / DevOps",
    "meta-method-label": "Method",
    "meta-method-value": "Java/Python + SpringBoot/MyBatis full-stack + AI-assisted code generation",
    "hero-footer-tag": "AE TIMELINE / AI GENERATED IDEA",

    "eyebrow-work": "SELECTED WORK",
    "work-title": "INFINITE PROGRESS",
    "work-desc": "Organized by content type. Click a card to see the videos in that category.",

    "filter-all": "All",
    "filter-web": "Web Apps",
    "filter-backend": "Backend",
    "filter-mini": "Mini Program",
    "filter-tiktok": "Tiktok",
    "filter-ai": "AI",
    "filter-devops": "DevOps",

    "eyebrow-about": "ABOUT",
    "about-title": "Software engineer at heart,<br>exploring and innovating.",
    "about-desc": "Project experience covers system architecture, full-stack development, database design and performance tuning — including web apps, mini programs and enterprise projects. I quickly understand business needs and actively use AI to assist coding and troubleshooting.",
    "stat-label-1": "Project Types",
    "stat-label-2": "Core Direction",
    "stat-label-3": "Craft",
    "stat-num-3": "Hand-crafted",

    "eyebrow-workflow": "WORKFLOW",
    "workflow-title": "From Brief to Motion",
    "flow-title-1": "Understand Goals",
    "flow-desc-1": "Clarify user context, business goals, and tech priorities so the solution serves the core need.",
    "flow-title-2": "Build Rhythm",
    "flow-desc-2": "Use architecture, module breakdown, and interface contracts to organize a maintainable, scalable path.",
    "flow-title-3": "AI-Assisted Expansion",
    "flow-desc-3": "Combine Copilot and GPT to boost code generation, troubleshooting, and documentation.",

    "eyebrow-skill": "TOOLKIT",
    "skill-title": "Skills / Software",
    "skill-name-1": "Cursor",
    "skill-desc-1": "AI dev assistant",
    "skill-name-2": "Codex",
    "skill-desc-2": "Productivity / Workflow",
    "skill-name-3": "Jimeng",
    "skill-desc-3": "AI video / Generation",
    "skill-name-4": "Kling",
    "skill-desc-4": "AI video / Content",
    "skill-name-5": "GPT",
    "skill-desc-5": "AI assist / Ideation",
    "skill-name-6": "Mysql",
    "skill-desc-6": "Database / Storage",

    "eyebrow-contact": "CONTACT",
    "contact-title": "Let's bring<br>an idea to life.",
    "contact-desc": "Open to opportunities, project collaboration, and portfolio chats.",
    "contact-label-1": "Tel",
    "contact-action-1": "Copy phone →",
    "contact-label-2": "Email",
    "contact-action-2": "Copy email →",
    "contact-label-3": "Resume",
    "contact-action-3": "View resume →",
    "copy-ok-phone": "✓ Phone copied",
    "copy-ok-email": "✓ Email copied",

    "footer": "© 2026 Built with AI. Motion makes imagination visible.",
    "work-link": "View details →",
  },
};

// ===== 作品数据（双语）=====
const works = [
  {
    num: "01",
    cat: "web",
    en: "WEB / FRONT-END",
    tag: { zh: "Web项目 / 前端开发", en: "Web / Front-end" },
    title: { zh: "Web项目", en: "Web Apps" },
    desc: {
      zh: "响应式界面开发、组件化构建与交互体验优化，完成完整前端功能实现。",
      en: "Responsive UIs, component architecture, and interaction polish — shipping full front-end features.",
    },
    colors: ["dc-yellow", "dc-blue", "dc-ink"],
  },
  {
    num: "02",
    cat: "backend",
    en: "BACKEND / API SERVICE",
    tag: { zh: "后端服务 / 接口开发", en: "Backend / API" },
    title: { zh: "后端服务", en: "Backend" },
    desc: {
      zh: "业务逻辑开发、接口设计与数据处理，保障系统稳定、高效与安全运行。",
      en: "Business logic, API design and data processing — keeping systems stable, fast, and secure.",
    },
    colors: ["dc-pink", "dc-yellow", "dc-blue"],
  },
  {
    num: "03",
    cat: "mini-program",
    en: "MINI PROGRAM / APP",
    tag: { zh: "小程序 / 移动端应用", en: "Mini Program / App" },
    title: { zh: "小程序", en: "Mini Program" },
    desc: {
      zh: "轻量级应用开发，多端适配与功能闭环，打造流畅易用的移动端体验。",
      en: "Lightweight apps with multi-platform adaptation and end-to-end features — smooth and easy to use.",
    },
    colors: ["dc-mint", "dc-orange", "dc-pink"],
  },
  {
    num: "04",
    cat: "tiktok",
    en: "OVERSEAS SHORT VIDEO",
    tag: { zh: "海外短视频 / 信息流", en: "Overseas / Feed" },
    title: { zh: "Tiktok 作品", en: "Tiktok" },
    desc: {
      zh: "面向海外平台节奏，快速完成高适配度动态创意。",
      en: "Built for overseas platforms — fast turnaround on highly adaptable motion creatives.",
    },
    colors: ["dc-blue", "dc-yellow", "dc-pink"],
  },
  {
    num: "05",
    cat: "ai",
    en: "AI / VIDEO GEN",
    tag: { zh: "AI 创作 / 视频生成", en: "AI / Video Gen" },
    title: { zh: "AI 作品", en: "AI Works" },
    desc: {
      zh: "结合AI工具与模型，实现智能功能集成、自动化开发与效率提升。",
      en: "Integrating AI tools & models for smart features, automation, and efficiency gains.",
    },
    colors: ["dc-ink", "dc-yellow", "dc-mint"],
  },
  {
    num: "06",
    cat: "devops",
    en: "DEVOPS / DEPLOYMENT",
    tag: { zh: "运维部署 / 项目上线", en: "DevOps / Deploy" },
    title: { zh: "数据库运维", en: "DevOps" },
    desc: {
      zh: "自动化部署、环境配置与服务监控，确保项目稳定上线与持续运行。",
      en: "Automated deployment, environment setup, and service monitoring for stable, ongoing operations.",
    },
    colors: ["dc-orange", "dc-ink", "dc-blue"],
  },
];

// ===== 当前语言 =====
let currentLang = localStorage.getItem("lang") || "zh";

// ===== 切换语言函数 =====
function setLang(lang, animate = true) {
  currentLang = lang;
  localStorage.setItem("lang", lang);

  // 切换时短暂淡出
  if (animate) {
    document.body.classList.add("i18n-fade-out");
    setTimeout(() => {
      applyLang(lang);
      document.body.classList.remove("i18n-fade-out");
    }, 220);
  } else {
    applyLang(lang);
  }
}

function applyLang(lang) {
  const dict = i18n[lang];

  // 替换普通文本
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  // 替换 HTML（含 <br>）
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  // 切换 <html lang>
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";

  // 切换按钮高亮
  const langBtn = document.getElementById("langBtn");
  if (langBtn) {
    langBtn.querySelector(".lang-zh").classList.toggle("is-active", lang === "zh");
    langBtn.querySelector(".lang-en").classList.toggle("is-active", lang === "en");
  }

  // 重新渲染作品卡片（因为卡片里也有中英）
  renderWorks(getCurrentFilter());
}

// ===== 渲染作品卡片 =====
const grid = document.getElementById("workGrid");

function getCurrentFilter() {
  const active = document.querySelector(".chip.is-active");
  return active ? active.dataset.filter : "all";
}

function renderWorks(filter = "all") {
  grid.innerHTML = "";
  const list = filter === "all" ? works : works.filter((w) => w.cat === filter);
  const linkText = i18n[currentLang]["work-link"];

  list.forEach((w, i) => {
    const card = document.createElement("div");
    card.className = "work-card fade-up";
    card.style.transitionDelay = `${i * 70}ms`;
    card.innerHTML = `
      <div class="work-card-art">
        <div class="work-card-deco">
          ${w.colors.map((c) => `<span class="deco-block ${c}"></span>`).join("")}
        </div>
        <div class="work-num">${w.num}</div>
        <div class="work-card-en">${w.en}</div>
      </div>
      <div class="work-card-tag">${w.tag[currentLang]}</div>
      <h3 class="work-title">${w.title[currentLang]}</h3>
      <p class="work-desc">${w.desc[currentLang]}</p>
      <span class="work-link">${linkText}</span>
    `;
    card.addEventListener("click", () => console.log("查看分类：", w.title[currentLang]));
    grid.appendChild(card);
  });

  requestAnimationFrame(() => {
    grid.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
  });
}

// ===== 分类筛选 =====
document.querySelectorAll(".chip").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".chip").forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    renderWorks(btn.dataset.filter);
  });
});

// ===== 滚动入场动画 =====
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        if (entry.target.classList.contains("stat-num") && entry.target.dataset.target) {
          countUp(entry.target);
        }
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));

// ===== 数字滚动 =====
function countUp(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1500;
  const start = performance.now();
  function tick(now) {
    const t = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = Math.round(target * eased);
    if (t < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

// ===== 导航栏滚动效果 =====
const nav = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 20) nav.classList.add("scrolled");
  else nav.classList.remove("scrolled");
});

// ===== 联系方式：点一下复制 =====
document.querySelectorAll(".contact-card").forEach((card) => {
  card.addEventListener("click", (e) => {
    if (card.getAttribute("target") === "_blank") return;
    e.preventDefault();
    const value = card.querySelector(".contact-value").textContent;
    const isPhone = /^\d+$/.test(value);
    const tip = isPhone ? i18n[currentLang]["copy-ok-phone"] : i18n[currentLang]["copy-ok-email"];

    const setOk = () => flashAction(card, tip);
    if (navigator.clipboard) {
      navigator.clipboard.writeText(value).then(setOk);
    } else {
      const ta = document.createElement("textarea");
      ta.value = value;
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); setOk(); } catch (err) {}
      document.body.removeChild(ta);
    }
  });
});

function flashAction(card, text) {
  const el = card.querySelector(".contact-action");
  const old = el.textContent;
  el.textContent = text;
  setTimeout(() => (el.textContent = old), 1500);
}

// ===== 中英切换按钮 =====
const langBtn = document.getElementById("langBtn");
if (langBtn) {
  langBtn.addEventListener("click", () => {
    setLang(currentLang === "zh" ? "en" : "zh");
  });
}

// ===== 鼠标移动时涂鸦轻微跟随 =====
const doodle = document.querySelector(".doodle");
if (doodle) {
  let raf = null;
  document.addEventListener("mousemove", (e) => {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      const x = (e.clientX / window.innerWidth - 0.5) * 8;
      const y = (e.clientY / window.innerHeight - 0.5) * 8;
      doodle.style.transform = `translate(${x}px, ${y}px)`;
      raf = null;
    });
  });
}

// ===== 装饰胶带：鼠标靠近推开 =====
document.querySelectorAll(".tape").forEach((tape) => {
  const base = tape.style.transform || "";
  document.addEventListener("mousemove", (e) => {
    const r = tape.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.hypot(dx, dy);
    if (dist < 120) {
      const force = (120 - dist) / 120;
      tape.style.transform = `translate(${(-dx / dist) * 12 * force}px, ${(-dy / dist) * 12 * force}px) ${base}`;
    } else {
      tape.style.transform = base;
    }
  });
});

// ===== 首次应用语言（无动画）=====
setLang(currentLang, false);
