export interface UITranslation {
  nav: {
    home: string;
    about: string;
    education: string;
    research: string;
    publications: string;
    grants: string;
    skills: string;
    contact: string;
  };
  hero: {
    rolePill: string;
    btnPublications: string;
    btnResearch: string;
    btnContact: string;
    copyEmailTitle: string;
    copyJapanPhoneTitle: string;
    copyIndiaPhoneTitle: string;
  };
  about: {
    sectionTag: string;
    sectionTitle: string;
    sectionDesc: string;
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
    card3Title: string;
    card3Desc: string;
  };
  education: {
    sectionTag: string;
    sectionTitle: string;
    sectionDesc: string;
    distinctionLabel: string;
    thesisPrefix: string;
  };
  research: {
    sectionTag: string;
    sectionTitle: string;
    sectionDesc: string;
    allTab: string;
    categoryMap: Record<string, string>;
  };
  publications: {
    sectionTag: string;
    sectionTitle: string;
    sectionDesc: string;
    btnDoi: string;
    btnCopyCite: string;
  };
  grants: {
    sectionTag: string;
    sectionTitle: string;
    sectionDesc: string;
  };
  skills: {
    sectionTag: string;
    sectionTitle: string;
    sectionDesc: string;
    langTitle: string;
    langDesc: string;
  };
  leadership: {
    sectionTag: string;
    sectionTitle: string;
    sectionDesc: string;
  };
  contact: {
    sectionTag: string;
    sectionTitle: string;
    sectionDesc: string;
    primaryEmail: string;
    univEmail: string;
    phoneJapan: string;
    phoneIndia: string;
    btnEmail: string;
    btnCall: string;
    btnCopy: string;
    baseTitle: string;
    baseDesc: string;
    locationLabel: string;
    degreesLabel: string;
    degreesVal: string;
  };
  footer: {
    copySuffix: string;
    subText: string;
  };
  toasts: {
    copiedSuccess: string;
    langSwitched: string;
  };
}

