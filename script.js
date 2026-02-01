/* ========================================
   OJT Technologies - Portfolio Script
   Premium Interactions & i18n
======================================== */

// ========================================
// Translations (i18n)
// ========================================
const translations = {
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.skills': 'Skills',
        'nav.services': 'Services',
        'nav.portfolio': 'Portfolio',
        'nav.contact': 'Contact',
        
        // Hero
        'hero.badge': 'Premium Web Solutions',
        'hero.title1': 'Crafting Digital',
        'hero.title2': 'Experiences',
        'hero.title3': 'That Captivate',
        'hero.description': 'We transform your vision into stunning, high-performance websites that leave lasting impressions. Specializing in luxury web design, modern technologies, and seamless user experiences.',
        'hero.viewWork': 'View Our Work',
        'hero.getInTouch': 'Get In Touch',
        'hero.projectsCompleted': 'Projects Completed',
        'hero.yearsExperience': 'Years Experience',
        'hero.clientSatisfaction': '% Satisfaction',
        'hero.scrollDown': 'Scroll Down',
        
        // About
        'about.subtitle': 'Who We Are',
        'about.title': 'Passionate About Creating Digital Excellence',
        'about.yearsExp': 'Years of Experience',
        'about.heading': 'Building Tomorrow\'s Web, Today',
        'about.description1': 'At OJT Technologies, we believe every business deserves a stunning online presence. We specialize in creating bespoke websites that blend aesthetic beauty with powerful functionality.',
        'about.description2': 'Our expertise spans from elegant restaurant ordering systems to corporate portfolios, e-commerce platforms, and interactive web applications. We don\'t just build websites – we craft digital experiences that drive results.',
        'about.feature1Title': 'Custom Solutions',
        'about.feature1Desc': 'Tailored to your unique business needs',
        'about.feature2Title': 'Modern Technologies',
        'about.feature2Desc': 'Using the latest web standards',
        'about.feature3Title': 'Bilingual Support',
        'about.feature3Desc': 'HU, SR, EN language capabilities',
        'about.letsWork': 'Let\'s Work Together',
        
        // Skills
        'skills.subtitle': 'Our Expertise',
        'skills.title': 'Technical Proficiency & Skill Levels',
        'skills.frontend': 'Frontend Development',
        'skills.design': 'Design & UI/UX',
        'skills.backend': 'Backend & Tools',
        'skills.expert': 'Expert',
        'skills.advanced': 'Advanced',
        'skills.intermediate': 'Intermediate',
        'skills.performanceTitle': 'Performance',
        'skills.performanceDesc': 'Lightning-fast load times and optimized code for the best user experience',
        'skills.securityTitle': 'Security',
        'skills.securityDesc': 'Best practices in web security to protect your data and users',
        'skills.accessibilityTitle': 'Accessibility',
        'skills.accessibilityDesc': 'Inclusive design ensuring everyone can use your website',
        'skills.seoTitle': 'SEO Ready',
        'skills.seoDesc': 'Built with search engines in mind for maximum visibility',
        
        // Services
        'services.subtitle': 'What We Offer',
        'services.title': 'Premium Web Design Services',
        'services.popular': 'Most Popular',
        'services.webDevTitle': 'Custom Web Development',
        'services.webDevDesc': 'Bespoke websites built from scratch, tailored to your brand identity and business goals. From landing pages to complex web applications.',
        'services.webDevF1': 'Responsive Design',
        'services.webDevF2': 'Modern Frameworks',
        'services.webDevF3': 'Cross-browser Compatible',
        'services.restaurantTitle': 'Restaurant Systems',
        'services.restaurantDesc': 'Complete digital solutions for restaurants: online menus, ordering systems, real-time dashboards, and bilingual support for diverse clientele.',
        'services.restaurantF1': 'Online Ordering',
        'services.restaurantF2': 'Staff Dashboard',
        'services.restaurantF3': 'Multi-language Menu',
        'services.uiuxTitle': 'UI/UX Design',
        'services.uiuxDesc': 'Beautiful, intuitive interfaces that delight users. We focus on user experience to ensure your visitors convert into customers.',
        'services.uiuxF1': 'User Research',
        'services.uiuxF2': 'Wireframing',
        'services.uiuxF3': 'Interactive Prototypes',
        'services.learnMore': 'Learn More',
        
        // Portfolio
        'portfolio.subtitle': 'Our Work',
        'portfolio.title': 'Featured Projects & Case Studies',
        'portfolio.all': 'All Projects',
        'portfolio.web': 'Web Design',
        'portfolio.restaurant': 'Restaurant',
        'portfolio.ecommerce': 'E-Commerce',
        'portfolio.catRestaurant': 'Restaurant System',
        'portfolio.catCorporate': 'Corporate Website',
        'portfolio.catEcommerce': 'E-Commerce',
        'portfolio.catPortfolio': 'Portfolio',
        'portfolio.project1Desc': 'Complete ordering system with bilingual menu, real-time staff dashboard, and elegant dark theme design.',
        'portfolio.project2Desc': 'Modern corporate website with animated sections and contact integration.',
        'portfolio.project3Desc': 'Handcrafted products marketplace with cart and checkout system.',
        'portfolio.project4Desc': 'Stunning photography portfolio with gallery and lightbox features.',
        'portfolio.project5Desc': 'Cozy café website with online menu and reservation system.',
        'portfolio.viewProject': 'View Project',
        'portfolio.ctaText': 'Interested in seeing more of our work?',
        'portfolio.ctaBtn': 'Start Your Project',
        
        // Testimonials
        'testimonials.subtitle': 'Client Feedback',
        'testimonials.title': 'What Our Clients Say',
        'testimonials.quote1': '"OJT Technologies transformed our restaurant\'s online presence. The ordering system is intuitive, and our customers love the bilingual menu. Our orders increased by 40% in the first month!"',
        'testimonials.quote2': '"Professional, creative, and incredibly responsive. They understood our vision perfectly and delivered a website that exceeded our expectations. Highly recommended!"',
        'testimonials.quote3': '"The attention to detail and the luxury aesthetic they brought to our brand was remarkable. Our e-commerce sales doubled after the website redesign."',
        'testimonials.role1': 'Restaurant Owner, Tisza Lake',
        'testimonials.role2': 'CEO, TechVision Serbia',
        'testimonials.role3': 'Founder, Artisan Crafts',
        
        // Process
        'process.subtitle': 'How We Work',
        'process.title': 'Our Development Process',
        'process.step1Title': 'Discovery & Planning',
        'process.step1Desc': 'We start by understanding your business, goals, and target audience. Together, we define the project scope and create a detailed roadmap.',
        'process.step2Title': 'Design & Prototype',
        'process.step2Desc': 'Our designers create stunning mockups and interactive prototypes. We iterate based on your feedback until the design is perfect.',
        'process.step3Title': 'Development',
        'process.step3Desc': 'We build your website using clean, efficient code and modern technologies. Every feature is carefully implemented and tested.',
        'process.step4Title': 'Launch & Support',
        'process.step4Desc': 'After thorough testing, we launch your website and provide ongoing support to ensure everything runs smoothly.',
        
        // Contact
        'contact.subtitle': 'Get In Touch',
        'contact.title': 'Let\'s Start Your Project',
        'contact.infoTitle': 'Contact Information',
        'contact.infoDesc': 'Ready to transform your online presence? Reach out to us and let\'s discuss your project.',
        'contact.email': 'Email',
        'contact.phone': 'Phone',
        'contact.location': 'Location',
        'contact.formName': 'Your Name',
        'contact.formEmail': 'Email Address',
        'contact.formSubject': 'Subject',
        'contact.formService': 'Service Interested In',
        'contact.selectService': 'Select a service...',
        'contact.optionWeb': 'Custom Web Development',
        'contact.optionRestaurant': 'Restaurant System',
        'contact.optionUiux': 'UI/UX Design',
        'contact.optionEcommerce': 'E-Commerce',
        'contact.optionOther': 'Other',
        'contact.formMessage': 'Your Message',
        'contact.formSubmit': 'Send Message',
        'contact.successMsg': 'Thank you! Your message has been sent successfully.',
        
        // Footer
        'footer.tagline': 'Crafting premium digital experiences that captivate and convert. Your vision, our expertise.',
        'footer.quickLinks': 'Quick Links',
        'footer.services': 'Services',
        'footer.contactUs': 'Contact Us',
        'footer.rights': 'All rights reserved.',
        
        // Testimonials
        'testimonials.anonymous': 'Anonymous Client',
        'testimonials.role1': 'Restaurant Owner',
        'testimonials.role2': 'Entrepreneur',
        'testimonials.role3': 'Hospitality Professional',
        
        // Portfolio
        'portfolio.notice': 'These websites are prototypes created for demonstration purposes. They are not currently in use by any company.',
        'portfolio.project2Desc': 'Modern restaurant website with online menu and ordering system.',
        'portfolio.project3Desc': 'Beach restaurant and buffet website with online ordering.',
        
        // Contact
        'contact.phoneNote': '(Hungarian only)',
        
        // Skills
        'skills.specialty': 'Specialty',
        
        // Services
        'services.specialty': 'Specialty',
        
        // Chatbot
        'chatbot.title': 'OJT Assistant',
        'chatbot.welcome': 'Hi! 👋 I\'m the OJT Technologies virtual assistant. How can I help you?',
        'chatbot.q1': 'What services do you offer?',
        'chatbot.q2': 'How much does a website cost?',
        'chatbot.q3': 'How long does it take?',
        'chatbot.q4': 'Can I see your work?',
        'chatbot.placeholder': 'Type your question...',
        'chatbot.contactLink': 'Please contact me directly for more details',
        'chatbot.unknownResponse': 'I\'m not sure about that. For specific questions, please <a href="#contact">contact me directly</a>.'
    },
    
    hu: {
        // Navigation
        'nav.home': 'Főoldal',
        'nav.about': 'Rólunk',
        'nav.skills': 'Képességek',
        'nav.services': 'Szolgáltatások',
        'nav.portfolio': 'Portfólió',
        'nav.contact': 'Kapcsolat',
        
        // Hero
        'hero.badge': 'Prémium Webes Megoldások',
        'hero.title1': 'Digitális',
        'hero.title2': 'Élmények',
        'hero.title3': 'Alkotása',
        'hero.description': 'Látomásodat lenyűgöző, nagy teljesítményű weboldalakká alakítjuk, amelyek maradandó benyomást keltenek. Luxus webdesignra, modern technológiákra és zökkenőmentes felhasználói élményre specializálódunk.',
        'hero.viewWork': 'Munkáink Megtekintése',
        'hero.getInTouch': 'Kapcsolatfelvétel',
        'hero.projectsCompleted': 'Befejezett Projekt',
        'hero.yearsExperience': 'Év Tapasztalat',
        'hero.clientSatisfaction': '% Elégedettség',
        'hero.scrollDown': 'Görgess Le',
        
        // About
        'about.subtitle': 'Kik Vagyunk',
        'about.title': 'Szenvedélyesen Alkotjuk a Digitális Kiválóságot',
        'about.yearsExp': 'Év Tapasztalat',
        'about.heading': 'A Holnap Webét Építjük, Ma',
        'about.description1': 'Az OJT Technologies-nál hisszük, hogy minden vállalkozás megérdemel egy lenyűgöző online jelenlétet. Egyedi weboldalak készítésére specializálódunk, amelyek egyesítik az esztétikai szépséget a hatékony funkcionalitással.',
        'about.description2': 'Szakértelmünk az elegáns éttermi rendelési rendszerektől a vállalati portfóliókig, e-kereskedelmi platformokig és interaktív webalkalmazásokig terjed. Nem csak weboldalakat építünk – digitális élményeket alkotunk, amelyek eredményeket hoznak.',
        'about.feature1Title': 'Egyedi Megoldások',
        'about.feature1Desc': 'Üzleti igényeidre szabva',
        'about.feature2Title': 'Modern Technológiák',
        'about.feature2Desc': 'A legújabb web szabványok használata',
        'about.feature3Title': 'Többnyelvű Támogatás',
        'about.feature3Desc': 'Magyar, szerb, angol nyelvi képességek',
        'about.letsWork': 'Dolgozzunk Együtt',
        
        // Skills
        'skills.subtitle': 'Szakértelmünk',
        'skills.title': 'Technikai Jártasság és Képzettségi Szintek',
        'skills.frontend': 'Frontend Fejlesztés',
        'skills.design': 'Design és UI/UX',
        'skills.backend': 'Backend és Eszközök',
        'skills.expert': 'Szakértő',
        'skills.advanced': 'Haladó',
        'skills.intermediate': 'Középhaladó',
        'skills.performanceTitle': 'Teljesítmény',
        'skills.performanceDesc': 'Villámgyors betöltési idők és optimalizált kód a legjobb felhasználói élményért',
        'skills.securityTitle': 'Biztonság',
        'skills.securityDesc': 'Legjobb gyakorlatok a webbiztonságban az adatok és felhasználók védelméért',
        'skills.accessibilityTitle': 'Akadálymentesség',
        'skills.accessibilityDesc': 'Befogadó design, amely biztosítja, hogy mindenki használhassa a weboldalad',
        'skills.seoTitle': 'SEO Kész',
        'skills.seoDesc': 'Keresőmotorok figyelembevételével készült a maximális láthatóságért',
        
        // Services
        'services.subtitle': 'Mit Kínálunk',
        'services.title': 'Prémium Webdesign Szolgáltatások',
        'services.popular': 'Legnépszerűbb',
        'services.webDevTitle': 'Egyedi Webfejlesztés',
        'services.webDevDesc': 'Nulláról épített egyedi weboldalak, márkaarculatodra és üzleti céljaidra szabva. Landoló oldaltól összetett webalkalmazásokig.',
        'services.webDevF1': 'Reszponzív Design',
        'services.webDevF2': 'Modern Keretrendszerek',
        'services.webDevF3': 'Böngésző Kompatibilitás',
        'services.restaurantTitle': 'Éttermi Rendszerek',
        'services.restaurantDesc': 'Teljes körű digitális megoldások éttermeknek: online menük, rendelési rendszerek, valós idejű műszerfalak és többnyelvű támogatás.',
        'services.restaurantF1': 'Online Rendelés',
        'services.restaurantF2': 'Személyzeti Műszerfal',
        'services.restaurantF3': 'Többnyelvű Menü',
        'services.uiuxTitle': 'UI/UX Design',
        'services.uiuxDesc': 'Gyönyörű, intuitív felületek, amelyek örömet okoznak a felhasználóknak. A felhasználói élményre összpontosítunk, hogy látogatóid vásárlókká váljanak.',
        'services.uiuxF1': 'Felhasználói Kutatás',
        'services.uiuxF2': 'Drótvázak',
        'services.uiuxF3': 'Interaktív Prototípusok',
        'services.learnMore': 'Tudj Meg Többet',
        
        // Portfolio
        'portfolio.subtitle': 'Munkáink',
        'portfolio.title': 'Kiemelt Projektek és Esettanulmányok',
        'portfolio.all': 'Összes Projekt',
        'portfolio.web': 'Webdesign',
        'portfolio.restaurant': 'Étterem',
        'portfolio.ecommerce': 'E-Kereskedelem',
        'portfolio.catRestaurant': 'Éttermi Rendszer',
        'portfolio.catCorporate': 'Vállalati Weboldal',
        'portfolio.catEcommerce': 'E-Kereskedelem',
        'portfolio.catPortfolio': 'Portfólió',
        'portfolio.project1Desc': 'Teljes rendelési rendszer kétnyelvű menüvel, valós idejű személyzeti műszerfallal és elegáns sötét témájú designnal.',
        'portfolio.project2Desc': 'Modern vállalati weboldal animált szekciókkal és kapcsolatfelvételi integrációval.',
        'portfolio.project3Desc': 'Kézműves termékek piactere kosárral és fizetési rendszerrel.',
        'portfolio.project4Desc': 'Lenyűgöző fotós portfólió galériával és lightbox funkciókkal.',
        'portfolio.project5Desc': 'Hangulatos kávézó weboldal online menüvel és foglalási rendszerrel.',
        'portfolio.viewProject': 'Projekt Megtekintése',
        'portfolio.ctaText': 'Érdekel több munkánk megtekintése?',
        'portfolio.ctaBtn': 'Indítsd El a Projekted',
        
        // Testimonials
        'testimonials.subtitle': 'Ügyfél Visszajelzések',
        'testimonials.title': 'Mit Mondanak Ügyfeleink',
        'testimonials.quote1': '"Az OJT Technologies átalakította éttermünk online jelenlétét. A rendelési rendszer intuitív, és ügyfeleink imádják a kétnyelvű menüt. Rendeléseink 40%-kal nőttek az első hónapban!"',
        'testimonials.quote2': '"Professzionális, kreatív és hihetetlenül rugalmas. Tökéletesen megértették a víziónkat és olyan weboldalt szállítottak, ami felülmúlta elvárásainkat. Nagyon ajánlom!"',
        'testimonials.quote3': '"A részletekre való figyelem és a luxus esztétika, amit a márkánkhoz hoztak, figyelemre méltó volt. E-kereskedelmi eladásaink megduplázódtak a weboldal újratervezése után."',
        'testimonials.role1': 'Étterem Tulajdonos, Tisza-tó',
        'testimonials.role2': 'Vezérigazgató, TechVision Serbia',
        'testimonials.role3': 'Alapító, Artisan Crafts',
        
        // Process
        'process.subtitle': 'Hogyan Dolgozunk',
        'process.title': 'Fejlesztési Folyamatunk',
        'process.step1Title': 'Felfedezés és Tervezés',
        'process.step1Desc': 'Azzal kezdjük, hogy megértjük vállalkozásodat, céljaidat és célközönségedet. Együtt meghatározzuk a projekt hatókörét és részletes ütemtervet készítünk.',
        'process.step2Title': 'Design és Prototípus',
        'process.step2Desc': 'Designereink lenyűgöző látványterveket és interaktív prototípusokat készítenek. Visszajelzéseid alapján iterálunk, amíg a design tökéletes nem lesz.',
        'process.step3Title': 'Fejlesztés',
        'process.step3Desc': 'Tiszta, hatékony kóddal és modern technológiákkal építjük weboldalad. Minden funkciót gondosan implementálunk és tesztelünk.',
        'process.step4Title': 'Indítás és Támogatás',
        'process.step4Desc': 'Alapos tesztelés után elindítjuk weboldalad és folyamatos támogatást nyújtunk, hogy minden zökkenőmentesen működjön.',
        
        // Contact
        'contact.subtitle': 'Lépj Kapcsolatba',
        'contact.title': 'Indítsuk El a Projekted',
        'contact.infoTitle': 'Kapcsolati Információk',
        'contact.infoDesc': 'Készen állsz az online jelenléted átalakítására? Keress minket és beszéljük meg a projekted.',
        'contact.email': 'Email',
        'contact.phone': 'Telefon',
        'contact.location': 'Helyszín',
        'contact.formName': 'Neved',
        'contact.formEmail': 'Email Cím',
        'contact.formSubject': 'Tárgy',
        'contact.formService': 'Érdeklődési Terület',
        'contact.selectService': 'Válassz szolgáltatást...',
        'contact.optionWeb': 'Egyedi Webfejlesztés',
        'contact.optionRestaurant': 'Éttermi Rendszer',
        'contact.optionUiux': 'UI/UX Design',
        'contact.optionEcommerce': 'E-Kereskedelem',
        'contact.optionOther': 'Egyéb',
        'contact.formMessage': 'Üzeneted',
        'contact.formSubmit': 'Üzenet Küldése',
        'contact.successMsg': 'Köszönjük! Üzeneted sikeresen elküldve.',
        
        // Footer
        'footer.tagline': 'Prémium digitális élményeket alkotunk, amelyek lenyűgöznek és konvertálnak. A te víziód, a mi szakértelmünk.',
        'footer.quickLinks': 'Gyors Linkek',
        'footer.services': 'Szolgáltatások',
        'footer.contactUs': 'Kapcsolat',
        'footer.rights': 'Minden jog fenntartva.',
        
        // Testimonials
        'testimonials.anonymous': 'Anonim Ügyfél',
        'testimonials.quote1': '"Az OJT Technologies teljesen átalakította éttermünk online jelenlétét. A rendelési rendszer intuitív, és vendégeink imádják a kétnyelvű menüt. Rendeléseink jelentősen megnőttek az első hónapban!"',
        'testimonials.quote2': '"Professzionális, kreatív és hihetetlenül rugalmas. Tökéletesen megértették a víziónkat és olyan weboldalt szállítottak, ami felülmúlta elvárásainkat. Nagyon ajánlom!"',
        'testimonials.quote3': '"A részletekre való figyelem és az elegáns design, amit a márkánkhoz hoztak, figyelemre méltó volt. A weboldal tökéletesen tükrözi éttermünk hangulatát."',
        'testimonials.role1': 'Étterem Tulajdonos',
        'testimonials.role2': 'Vállalkozó',
        'testimonials.role3': 'Vendéglátós',
        
        // Portfolio
        'portfolio.notice': 'Ezek a weboldalak prototípusok, amelyeket bemutató célra készítettem. Jelenleg egyetlen cég sem használja őket éles környezetben.',
        'portfolio.project1Desc': 'Teljes rendelési rendszer kétnyelvű menüvel (magyar/szerb), valós idejű személyzeti műszerfallal és elegáns sötét témájú designnal.',
        'portfolio.project2Desc': 'Modern éttermi weboldal online menüvel és rendelési lehetőséggel.',
        'portfolio.project3Desc': 'Strandolóknak szánt éttermi és büfé weboldal online rendelési lehetőséggel.',
        
        // Contact
        'contact.phoneNote': '(Csak magyar nyelven)',
        
        // Skills
        'skills.subtitle': 'Szakmai Tudás',
        'skills.title': 'Amikkel Dolgozom',
        'skills.specialty': 'Specialitás',
        
        // Services
        'services.specialty': 'Specialitás',
        
        // Chatbot
        'chatbot.title': 'OJT Asszisztens',
        'chatbot.welcome': 'Szia! 👋 Én az OJT Technologies virtuális asszisztense vagyok. Miben segíthetek?',
        'chatbot.q1': 'Milyen szolgáltatásokat kínáltok?',
        'chatbot.q2': 'Mennyibe kerül egy weboldal?',
        'chatbot.q3': 'Mennyi idő elkészíteni?',
        'chatbot.q4': 'Láthatom a munkáitokat?',
        'chatbot.placeholder': 'Írd be a kérdésed...',
        'chatbot.contactLink': 'Kérlek lépj kapcsolatba velem közvetlenül a részletekért',
        'chatbot.unknownResponse': 'Ebben nem vagyok biztos. Specifikus kérdésekkel kérlek <a href="#contact">lépj kapcsolatba velem közvetlenül</a>.'
    },
    
    sr: {
        // Navigation
        'nav.home': 'Početna',
        'nav.about': 'O Nama',
        'nav.skills': 'Veštine',
        'nav.services': 'Usluge',
        'nav.portfolio': 'Portfolio',
        'nav.contact': 'Kontakt',
        
        // Hero
        'hero.badge': 'Premium Web Rešenja',
        'hero.title1': 'Stvaramo Digitalna',
        'hero.title2': 'Iskustva',
        'hero.title3': 'Koja Fasciniraju',
        'hero.description': 'Pretvaramo vašu viziju u zadivljujuće, visoko-performantne veb sajtove koji ostavljaju trajan utisak. Specijalizovani za luksuzni veb dizajn, moderne tehnologije i besprekorna korisnička iskustva.',
        'hero.viewWork': 'Pogledajte Naš Rad',
        'hero.getInTouch': 'Kontaktirajte Nas',
        'hero.projectsCompleted': 'Završenih Projekata',
        'hero.yearsExperience': 'Godina Iskustva',
        'hero.clientSatisfaction': '% Zadovoljstvo',
        'hero.scrollDown': 'Skrolujte Dole',
        
        // About
        'about.subtitle': 'Ko Smo Mi',
        'about.title': 'Strastveno Stvaramo Digitalnu Izvrsnost',
        'about.yearsExp': 'Godina Iskustva',
        'about.heading': 'Gradimo Sutrašnji Web, Danas',
        'about.description1': 'U OJT Technologies verujemo da svaki biznis zaslužuje zadivljujuće online prisustvo. Specijalizovani smo za kreiranje jedinstvenih veb sajtova koji spajaju estetsku lepotu sa moćnom funkcionalnošću.',
        'about.description2': 'Naša ekspertiza se proteže od elegantnih sistema za naručivanje u restoranima do korporativnih portfolija, e-commerce platformi i interaktivnih veb aplikacija. Ne samo da gradimo veb sajtove – mi stvaramo digitalna iskustva koja donose rezultate.',
        'about.feature1Title': 'Prilagođena Rešenja',
        'about.feature1Desc': 'Prilagođeno vašim jedinstvenim poslovnim potrebama',
        'about.feature2Title': 'Moderne Tehnologije',
        'about.feature2Desc': 'Korišćenje najnovijih veb standarda',
        'about.feature3Title': 'Višejezična Podrška',
        'about.feature3Desc': 'Mađarski, srpski, engleski jezici',
        'about.letsWork': 'Hajde da Radimo Zajedno',
        
        // Skills
        'skills.subtitle': 'Naša Ekspertiza',
        'skills.title': 'Tehnička Veština i Nivoi Znanja',
        'skills.frontend': 'Frontend Razvoj',
        'skills.design': 'Dizajn i UI/UX',
        'skills.backend': 'Backend i Alati',
        'skills.expert': 'Ekspert',
        'skills.advanced': 'Napredni',
        'skills.intermediate': 'Srednji',
        'skills.performanceTitle': 'Performanse',
        'skills.performanceDesc': 'Munjevito brzo učitavanje i optimizovan kod za najbolje korisničko iskustvo',
        'skills.securityTitle': 'Bezbednost',
        'skills.securityDesc': 'Najbolje prakse u veb bezbednosti za zaštitu vaših podataka i korisnika',
        'skills.accessibilityTitle': 'Pristupačnost',
        'skills.accessibilityDesc': 'Inkluzivan dizajn koji osigurava da svi mogu koristiti vaš sajt',
        'skills.seoTitle': 'SEO Spreman',
        'skills.seoDesc': 'Izgrađen sa pretraživačima na umu za maksimalnu vidljivost',
        
        // Services
        'services.subtitle': 'Šta Nudimo',
        'services.title': 'Premium Usluge Veb Dizajna',
        'services.popular': 'Najpopularnije',
        'services.webDevTitle': 'Prilagođeni Veb Razvoj',
        'services.webDevDesc': 'Jedinstveni veb sajtovi izgrađeni od nule, prilagođeni vašem brendu i poslovnim ciljevima. Od landing stranica do složenih veb aplikacija.',
        'services.webDevF1': 'Responsivan Dizajn',
        'services.webDevF2': 'Moderni Frejmvorci',
        'services.webDevF3': 'Kompatibilnost sa Pregledačima',
        'services.restaurantTitle': 'Sistemi za Restorane',
        'services.restaurantDesc': 'Kompletna digitalna rešenja za restorane: online meniji, sistemi za naručivanje, kontrolne table u realnom vremenu i višejezična podrška.',
        'services.restaurantF1': 'Online Naručivanje',
        'services.restaurantF2': 'Kontrolna Tabla za Osoblje',
        'services.restaurantF3': 'Višejezični Meni',
        'services.uiuxTitle': 'UI/UX Dizajn',
        'services.uiuxDesc': 'Prelepi, intuitivni interfejsi koji oduševljavaju korisnike. Fokusiramo se na korisničko iskustvo kako bismo osigurali da vaši posetioci postanu kupci.',
        'services.uiuxF1': 'Istraživanje Korisnika',
        'services.uiuxF2': 'Wireframing',
        'services.uiuxF3': 'Interaktivni Prototipovi',
        'services.learnMore': 'Saznajte Više',
        
        // Portfolio
        'portfolio.subtitle': 'Naš Rad',
        'portfolio.title': 'Istaknuti Projekti i Studije Slučaja',
        'portfolio.all': 'Svi Projekti',
        'portfolio.web': 'Veb Dizajn',
        'portfolio.restaurant': 'Restoran',
        'portfolio.ecommerce': 'E-Trgovina',
        'portfolio.catRestaurant': 'Sistem za Restorane',
        'portfolio.catCorporate': 'Korporativni Sajt',
        'portfolio.catEcommerce': 'E-Trgovina',
        'portfolio.catPortfolio': 'Portfolio',
        'portfolio.project1Desc': 'Kompletan sistem za naručivanje sa dvojezičnim menijem, kontrolnom tablom u realnom vremenu i elegantnim tamnim dizajnom.',
        'portfolio.project2Desc': 'Moderan korporativni sajt sa animiranim sekcijama i integracijom kontakta.',
        'portfolio.project3Desc': 'Tržište ručno izrađenih proizvoda sa korpom i sistemom za plaćanje.',
        'portfolio.project4Desc': 'Zadivljujući fotografski portfolio sa galerijom i lightbox funkcijama.',
        'portfolio.project5Desc': 'Udoban kafić sajt sa online menijem i sistemom rezervacija.',
        'portfolio.viewProject': 'Pogledaj Projekat',
        'portfolio.ctaText': 'Zainteresovani da vidite više našeg rada?',
        'portfolio.ctaBtn': 'Započnite Vaš Projekat',
        
        // Testimonials
        'testimonials.subtitle': 'Povratne Informacije Klijenata',
        'testimonials.title': 'Šta Naši Klijenti Kažu',
        'testimonials.quote1': '"OJT Technologies je transformisao online prisustvo našeg restorana. Sistem za naručivanje je intuitivan, a naši kupci obožavaju dvojezični meni. Naše porudžbine su porasle za 40% u prvom mesecu!"',
        'testimonials.quote2': '"Profesionalni, kreativni i neverovatno responsivni. Savršeno su razumeli našu viziju i isporučili sajt koji je premašio naša očekivanja. Toplo preporučujem!"',
        'testimonials.quote3': '"Pažnja posvećena detaljima i luksuzna estetika koju su doneli našem brendu bila je izvanredna. Naša e-commerce prodaja se udvostručila nakon redizajna sajta."',
        'testimonials.role1': 'Vlasnik Restorana, Jezero Tisa',
        'testimonials.role2': 'Generalni Direktor, TechVision Serbia',
        'testimonials.role3': 'Osnivač, Artisan Crafts',
        
        // Process
        'process.subtitle': 'Kako Radimo',
        'process.title': 'Naš Razvojni Proces',
        'process.step1Title': 'Otkrivanje i Planiranje',
        'process.step1Desc': 'Počinjemo razumevanjem vašeg biznisa, ciljeva i ciljne publike. Zajedno definišemo obim projekta i kreiramo detaljnu mapu puta.',
        'process.step2Title': 'Dizajn i Prototip',
        'process.step2Desc': 'Naši dizajneri kreiraju zadivljujuće makete i interaktivne prototipove. Iteriramo na osnovu vaših povratnih informacija dok dizajn nije savršen.',
        'process.step3Title': 'Razvoj',
        'process.step3Desc': 'Gradimo vaš sajt koristeći čist, efikasan kod i moderne tehnologije. Svaka funkcija je pažljivo implementirana i testirana.',
        'process.step4Title': 'Lansiranje i Podrška',
        'process.step4Desc': 'Nakon temeljnog testiranja, lansiramo vaš sajt i pružamo stalnu podršku kako bi sve funkcionisalo glatko.',
        
        // Contact
        'contact.subtitle': 'Stupite u Kontakt',
        'contact.title': 'Započnimo Vaš Projekat',
        'contact.infoTitle': 'Kontakt Informacije',
        'contact.infoDesc': 'Spremni da transformišete vaše online prisustvo? Obratite nam se i razgovarajmo o vašem projektu.',
        'contact.email': 'Email',
        'contact.phone': 'Telefon',
        'contact.location': 'Lokacija',
        'contact.formName': 'Vaše Ime',
        'contact.formEmail': 'Email Adresa',
        'contact.formSubject': 'Predmet',
        'contact.formService': 'Usluga koja Vas Interesuje',
        'contact.selectService': 'Izaberite uslugu...',
        'contact.optionWeb': 'Prilagođeni Veb Razvoj',
        'contact.optionRestaurant': 'Sistem za Restorane',
        'contact.optionUiux': 'UI/UX Dizajn',
        'contact.optionEcommerce': 'E-Trgovina',
        'contact.optionOther': 'Ostalo',
        'contact.formMessage': 'Vaša Poruka',
        'contact.formSubmit': 'Pošalji Poruku',
        'contact.successMsg': 'Hvala! Vaša poruka je uspešno poslata.',
        
        // Footer
        'footer.tagline': 'Stvaramo premium digitalna iskustva koja fasciniraju i konvertuju. Vaša vizija, naša ekspertiza.',
        'footer.quickLinks': 'Brzi Linkovi',
        'footer.services': 'Usluge',
        'footer.contactUs': 'Kontaktirajte Nas',
        'footer.rights': 'Sva prava zadržana.',
        
        // Testimonials
        'testimonials.anonymous': 'Anonimni Klijent',
        'testimonials.quote1': '"OJT Technologies je transformisao online prisustvo našeg restorana. Sistem za naručivanje je intuitivan, a naši kupci obožavaju dvojezični meni. Naše porudžbine su značajno porasle u prvom mesecu!"',
        'testimonials.quote2': '"Profesionalni, kreativni i neverovatno responsivni. Savršeno su razumeli našu viziju i isporučili sajt koji je premašio naša očekivanja. Toplo preporučujem!"',
        'testimonials.quote3': '"Pažnja posvećena detaljima i elegantan dizajn koji su doneli našem brendu bila je izvanredna. Sajt savršeno odražava atmosferu našeg restorana."',
        'testimonials.role1': 'Vlasnik Restorana',
        'testimonials.role2': 'Preduzetnik',
        'testimonials.role3': 'Ugostiteljski Profesionalac',
        
        // Portfolio
        'portfolio.notice': 'Ovi sajtovi su prototipovi kreirani u demonstracione svrhe. Trenutno ih nijedna kompanija ne koristi.',
        'portfolio.project1Desc': 'Kompletan sistem za naručivanje sa dvojezičnim menijem (mađarski/srpski), kontrolnom tablom u realnom vremenu i elegantnim tamnim dizajnom.',
        'portfolio.project2Desc': 'Moderan restoranski sajt sa online menijem i sistemom za naručivanje.',
        'portfolio.project3Desc': 'Plaža restoran i bife sajt sa online naručivanjem.',
        
        // Contact
        'contact.phoneNote': '(Samo na mađarskom - za srpske zahteve koristite email)',
        
        // Skills
        'skills.subtitle': 'Stručnost',
        'skills.title': 'Sa Čime Radim',
        'skills.specialty': 'Specijalnost',
        
        // Services
        'services.specialty': 'Specijalnost',
        
        // Chatbot
        'chatbot.title': 'OJT Asistent',
        'chatbot.welcome': 'Zdravo! 👋 Ja sam virtuelni asistent OJT Technologies. Kako vam mogu pomoći?',
        'chatbot.q1': 'Koje usluge nudite?',
        'chatbot.q2': 'Koliko košta sajt?',
        'chatbot.q3': 'Koliko dugo traje izrada?',
        'chatbot.q4': 'Mogu li videti vaše radove?',
        'chatbot.placeholder': 'Unesite vaše pitanje...',
        'chatbot.contactLink': 'Molim vas kontaktirajte me direktno za više detalja',
        'chatbot.unknownResponse': 'Nisam siguran u vezi toga. Za specifična pitanja, molim <a href="#contact">kontaktirajte me direktno</a>.'
    }
};

