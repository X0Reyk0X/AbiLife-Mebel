document.addEventListener('DOMContentLoaded', function() {

  const translations = {
    ru: {
      // Навигация
      "nav.catalog": "Каталог",
      "nav.about": "О нас",
      "nav.contacts": "Контакты",

      // Hero
      "hero.title": "Современная мебель AbiLife",
      "hero.text": "Прочные материалы и точные размеры под ваш дом. Производим, доставляем, устанавливаем.",
      "hero.btn.catalog": "Смотреть каталог",
      "hero.btn.contact": "Связаться",

      // Catalog
      "catalog.title": "Каталог — примеры изделий",
      "catalog.lead": "Ниже — несколько базовых позиций. Любую модель можем изготовить под размеры и цвет вашей комнаты.",

      "catalog.card1.title": "Встроенный шкаф-купе",
      "catalog.card1.text": "Шкаф-купе с зеркальными дверями",

      "catalog.card2.title": "Кухонный гарнитур",
      "catalog.card2.text": "Вместительные шкафы, светлая столешница и практичная планировка",

      "catalog.card3.title": "Встроенный шкаф-купе",
      "catalog.card3.text": "Шкаф-купе с зеркальными дверями",

      "catalog.card4.title": "Кухонный гарнитур",
      "catalog.card4.text": "Вместительные шкафы, светлая столешница и практичная планировка",

      "catalog.card5.title": "Офисная мебель",
      "catalog.card5.text": "Набор выполнен в современном стиле с акцентом на строгие геометрические формы и контраст цветов",

      "catalog.card6.title": "Современная кухонная мебель",
      "catalog.card6.text": "Угловая кухня в современном стиле с глянцевыми фасадами, тёмной каменной столешницей и 3D-фартуком «Океан» с подсветкой",

      "catalog.price": "от 0 ₼",

      // Теги
      "tag.new": "новинка",
      "tag.trendy": "Модное",
      "tag.recommend": "Рекомендуем",
      "tag.comfort": "Максимум удобства",
      "tag.comfort2": "Максимум комфорта",
      "tag.popular": "Популярное",
      "tag.stylish": "Стильно и удобно",
      "tag.mirror": "С зеркальными дверями",
      "tag.exclusive": "Эксклюзив",

      // Features
      "feat.size.title": "Индивидуальные размеры",
      "feat.size.text": "Подстроим под планировку: точные замеры, 3D-эскиз, подбор материалов.",
      "feat.delivery.title": "Доставка и сборка",
      "feat.delivery.text": "Привезём и аккуратно установим. Работаем аккуратно и вовремя.",
      "feat.consult.title": "Бесплатная консультация",
      "feat.consult.text": "Поможем с выбором материалов и планировкой.",

      // About & Contacts
      "about.title": "О компании",
      "about.lead": "AbiLife — мебель для вашего стиля жизни. Работаем под ваши размеры, любим натуральные материалы и гарантируем безупречный результат",
      "about.text": "Материалы: натуральное дерево, прочные ткани и качественные детали. Сроки и качество работы фиксируем в договоре.",

      "contacts.title": "Контакты",
      "contacts.lead": "Пишите нам в соцсетях или звоните — ответим быстро.",
      "contacts.phone.label": "Телефон:",
      "contacts.email.label": "Email:",

      // Footer
      "footer.copy": "© 2025 AbiLife. Все права защищены."
    },

    az: {
      "nav.catalog": "Kataloq",
      "nav.about": "Haqqımızda",
      "nav.contacts": "Əlaqə",

      "hero.title": "Müasir mebel AbiLife",
      "hero.text": "Möhkəm materiallar və dəqiq ölçülər eviniz üçün. İstehsal edirik, çatdırırıq, quraşdırırıq.",
      "hero.btn.catalog": "Kataloqa bax",
      "hero.btn.contact": "Əlaqə saxla",

      "catalog.title": "Kataloq — nümunə məhsullar",
      "catalog.lead": "Aşağıda bir neçə əsas model təqdim olunub. İstənilən modeli ölçü və rəngə uyğun hazırlaya bilərik.",

      "catalog.card1.title": "Daxili kupe şkaf",
      "catalog.card1.text": "Güzgülü qapılarla kupe şkaf",

      "catalog.card2.title": "Mətbəx dəsti",
      "catalog.card2.text": "Geniş şkaflar, açıq rəngli masaüstü və praktik planlama",

      "catalog.card3.title": "Daxili kupe şkaf",
      "catalog.card3.text": "Güzgülü qapılarla kupe şkaf",

      "catalog.card4.title": "Mətbəx dəsti",
      "catalog.card4.text": "Geniş şkaflar, açıq rəngli masaüstü və praktik planlama",

      "catalog.card5.title": "Ofis mebeli",
      "catalog.card5.text": "Müasir üslubda icra olunmuş dəst — sərt həndəsi formalar və rənglərin kontrastı ilə",

      "catalog.card6.title": "Müasir mətbəx mebeli",
      "catalog.card6.text": "Parlaq fasadlı, tünd daş masaüstü və işıqlı 3D \"Okean\" paneli ilə müasir üslubda künc mətbəx",

      "catalog.price": "0 ₼-dən",

      "tag.new": "yeni",
      "tag.trendy": "Dəbdə",
      "tag.recommend": "Tövsiyə edirik",
      "tag.comfort": "Maksimum rahatlıq",
      "tag.comfort2": "Maksimum komfort",
      "tag.popular": "Məşhur",
      "tag.stylish": "Zərif və rahat",
      "tag.mirror": "Güzgülü qapılar",
      "tag.exclusive": "Eksklüziv",

      "feat.size.title": "Fərdi ölçülər",
      "feat.size.text": "Planlaşdırmaya uyğunlaşdırarıq: dəqiq ölçülər, 3D eskiz, material seçimi.",
      "feat.delivery.title": "Çatdırılma və montaj",
      "feat.delivery.text": "Çatdırıb diqqətlə quraşdıracağıq. İşimizi vaxtında görürük.",
      "feat.consult.title": "Pulsuz məsləhət",
      "feat.consult.text": "Material seçimi və planlaşdırmada kömək edirik.",

      "about.title": "Şirkət haqqında",
      "about.lead": "AbiLife — həyat tərzinizə uyğun mebel. Ölçülərinizə görə işləyirik, təbii materialları sevirik və mükəmməl nəticə təmin edirik.",
      "about.text": "Materiallar: təbii ağac, davamlı parçalar və keyfiyyətli detallar. Müqavilədə vaxt və keyfiyyəti təsdiqləyirik.",

      "contacts.title": "Əlaqə",
      "contacts.lead": "Bizə sosial şəbəkələrdə yazın və ya zəng edin — tez cavab verəcəyik.",
      "contacts.phone.label": "Telefon:",
      "contacts.email.label": "Email:",

      "footer.copy": "© 2025 AbiLife. Bütün hüquqlar qorunur."
    },

    en: {
      "nav.catalog": "Catalog",
      "nav.about": "About us",
      "nav.contacts": "Contacts",

      "hero.title": "Modern furniture AbiLife",
      "hero.text": "Durable materials and precise sizes for your home. We produce, deliver, install.",
      "hero.btn.catalog": "View catalog",
      "hero.btn.contact": "Contact us",

      "catalog.title": "Catalog — product examples",
      "catalog.lead": "Below are several basic models. We can make any model to match the size and color of your room.",

      "catalog.card1.title": "Built-in sliding wardrobe",
      "catalog.card1.text": "Sliding wardrobe with mirrored doors",

      "catalog.card2.title": "Kitchen set",
      "catalog.card2.text": "Spacious cabinets, light countertop and practical layout",

      "catalog.card3.title": "Built-in sliding wardrobe",
      "catalog.card3.text": "Sliding wardrobe with mirrored doors",

      "catalog.card4.title": "Kitchen set",
      "catalog.card4.text": "Spacious cabinets, light countertop and practical layout",

      "catalog.card5.title": "Office furniture",
      "catalog.card5.text": "Set made in a modern style with strict geometric shapes and color contrast",

      "catalog.card6.title": "Modern kitchen furniture",
      "catalog.card6.text": "Corner kitchen in modern style with glossy facades, dark stone countertop and illuminated 3D 'Ocean' backsplash",

      "catalog.price": "from 0 ₼",

      "tag.new": "new",
      "tag.trendy": "Trendy",
      "tag.recommend": "Recommended",
      "tag.comfort": "Maximum comfort",
      "tag.comfort2": "Maximum convenience",
      "tag.popular": "Popular",
      "tag.stylish": "Stylish & convenient",
      "tag.mirror": "With mirrored doors",
      "tag.exclusive": "Exclusive",

      "feat.size.title": "Custom sizes",
      "feat.size.text": "We adapt to your layout: precise measurements, 3D sketch, material selection.",
      "feat.delivery.title": "Delivery & assembly",
      "feat.delivery.text": "We deliver and carefully install. We work accurately and on time.",
      "feat.consult.title": "Free consultation",
      "feat.consult.text": "We will help with material choice and layout planning.",

      "about.title": "About the company",
      "about.lead": "AbiLife — furniture for your lifestyle. We work to your sizes, prefer natural materials and guarantee a flawless result.",
      "about.text": "Materials: natural wood, durable fabrics and quality details. Deadlines and quality are fixed in the contract.",

      "contacts.title": "Contacts",
      "contacts.lead": "Write to us on social media or call — we’ll respond quickly.",
      "contacts.phone.label": "Phone:",
      "contacts.email.label": "Email:",

      "footer.copy": "© 2025 AbiLife. All rights reserved."
    }
  };

  function translatePage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      const key = el.getAttribute('data-i18n');
      const text = translations[lang] && translations[lang][key];
      if (text !== undefined) {
        if (el.tagName.toLowerCase() === 'input' || el.tagName.toLowerCase() === 'textarea') {
          el.value = text;
        } else {
          el.textContent = text;
        }
      }
    });
    localStorage.setItem('siteLang', lang);
  }

  const select = document.getElementById('langSelect');
  if (select) {
    select.addEventListener('change', function() {
      translatePage(this.value);
    });
  }

  const saved = localStorage.getItem('siteLang') || 'ru';
  if (select) select.value = saved;
  translatePage(saved);

});

const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');
if (burger && nav) {
  burger.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
}
