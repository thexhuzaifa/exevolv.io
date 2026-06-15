export interface Product {
  id: string
  name: string
  slug: string
  tagline: string
  description: string
  category: 'chrome-extension' | 'firefox-extension' | 'edge-extension' | 'android-app' | 'web-app'
  icon: string
  screenshots: string[]
  features: {
    title: string
    description: string
    icon: string
  }[]
  storeUrl: string
  storeId: string
  rating: number
  users: string
  version: string
  lastUpdated: string
  developer: string
  privacyPolicyUrl: string
  supportUrl: string
}

export const products: Product[] = [
  {
    id: 'proxyconnectorpro',
    name: 'ProxyConnector Pro',
    slug: 'proxyconnectorpro',
    tagline: 'Safe, Secure, Private Proxy Connector',
    description: 'ProxyConnector Pro is a powerful and secure proxy management extension designed to protect your online privacy. It allows you to easily connect, switch, and manage proxies while preventing IP leaks with built-in WebRTC protection. With automatic timezone matching and a smooth user experience, it ensures safe and reliable browsing every time.',
    category: 'chrome-extension',
    icon: '/Assets/ProxyConnectorPro/ProxyConnectorPro-logo.png',
    screenshots: [
      '/Assets/ProxyConnectorPro/Graphic1.png',
      '/Assets/ProxyConnectorPro/Graphic2.png',
      '/Assets/ProxyConnectorPro/Graphic3.png'
    ],
    features: [
      {
        title: 'Proxy Management',
        description: 'Easily connect, switch, and manage multiple proxies with one click.',
        icon: 'Shield'
      },
      {
        title: 'WebRTC Protection',
        description: 'Built-in WebRTC leak protection to prevent IP address exposure.',
        icon: 'Lock'
      },
      {
        title: 'Auto Timezone',
        description: 'Automatic timezone matching based on your proxy location.',
        icon: 'Globe'
      },
      {
        title: 'Privacy Focused',
        description: 'No data collection or storage. Your privacy is our priority.',
        icon: 'Eye'
      },
      {
        title: 'Easy Interface',
        description: 'Clean and intuitive user interface for seamless browsing.',
        icon: 'Zap'
      },
      {
        title: 'Secure Connection',
        description: 'All connections are encrypted for maximum security.',
        icon: 'ShieldCheck'
      }
    ],
    storeUrl: 'https://chromewebstore.google.com/detail/ip-filter-exchange/abnppbcbieejncolbmahjmbfallhinie',
    storeId: 'abnppbcbieejncolbmahjmbfallhinie',
    rating: 5.0,
    users: '100+',
    version: '2.3.2',
    lastUpdated: 'January 18, 2026',
    developer: 'exevolv.io',
    privacyPolicyUrl: '/products/proxyconnectorpro/privacy-policy',
    supportUrl: '/products/proxyconnectorpro/documentation'
  },
  {
    id: 'uc-max',
    name: 'UC Max',
    slug: 'uc-max',
    tagline: 'Earn Real UC by completing tasks, surveys and solving PUBG quizes.',
    description: 'UC Max is a mobile app that allows users to earn UC by completing various tasks, participating in surveys, and solving quizzes related to PUBG. It\'s a fun and engaging way to get in-game currency.',
    category: 'android-app',
    icon: '/Assets/UCMAX/UCMAXlogo.png',
    screenshots: [
      '/Assets/UCMAX/Graphic1.png',
      '/Assets/UCMAX/image1.jpg',
      '/Assets/UCMAX/image2.jpg'
    ],
    features: [
      {
        title: 'Earn UC',
        description: 'Complete tasks and surveys to earn real UC for PUBG.',
        icon: 'DollarSign'
      },
      {
        title: 'PUBG Quizzes',
        description: 'Test your PUBG knowledge and earn rewards by solving quizzes.',
        icon: 'HelpCircle'
      },
      {
        title: 'Secure & Reliable',
        description: 'Your account and earnings are kept secure.',
        icon: 'Shield'
      },
      {
        title: 'Easy Withdrawals',
        description: 'Easily withdraw your earned UC to your PUBG account.',
        icon: 'Gift'
      },
      {
        title: 'User Privacy',
        description: 'We respect your privacy and handle your data with care.',
        icon: 'Lock'
      }
    ],
    storeUrl: '#',
    storeId: '',
    rating: 4.5,
    users: '1K+',
    version: '1.0.0',
    lastUpdated: 'June 6, 2026',
    developer: 'exevolv.io',
    privacyPolicyUrl: '/products/uc-max/privacy-policy',
    supportUrl: '/contact'
  },
  {
    id: 'quizmaster-ai',
    name: 'QuizMaster AI',
    slug: 'quizmaster-ai',
    tagline: 'Instant Quiz Solver – Your Intelligent Study Companion',
    description: 'Transform the way you approach online quizzes and multiple-choice questions with QuizMaster AI. Our advanced artificial intelligence technology scans your screen, extracts questions, and provides accurate answers with comprehensive explanations in seconds.',
    category: 'chrome-extension',
    icon: '/Assets/QuizMasterAI-Extension/QuizMasterAI-Extension-logo.png',
    screenshots: [
      '/Assets/QuizMasterAI-Extension/Graphic1.png',
      '/Assets/QuizMasterAI-Extension/Graphic2.png',
      '/Assets/QuizMasterAI-Extension/Graphic3.png'
    ],
    features: [
      {
        title: 'Scan and Solve',
        description: 'Capture any quiz or test on your screen with a single click. AI-powered OCR extracts all visible questions instantly.',
        icon: 'Scan'
      },
      {
        title: 'Instant Answers',
        description: 'Receive correct answers within seconds powered by state-of-the-art language models.',
        icon: 'Zap'
      },
      {
        title: 'Detailed Explanations',
        description: 'Understand not just what the answer is, but why it\'s correct with clear explanations.',
        icon: 'BookOpen'
      },
      {
        title: 'AI Assistant',
        description: 'Access an intelligent chat interface 24/7 for questions, clarification, or study guidance.',
        icon: 'MessageSquare'
      },
      {
        title: 'Smart Persistence',
        description: 'Your scan results remain visible until you perform a new scan.',
        icon: 'Save'
      },
      {
        title: 'Privacy First',
        description: 'All processing happens through secure encrypted connections. No personal data stored.',
        icon: 'Shield'
      }
    ],
    storeUrl: 'https://chromewebstore.google.com/detail/quizmaster-ai-%E2%80%93-instant-q/baeiclpjplbiebkghalehgofhmcinnmn',
    storeId: 'baeiclpjplbiebkghalehgofhmcinnmn',
    rating: 5.0,
    users: '50+',
    version: '1.1.1',
    lastUpdated: 'February 3, 2026',
    developer: 'exevolv.io',
    privacyPolicyUrl: '/products/quizmaster-ai/privacy-policy',
    supportUrl: '/products/quizmaster-ai/documentation'
  },
  {
    id: 'pulser-pro',
    name: 'Pulser Pro',
    slug: 'pulser-pro',
    tagline: 'Sound Booster – Boost Volume Up to 600%',
    description: 'Pulser Pro is a powerful sound booster Chrome extension that amplifies audio up to 600% on any website. Whether you\'re watching YouTube, streaming on Netflix, or attending online meetings, Pulser Pro delivers crystal-clear, ultra-loud sound with a sleek and intuitive interface. Fine-tune volume, bass, and audio profiles per tab — all with zero lag.',
    category: 'chrome-extension',
    icon: '/Assets/PulserPro/PulserPrologo.png',
    screenshots: [
      '/Assets/PulserPro/Graphic1.png',
      '/Assets/PulserPro/Graphic2.png'
    ],
    features: [
      {
        title: '600% Volume Boost',
        description: 'Amplify any browser tab\'s audio up to 6x beyond the default maximum volume.',
        icon: 'Volume2'
      },
      {
        title: 'Per-Tab Control',
        description: 'Independently control volume levels for each open tab without affecting others.',
        icon: 'SlidersHorizontal'
      },
      {
        title: 'Bass Booster',
        description: 'Built-in bass enhancement to give your audio deeper, richer low-end frequencies.',
        icon: 'AudioWaveform'
      },
      {
        title: 'Works Everywhere',
        description: 'Compatible with YouTube, Netflix, Spotify, Google Meet, Zoom, and all websites.',
        icon: 'Globe'
      },
      {
        title: 'Zero Lag Audio',
        description: 'Real-time audio processing with no noticeable latency or delay.',
        icon: 'Zap'
      },
      {
        title: 'Privacy Focused',
        description: 'No data collection, no tracking. All audio processing happens locally on your device.',
        icon: 'Shield'
      }
    ],
    storeUrl: 'https://chromewebstore.google.com/detail/pulser-pro',
    storeId: '',
    rating: 5.0,
    users: '10+',
    version: '1.1.0',
    lastUpdated: 'February 10, 2026',
    developer: 'exevolv.io',
    privacyPolicyUrl: '/products/pulser-pro/privacy-policy',
    supportUrl: '/products/pulser-pro/documentation'
  },
  {
    id: 'zeroadsblocker',
    name: 'ZeroAds',
    slug: 'zeroadsblocker',
    tagline: 'Block All Ads, Instantly',
    description: 'ZeroAds is a lightweight and powerful ad blocker designed to give you a cleaner, faster, and more private browsing experience. It blocks video ads on YouTube and streaming platforms, display and banner ads, pop-ups, overlay notifications, and tracking scripts that monitor your online activity — all with zero configuration needed.',
    category: 'chrome-extension',
    icon: '/Assets/ZeroAds/ZerAdslogo.png',
    screenshots: [
      '/Assets/ZeroAds/Graphic1.png',
      '/Assets/ZeroAds/Graphic2.png',
      '/Assets/ZeroAds/Graphic3.png'
    ],
    features: [
      {
        title: 'Block All Ads',
        description: 'Automatically blocks video ads, display ads, banners, and pop-ups across all websites.',
        icon: 'ShieldOff'
      },
      {
        title: 'YouTube Ad Blocker',
        description: 'Removes video advertisements on YouTube and other streaming platforms seamlessly.',
        icon: 'MonitorPlay'
      },
      {
        title: 'Anti-Tracking',
        description: 'Blocks tracking scripts and third-party advertising networks that monitor your activity.',
        icon: 'EyeOff'
      },
      {
        title: 'Faster Browsing',
        description: 'Pages load faster by eliminating ads and reducing unnecessary data usage.',
        icon: 'Zap'
      },
      {
        title: 'Lightweight',
        description: 'Ultra-lightweight at just 63KB — runs efficiently without slowing down your browser.',
        icon: 'Feather'
      },
      {
        title: 'Zero Configuration',
        description: 'Works out of the box with no setup required. Install and start browsing ad-free instantly.',
        icon: 'CheckCircle'
      }
    ],
    storeUrl: 'https://chromewebstore.google.com/detail/zeroads-block-all-ads-ins/akghmpladinkabkggdhapldcfegedoci',
    storeId: 'akghmpladinkabkggdhapldcfegedoci',
    rating: 5.0,
    users: '1+',
    version: '1.0.5',
    lastUpdated: 'February 8, 2026',
    developer: 'exevolv.io',
    privacyPolicyUrl: '/products/zeroadsblocker/privacy-policy',
    supportUrl: '/products/zeroadsblocker/documentation'
  },
  {
    id: 'quizmaster-ai-android',
    name: 'QuizMaster AI App',
    slug: 'quizmaster-ai-android',
    tagline: 'Instant Quiz Solver – Android App',
    description: 'QuizMaster AI is a powerful mobile application designed to help you solve quizzes instantly. Simply scan any question on your screen or from your camera, and our advanced AI will provide detailed solutions with comprehensive explanations.',
    category: 'android-app',
    icon: '/Assets/QuizMasterApp/QuizMasterAI-App-logo.png',
    screenshots: [
      '/Assets/QuizMasterApp/Graphic1.png',
      '/Assets/QuizMasterApp/image1.jpg',
      '/Assets/QuizMasterApp/image2.jpg'
    ],
    features: [
      {
        title: 'Scan and Solve',
        description: 'Capture any quiz using your camera or floating screen capture widget for instant AI solutions.',
        icon: 'Scan'
      },
      {
        title: 'Cross-Device Sync',
        description: 'Sign in with Google to automatically save and access your quiz history on any device.',
        icon: 'Cloud'
      },
      {
        title: 'Smart AI Processing',
        description: 'Powered by Groq AI and Google ML Kit for accurate, real-time text extraction and answers.',
        icon: 'Bot'
      },
      {
        title: 'Multi-Tasking Overlay',
        description: 'Floating solver button provides a seamless experience without leaving your current app.',
        icon: 'Layers'
      }
    ],
    storeUrl: 'https://play.google.com/store/apps/details?id=com.exevolv.quizmasterai',
    storeId: 'com.exevolv.quizmasterai',
    rating: 5.0,
    users: '50+',
    version: '1.0.0',
    lastUpdated: 'May 09, 2026',
    developer: 'exevolv.io',
    privacyPolicyUrl: '/products/quizmaster-ai-android/privacy-policy',
    supportUrl: '/products/quizmaster-ai-android/documentation'
  },
  {
    id: 'oneclickpdfmaker',
    name: '1Click PDF Maker',
    slug: 'oneclickpdfmaker',
    tagline: '1Click PDF Maker – The Only PDF Toolkit You’ll Ever Need!',
    description: 'Designed by Huzaifa, this app isn’t just another utility; it’s a professional-grade workspace built to respect your time and your privacy. With a clean, familiar interface inspired by WhatsApp, you don’t need to be a tech expert to create, edit, or convert documents. Everything is just "1 Click" away!',
    category: 'android-app',
    icon: '/Assets/1ClickPDFMaker/logo.png',
    screenshots: [
      '/Assets/1ClickPDFMaker/graphic1.png',
      '/Assets/1ClickPDFMaker/image1.jpeg',
      '/Assets/1ClickPDFMaker/image2.jpeg',
      '/Assets/1ClickPDFMaker/image3.jpeg'
    ],
    features: [
      {
        title: 'Office Conversion',
        description: 'Convert Word (.docx), Excel (.xlsx), and PowerPoint (.pptx) with fonts and layout preserved.',
        icon: 'FileText'
      },
      {
        title: 'Image-to-PDF',
        description: 'Select multiple images and arrange them using our premium drag-and-drop workflow.',
        icon: 'Image'
      },
      {
        title: 'Smart AI Scanner',
        description: 'AI-powered camera scanner automatically detects edges, removes shadows, and applies filters.',
        icon: 'Scan'
      },
      {
        title: 'Rich Text Editor',
        description: 'Built-in Text-to-PDF editor with support for headings, bold, italics, and alignments.',
        icon: 'Edit3'
      },
      {
        title: 'Security Toolkit',
        description: 'Merge PDFs, rotate pages, rename files, and place digital signatures precisely.',
        icon: 'Lock'
      },
      {
        title: '100% Offline & Private',
        description: 'Zero data collection. All conversions and edits happen locally on your device.',
        icon: 'Shield'
      }
    ],
    storeUrl: 'https://play.google.com/store',
    storeId: '',
    rating: 5.0,
    users: '100+',
    version: '1.0.0',
    lastUpdated: 'June 15, 2026',
    developer: 'exevolv.io',
    privacyPolicyUrl: '/products/oneclickpdfmaker/privacy-policy',
    supportUrl: '/products/oneclickpdfmaker/documentation'
  }
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug)
}

export function getProductsByCategory(category: Product['category']): Product[] {
  return products.filter(p => p.category === category)
}