export const uiTranslations: Record<'en' | 'ja', UITranslation> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      education: "Education",
      research: "Research",
      publications: "Publications",
      grants: "Grants",
      skills: "Expertise",
      contact: "Contact"
    },
    hero: {
      rolePill: "Plant Physiology & Sustainable Horticulture Researcher",
      btnPublications: "View Publications",
      btnResearch: "Explore Research",
      btnContact: "Get In Touch",
      copyEmailTitle: "Click to copy email",
      copyJapanPhoneTitle: "Click to copy Japan phone",
      copyIndiaPhoneTitle: "Click to copy India phone"
    },
    about: {
      sectionTag: "Scientific Background",
      sectionTitle: "Research Philosophy & Focus",
      sectionDesc: "Bridging fundamental plant photobiology with practical seed enhancement protocols to foster resilient crop production facing global climate challenges.",
      card1Title: "🔬 Plant Physiology & Photoreceptors",
      card1Desc: "Investigating the role of cryptochrome blue light photoreceptors in plant development, seed vigor, and morphology in Arabidopsis thaliana at Wageningen University & Research.",
      card2Title: "🌾 Seed Priming & Direct Sowing",
      card2Desc: "Co-authored peer-reviewed research on restoring root vitality in tomato crops under salt stress and optimizing iron-coated rice seed performance for sustainable direct sowing.",
      card3Title: "🌍 Global Collaborative Fieldwork",
      card3Desc: "Experienced across international research environments spanning Japan, India, Taiwan, and the Netherlands, combining rigorous laboratory analysis with practical agronomy."
    },
    education: {
      sectionTag: "Academic Trajectory",
      sectionTitle: "Education & Academic Training",
      sectionDesc: "Specialized training in international horticultural sciences, seed technology, and environmental plant biology across premier agricultural institutions.",
      distinctionLabel: "★ Distinction:",
      thesisPrefix: "Master's Thesis:"
    },
    research: {
      sectionTag: "Hands-on Experience",
      sectionTitle: "Research Projects & Academic Leadership",
      sectionDesc: "Applied agronomic investigations, precision crop modeling, laboratory teaching, and international agricultural leadership.",
      allTab: "All",
      categoryMap: {
        "All": "All",
        "Field Research & Sustainability": "Field Research & Sustainability",
        "Academic Teaching & Lab Leadership": "Academic Teaching & Lab Leadership",
        "International Fellowship": "International Fellowship"
      }
    },
    publications: {
      sectionTag: "Scientific Output",
      sectionTitle: "Peer-Reviewed Publications & Articles",
      sectionDesc: "Original research contributions in seed priming, abiotic stress resilience, and sustainable agricultural technologies.",
      btnDoi: "View Article (DOI)",
      btnCopyCite: "📋 Copy Citation"
    },
    grants: {
      sectionTag: "Recognition & Merit",
      sectionTitle: "Research Grants & Academic Scholarships",
      sectionDesc: "Competitive research funding and academic excellence awards honoring contributions to horticultural sciences."
    },
    skills: {
      sectionTag: "Competencies",
      sectionTitle: "Laboratory, Agronomic & Analytical Expertise",
      sectionDesc: "Hands-on technical competencies in physiological instrumentation, digital microscopy, experimental design, and data modeling.",
      langTitle: "🌐 Multilingual Proficiencies & Certifications",
      langDesc: "Strong multilingual capability enabling seamless cross-border research collaborations and international communication."
    },
    leadership: {
      sectionTag: "Professional Adaptability",
      sectionTitle: "Community Extension & Work Experience",
      sectionDesc: "Agricultural extension demonstrations with farmers, bilingual Tokyo retail management, and international promotional collaboration."
    },
    contact: {
      sectionTag: "Let's Connect",
      sectionTitle: "Contact & Scientific Inquiries",
      sectionDesc: "Interested in discussing research collaborations, seed physiology inquiries, or agricultural innovation? Feel free to reach out directly.",
      primaryEmail: "Primary Email",
      univEmail: "University Email (Tokyo NODAI)",
      phoneJapan: "Phone (Japan)",
      phoneIndia: "Phone (India)",
      btnEmail: "Email",
      btnCall: "Call",
      btnCopy: "Copy",
      baseTitle: "Current Base of Research",
      baseDesc: "Currently conducting graduate studies and research across Tokyo University of Agriculture (Setagaya, Tokyo, Japan) and Wageningen University & Research (Netherlands). Open to academic exchange, seed industry research collaborations, and conference speaking engagements.",
      locationLabel: "Location:",
      degreesLabel: "Degrees:",
      degreesVal: "BSc (Tokyo NODAI), MSc Candidate (Tokyo NODAI & WUR Exchange)"
    },
    footer: {
      copySuffix: "MSc Plant Sciences (Horticulture)",
      subText: "Tokyo University of Agriculture & Wageningen University & Research"
    },
    toasts: {
      copiedSuccess: "copied to clipboard!",
      langSwitched: "Language switched to English"
    }
  },
  ja: {
    nav: {
      home: "ホーム",
      about: "研究概要",
      education: "学歴・経歴",
      research: "研究実績",
      publications: "学術論文",
      grants: "助成・奨学金",
      skills: "専門技術",
      contact: "お問い合わせ"
    },
    hero: {
      rolePill: "植物生理学・持続可能農業研究者",
      btnPublications: "論文一覧を見る",
      btnResearch: "研究実績を見る",
      btnContact: "お問い合わせ",
      copyEmailTitle: "クリックしてメールアドレスをコピー",
      copyJapanPhoneTitle: "クリックして日本の電話番号をコピー",
      copyIndiaPhoneTitle: "クリックしてインドの電話番号をコピー"
    },
    about: {
      sectionTag: "研究背景・理念",
      sectionTitle: "研究理念と専門領域",
      sectionDesc: "基礎的な植物光生物学と実践的な種子機能向上技術を架橋し、地球規模の気候変動に立ち向かう強靭な作物生産体系の創出を目指します。",
      card1Title: "🔬 植物生理学 & 青色光受容体",
      card1Desc: "オランダ・ワーゲニンゲン大学にて、シロイヌナズナ（Arabidopsis thaliana）における青色光受容体クリプトクロムが植物発生、種子活力、および形態形成に及ぼす生理的役割を解明。",
      card2Title: "🌾 種子プライミング & 直播栽培",
      card2Desc: "塩分ストレス下でのトマト幼苗の根端活性回復、および鉄コーティング水稲老化種子の発芽向上と直播適性に関する査読付き学術論文を共著執筆。",
      card3Title: "🌍 国際共同研究 & フィールド実証",
      card3Desc: "日本、インド、台湾、オランダの多角的な国際研究環境において、高精度な実験室分析と圃場実践農学を有機的に統合。"
    },
    education: {
      sectionTag: "学歴・研究歴",
      sectionTitle: "教育背景・学術トレーニング",
      sectionDesc: "主要な国際農学研究機関において、園芸科学、種子科学、環境植物生物学の高度な専門教育と実験訓練を履修。",
      distinctionLabel: "★ 首席・特待:",
      thesisPrefix: "修士論文:"
    },
    research: {
      sectionTag: "研究実績",
      sectionTitle: "研究プロジェクト & 学術活動",
      sectionDesc: "応用農学実験、精密作物モデリング、大学実験指導、国際農業リーダーシップの実践。",
      allTab: "すべて",
      categoryMap: {
        "All": "すべて",
        "Field Research & Sustainability": "フィールド研究・持続可能性",
        "Academic Teaching & Lab Leadership": "教育指導・研究指導",
        "International Fellowship": "国際共同プログラム"
      }
    },
    publications: {
      sectionTag: "研究業績",
      sectionTitle: "査読付き学術論文・報文",
      sectionDesc: "種子プライミング、非生物的ストレス耐性、持続可能農業技術に関する原著論文・学術論考。",
      btnDoi: "論文本文（DOI）",
      btnCopyCite: "📋 引用をコピー"
    },
    grants: {
      sectionTag: "受賞・研究資金",
      sectionTitle: "研究助成金 & 給付型奨学金",
      sectionDesc: "園芸農学・植物生理学への学術的貢献を評価された競争的研究助成金および学業優秀賞。"
    },
    skills: {
      sectionTag: "専門スキル",
      sectionTitle: "実験・栽培・データ解析技術",
      sectionDesc: "生理化学分析機器、デジタル顕微鏡解析、圃場・温室栽培試験、統計データ解析の実践的スキル。",
      langTitle: "🌐 語学力・語学認定",
      langDesc: "国際共同研究や異文化間コミュニケーションを円滑に推進する高度な多言語運用能力。"
    },
    leadership: {
      sectionTag: "社会連携・実務経験",
      sectionTitle: "普及活動・実務マネジメント",
      sectionDesc: "農家向け農業普及指導、都内での日本語接客・在庫管理、および国際映像プロモーション活動。"
    },
    contact: {
      sectionTag: "お問い合わせ",
      sectionTitle: "お問い合わせ・共同研究のご相談",
      sectionDesc: "植物生理学・種子科学に関する共同研究、学術講演、技術的なご質問など、お気軽にお問い合わせください。",
      primaryEmail: "個人メールアドレス",
      univEmail: "大学メールアドレス（東京農業大学）",
      phoneJapan: "電話番号（日本）",
      phoneIndia: "電話番号（インド）",
      btnEmail: "メール送信",
      btnCall: "発信",
      btnCopy: "コピー",
      baseTitle: "現在の研究拠点",
      baseDesc: "現在、東京農業大学大学院（東京都世田谷区）およびワーゲニンゲン大学・研究機関（オランダ）を拠点に研究活動を展開中。学術交流、種苗・アグリテック企業との共同研究、国際学会での発表機会を歓迎いたします。",
      locationLabel: "研究拠点:",
      degreesLabel: "取得・在籍学位:",
      degreesVal: "学士（農学・東京農業大学）、農学修士課程（東京農業大学大学院 & ワーゲニンゲン大学 客員研究員）"
    },
    footer: {
      copySuffix: "東京農業大学大学院 農学修士課程（植物科学・園芸農学）",
      subText: "東京農業大学大学院 & ワーゲニンゲン大学・研究機関（WUR）"
    },
    toasts: {
      copiedSuccess: "をクリップボードにコピーしました！",
      langSwitched: "言語を日本語に切り替えました"
    }
  }
};