// Current language - default Hungarian
let currentLang = 'hu';

// ========================================
// Initialize on DOM Load
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    createBubbles();
    initNavbar();
    initMobileSidebar();
    initLanguageSwitcher();
    initScrollAnimations();
    initTiltEffect();
    initTestimonialSlider();
    initContactForm();
    initBackToTop();
    initChatbot();
    
    // Apply Hungarian as default
    updateLanguage();
});

// ========================================
// Mobile Sidebar
// ========================================
function initMobileSidebar() {
    const menuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    const overlay = document.getElementById('sidebarOverlay');
    
    if (!menuBtn || !navLinks) {
        return;
    }
    
    function toggleSidebar() {
        menuBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
        if (overlay) overlay.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    }
    
    function closeSidebar() {
        menuBtn.classList.remove('active');
        navLinks.classList.remove('active');
        if (overlay) overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    menuBtn.addEventListener('click', toggleSidebar);
    if (overlay) overlay.addEventListener('click', closeSidebar);
    
    // Close sidebar when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeSidebar);
    });
}

// ========================================
// Animated Bubbles
// ========================================
function createBubbles() {
    const container = document.getElementById('bubbles');
    const bubbleCount = 20;
    
    for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        
        // Random properties
        const size = Math.random() * 60 + 20;
        const left = Math.random() * 100;
        const delay = Math.random() * 15;
        const duration = Math.random() * 10 + 15;
        
        bubble.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${left}%;
            animation-delay: ${delay}s;
            animation-duration: ${duration}s;
        `;
        
        container.appendChild(bubble);
    }
}

// ========================================
// Navbar
// ========================================
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
    }
    
    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ========================================
// Language Switcher
// ========================================
function initLanguageSwitcher() {
    const langBtns = document.querySelectorAll('.lang-btn, .footer-lang-btn');
    
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state for header lang buttons
            document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll(`.lang-btn[data-lang="${btn.dataset.lang}"]`).forEach(b => b.classList.add('active'));
            
            // Change language
            currentLang = btn.dataset.lang;
            updateLanguage();
            
            // Update HTML lang attribute
            document.documentElement.lang = currentLang;
        });
    });
}

function updateLanguage() {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(el => {
        const key = el.dataset.i18n;
        if (translations[currentLang] && translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
        }
    });
}

// ========================================
// Scroll Animations
// ========================================
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Trigger skill bars animation
                if (entry.target.classList.contains('skills-section')) {
                    animateSkillBars();
                }
                
                // Trigger counter animation
                if (entry.target.classList.contains('hero')) {
                    animateCounters();
                }
            }
        });
    }, observerOptions);
    
    // Observe sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
    
    // Observe individual elements
    document.querySelectorAll('.glass-card, .feature-item, .expertise-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        
        const elObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                        entry.target.style.transition = 'all 0.6s ease';
                    }, Math.random() * 300);
                }
            });
        }, observerOptions);
        
        elObserver.observe(el);
    });
}

// ========================================
// 3D Tilt Effect
// ========================================
function initTiltEffect() {
    const cards = document.querySelectorAll('[data-tilt]');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
}

// ========================================
// Skill Bars Animation
// ========================================
function initSkillBars() {
    // Initial state - bars at 0 width
    document.querySelectorAll('.skill-progress').forEach(bar => {
        bar.style.width = '0';
    });
}

function animateSkillBars() {
    document.querySelectorAll('.skill-progress').forEach(bar => {
        const progress = bar.dataset.progress;
        setTimeout(() => {
            bar.style.width = progress + '%';
        }, 200);
    });
}

// ========================================
// Number Counters Animation
// ========================================
function initCounters() {
    // Initial state
    document.querySelectorAll('.stat-number').forEach(counter => {
        counter.textContent = '0';
    });
}

function animateCounters() {
    document.querySelectorAll('.stat-number').forEach(counter => {
        const target = parseInt(counter.dataset.count);
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += step;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    });
}

// ========================================
// Utility: Debounce
// ========================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ========================================
// Console Easter Egg
// ========================================
console.log('%c OJT Technologies ', 'background: linear-gradient(135deg, #00a896, #02c39a); color: white; font-size: 24px; font-weight: bold; padding: 20px 40px; border-radius: 10px;');
console.log('%c Crafting Digital Excellence ', 'color: #00a896; font-size: 14px; font-style: italic;');

// ========================================
// Portfolio Filter
// ========================================
function initPortfolioFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;
            
            portfolioItems.forEach(item => {
                const category = item.dataset.category;
                
                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// ========================================
// Testimonial Slider
// ========================================
function initTestimonialSlider() {
    const track = document.querySelector('.testimonial-track');
    const cards = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.slider-btn.prev');
    const nextBtn = document.querySelector('.slider-btn.next');
    
    if (!track || cards.length === 0) return;
    
    let currentSlide = 0;
    const totalSlides = cards.length;
    
    function updateSlider() {
        track.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlider();
    }
    
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateSlider();
        });
    });
    
    // Auto-slide every 5 seconds
    setInterval(nextSlide, 5000);
}

// ========================================
// Contact Form
// ========================================
function initContactForm() {
    const form = document.getElementById('contactForm');
    const successMsg = document.getElementById('formSuccess');
    
    if (!form) return;
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = form.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Küldés...';
        submitBtn.disabled = true;
        
        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                form.reset();
                successMsg.classList.add('show');
                setTimeout(() => {
                    successMsg.classList.remove('show');
                }, 5000);
            } else {
                alert('Hiba történt. Próbáld újra!');
            }
        } catch (error) {
            alert('Hiba történt. Próbáld újra!');
        }
        
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    });
    
    // Add focus effects to inputs
    const inputs = form.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', () => {
            input.parentElement.classList.remove('focused');
        });
    });
}

// ========================================
// Back to Top Button
// ========================================
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    if (!backToTopBtn) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ========================================
// AI Chatbot
// ========================================
const chatbotResponses = {
    hu: {
        services: 'Elsősorban éttermi rendszerek készítésére specializálódtam: online menük, rendelési rendszerek, személyzeti műszerfalak és többnyelvű támogatás. Emellett egyedi webfejlesztést is vállalok.',
        price: 'Az árak a projekt összetettségétől függnek. Egy egyszerű éttermi weboldal 50.000 Ft-tól indul, komplex rendelési rendszer 150.000 Ft-tól. Pontos árajánlatért kérlek <a href="#contact">lépj kapcsolatba velem</a>!',
        time: 'Egy egyszerű weboldal 1-2 hét alatt elkészül. Komplexebb rendelési rendszerek 3-4 hetet igényelhetnek. A pontos időtartam a projekt részleteitől függ.',
        portfolio: 'Természetesen! Görgess le a <a href="#portfolio">Portfólió szekcióhoz</a> ahol megtekintheted a korábbi munkáimat. Fontos: ezek prototípusok, nem éles használatban lévő weboldalak.',
        contact: 'Szívesen segítek! <a href="#contact">Lépj kapcsolatba velem</a> emailben vagy telefonon.',
        default: 'Ebben nem vagyok biztos. Specifikus kérdésekkel kérlek <a href="#contact">lépj kapcsolatba velem közvetlenül</a>.'
    },
    en: {
        services: 'I specialize in restaurant systems: online menus, ordering systems, staff dashboards, and multilingual support. I also do custom web development.',
        price: 'Prices depend on project complexity. A simple restaurant website starts from €150, complex ordering systems from €400. For an exact quote, please <a href="#contact">contact me</a>!',
        time: 'A simple website takes 1-2 weeks. More complex ordering systems may require 3-4 weeks. The exact timeline depends on project details.',
        portfolio: 'Of course! Scroll down to the <a href="#portfolio">Portfolio section</a> to see my previous work. Note: these are prototypes, not live websites.',
        contact: 'I\'d be happy to help! <a href="#contact">Contact me</a> via email or phone.',
        default: 'I\'m not sure about that. For specific questions, please <a href="#contact">contact me directly</a>.'
    },
    sr: {
        services: 'Specijalizovan sam za restoranske sisteme: online menije, sisteme za naručivanje, kontrolne table za osoblje i višejezičnu podršku. Takođe radim prilagođeni veb razvoj.',
        price: 'Cene zavise od složenosti projekta. Jednostavan restoranski sajt počinje od 50€, složeni sistemi za naručivanje od 150€. Za tačnu ponudu, molim <a href="#contact">kontaktirajte me</a>!',
        time: 'Jednostavan sajt se pravi 1-2 nedelje. Složeniji sistemi za naručivanje mogu zahtevati 3-4 nedelje. Tačan vremenski okvir zavisi od detalja projekta.',
        portfolio: 'Naravno! Skrolujte dole do <a href="#portfolio">Portfolio sekcije</a> da vidite moje prethodne radove. Napomena: ovo su prototipovi, ne aktivni sajtovi.',
        contact: 'Rado ću pomoći! <a href="#contact">Kontaktirajte me</a> putem emaila.',
        default: 'Nisam siguran u vezi toga. Za specifična pitanja, molim <a href="#contact">kontaktirajte me direktno</a>.'
    }
};

function initChatbot() {
    const toggle = document.getElementById('chatbotToggle');
    const window_el = document.getElementById('chatbotWindow');
    const close = document.getElementById('chatbotClose');
    const messages = document.getElementById('chatbotMessages');
    const input = document.getElementById('chatbotInput');
    const send = document.getElementById('chatbotSend');
    const suggestions = document.querySelectorAll('.suggestion-btn');
    const suggestionsContainer = document.querySelector('.chatbot-suggestions');
    const badge = document.querySelector('.chatbot-badge');
    
    if (!toggle) return;
    
    // Toggle chatbot
    toggle.addEventListener('click', () => {
        window_el.classList.toggle('open');
        if (window_el.classList.contains('open')) {
            badge.classList.add('hidden');
        }
    });
    
    close.addEventListener('click', () => {
        window_el.classList.remove('open');
    });
    
    // Hide suggestions when typing
    input.addEventListener('input', () => {
        if (input.value.trim().length > 0) {
            suggestionsContainer.classList.add('hidden');
        } else {
            suggestionsContainer.classList.remove('hidden');
        }
    });
    
    // Handle suggestions
    suggestions.forEach(btn => {
        btn.addEventListener('click', () => {
            const questionText = btn.textContent;
            addMessage(questionText, 'user');
            suggestionsContainer.classList.add('hidden');
            askAI(questionText);
        });
    });
    
    // Handle custom input
    send.addEventListener('click', () => sendMessage());
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });
    
    function sendMessage() {
        const text = input.value.trim();
        if (!text) return;
        
        addMessage(text, 'user');
        input.value = '';
        askAI(text);
    }
    
    function addMessage(text, type) {
        const msg = document.createElement('div');
        msg.className = `chat-message ${type}`;
        msg.innerHTML = `<div class="message-content"><p>${text}</p></div>`;
        messages.appendChild(msg);
        messages.scrollTop = messages.scrollHeight;
    }
    
    function showTyping() {
        const typing = document.createElement('div');
        typing.className = 'chat-message bot typing-indicator';
        typing.id = 'typingIndicator';
        typing.innerHTML = `<div class="message-content"><p><i class="fas fa-circle-notch fa-spin"></i> Gondolkodom...</p></div>`;
        messages.appendChild(typing);
        messages.scrollTop = messages.scrollHeight;
    }
    
    function removeTyping() {
        const typing = document.getElementById('typingIndicator');
        if (typing) typing.remove();
    }
    
    async function askAI(question) {
        showTyping();
        
        // Check if running on Vercel (production) or locally
        const isProduction = window.location.hostname !== 'localhost' && 
                            window.location.hostname !== '127.0.0.1' &&
                            !window.location.protocol.includes('file');
        
        if (isProduction) {
            try {
                const response = await fetch('/api/chat', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        message: question,
                        language: currentLang
                    })
                });
                
                const data = await response.json();
                console.log('API response:', data);
                removeTyping();
                
                if (data.error) {
                    console.error('API error details:', data);
                    useFallbackResponse(question);
                } else {
                    addMessage(data.response, 'bot');
                }
            } catch (error) {
                console.error('Chatbot error:', error);
                removeTyping();
                useFallbackResponse(question);
            }
        } else {
            // Local development - use predefined responses
            setTimeout(() => {
                removeTyping();
                useFallbackResponse(question);
            }, 500);
        }
    }
    
    function useFallbackResponse(question) {
        const lowerQ = question.toLowerCase();
        let responseKey = 'default';
        
        if (lowerQ.includes('szolgáltatás') || lowerQ.includes('service') || lowerQ.includes('uslug') || lowerQ.includes('mit csinál')) {
            responseKey = 'services';
        } else if (lowerQ.includes('ár') || lowerQ.includes('price') || lowerQ.includes('cen') || lowerQ.includes('mennyi') || lowerQ.includes('cost')) {
            responseKey = 'price';
        } else if (lowerQ.includes('idő') || lowerQ.includes('time') || lowerQ.includes('vreme') || lowerQ.includes('mennyi ideig')) {
            responseKey = 'time';
        } else if (lowerQ.includes('portfólió') || lowerQ.includes('portfolio') || lowerQ.includes('munka') || lowerQ.includes('work')) {
            responseKey = 'portfolio';
        } else if (lowerQ.includes('kapcsolat') || lowerQ.includes('contact') || lowerQ.includes('kontakt') || lowerQ.includes('email')) {
            responseKey = 'contact';
        }
        
        const response = chatbotResponses[currentLang]?.[responseKey] || chatbotResponses[currentLang]?.default || 
            'Kérlek <a href="#contact">lépj kapcsolatba velünk</a>.';
        addMessage(response, 'bot');
    }
}
