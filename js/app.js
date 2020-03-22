var app = new Vue({
    el: '#app',
    data() {
        return {
            status: {
                galleryModal: false,
            },

            menu: {
                sec: 1,
                items: [
                    { name: '關於我', anchor: 'about', icon: 'fas fa-user' },
                    { name: '工作經驗', anchor: 'experience', icon: 'fas fa-briefcase' },
                    { name: '參與作品', anchor: 'works', icon: 'fas fa-laptop-code' },
                    { name: '趣味・遊戲', anchor: 'practice', icon: 'fas fa-gamepad' },
                ],
            },

            exps: [
                {
                    date: '2019 / 04 ~ 2020 / 03',
                    jobTitle: '前端工程師',
                    jobInfo:
                        '活動網站製作、前端開發、網站測試與維護、GTM追蹤代碼安裝，以及Kule Lazy 4 Vue.js 組件開發。',
                    company: '邁圈數位整合有限公司',
                    address: 'https://goo.gl/maps/tZjVzaxAmZQqUHHE7',
                },
                {
                    date: '2018 / 06 ~ 2019 / 03',
                    jobTitle: '前端工程師',
                    jobInfo:
                        '使用 Drupal(CMS，內容管理系統)與 Vue.js，以及 Nuxt.js 開發。團隊分工合作開發如官方網站、一頁式活動網站以及購物網站。',
                    company: '聖誕老人國際股份有限公司',
                    address: 'https://goo.gl/maps/7nSE5KKyZpn',
                },
                {
                    date: '2016 / 07 ~ 2018 / 06',
                    jobTitle: '網站設計 / 實習',
                    jobInfo:
                        '參與專案規劃與製作、網站製作，如官方網站、活動網站、EDM電子郵件廣告，以及網站前後台的維護。',
                    company: '凱斯整合行銷有限公司',
                    address: 'https://goo.gl/maps/SJx1nTNjBCC2',
                },
                {
                    date: '2015／03 ~ 2015／05',
                    jobTitle: '網站開發助理 / 實習',
                    jobInfo: '協助Prototype與系統文件整理等系統建置作業準備，以及網站SEO優化建議。',
                    company: '技嘉科技股份有限公司',
                    address: 'https://goo.gl/maps/vHAUSNMsdZxbJRdz8',
                },
            ],

            works: [
                {
                    name: 'Kule Lazy 4 Vue.js 組件',
                    url: 'https://demo-lazy4vue.akensite.ml/vueComponents/accordion',
                    imgUrl: 'lazy4.jpg',
                    media: 'pc mb',
                    txt: '開發 CSS Framework Vue.js 組件 (開發中尚未上線)。',
                    tech: [{ name: 'Vue.js', color: 'green' }],
                    gallery: { state: false },
                },
                {
                    name: 'ETUDE HOUSE 專屬美肌魔飾',
                    url: 'https://faceblur.etudehouseevent.tw/',
                    imgUrl: 'etudehouse.jpg',
                    txt: '試用品兌換活動頁、互動翻牌遊戲與申請試用表單。',
                    media: 'pc mb',
                    tech: [{ name: 'Vue.js', color: 'green' }],
                    gallery: { state: false },
                },
                {
                    name: 'IPSA肌膚檢測專家',
                    url: '',
                    imgUrl: 'skincare.jpg',
                    txt: '試用品兌換活動頁與申請試用表單。',
                    media: 'pc mb',
                    tech: [{ name: 'Vue.js', color: 'green' }],
                    gallery: { state: false },
                },
                {
                    name: 'IPSA流金水 水嫩發光100%',
                    url: '',
                    imgUrl: 'goldwater.jpg',
                    txt: '試用品兌換活動頁與申請試用表單。',
                    media: 'pc mb',
                    tech: [{ name: 'Vue.js', color: 'green' }],
                    gallery: { state: false },
                },
                {
                    name: '敦南好好',
                    url: 'https://ann5509.github.io/projects.dunnan/',
                    imgUrl: 'dunnan.jpg',
                    txt: '一頁式建案網站，主視覺使用滾動視差效果，客製化的輪播功能。',
                    media: 'pc mb',
                    tech: [{ name: 'Vue.js', color: 'green' }],
                    gallery: {
                        path: 'dunnan',
                        num: 4,
                        state: true,
                    },
                },
                {
                    name: '迪卡儂十項全能運動派對活動',
                    url: 'https://ann5509.github.io/projects.decathlon/',
                    imgUrl: 'decathlon.jpg',
                    txt: '使用 Nuxt.js 製作的一頁式活動網站。',
                    media: 'pc mb',
                    tech: [{ name: 'Nuxt.js', color: 'olive' }],
                    gallery: {
                        main: '',
                        photo: [],
                        state: true,
                    },
                },
                {
                    name: '正義聯盟',
                    url: 'https://justice.matcher.tw/',
                    imgUrl: 'justice.jpg',
                    txt: '一頁式建案網站，以滾動換頁的方式瀏覽其餘內容。',
                    media: 'pc mb',
                    tech: [{ name: 'Vue.js', color: 'green' }],
                    gallery: { state: false },
                },
                {
                    name: 'Amway安麗純淨居家',
                    url: 'https://www.amway.com.tw/healthyhome/',
                    imgUrl: 'witness.jpg',
                    txt: '簡介Amway兩個商品的一頁式網站。',
                    media: 'pc mb',
                    tech: [{ name: 'Vue.js', color: 'green' }],
                    gallery: { state: false },
                },
                {
                    name: 'Amway安麗海外旅遊研討會獎勵方案',
                    url: 'https://www.amway.com.tw/AmwayASP4/incentivetrip/index.html',
                    imgUrl: 'incentivetrip.jpg',
                    txt: 'Amway海外旅遊的一頁式說明網站。',
                    media: 'pc mb',
                    tech: [{ name: 'Vue.js', color: 'green' }],
                    gallery: { state: false },
                },
                {
                    name: 'Amway安麗核心加碼計畫',
                    url: 'https://www.amway.com.tw/AmwayASP4/coreplusincentive/index.html',
                    imgUrl: 'coreplusincentive.jpg',
                    txt: 'Amway海外旅遊的一頁式說明網站。',
                    media: 'pc mb',
                    tech: [{ name: 'Vue.js', color: 'green' }],
                    gallery: { state: false },
                },
                {
                    name: '2019華為新影像大賽 next-image',
                    url: 'https://www.huaweifans.com.tw/nextimage2019/',
                    imgUrl: 'nextimage2019.jpg',
                    txt: '2019年華為舉辦的照相比賽，為一頁式網站。',
                    media: 'pc mb',
                    tech: [{ name: 'Vue.js', color: 'green' }],
                    gallery: { state: false },
                },
                {
                    name: 'KNCKFF.COM',
                    url: 'https://www.knckff.com/',
                    imgUrl: 'knckff.jpg',
                    txt: '結合 Drupal 與 Vue.js 製作的名牌鞋購物網站。',
                    media: 'pc mb',
                    tech: [{ name: 'Drupal', color: 'cyan' }],
                    gallery: { state: false },
                },
                {
                    name: '宇恩到府月子護理長',
                    url: 'http://www.yuennurse.com/',
                    imgUrl: 'yuennurse.jpg',
                    txt: '使用 Nuxt.js 製作的一頁式網站，包含連絡表單。',
                    media: 'pc mb',
                    tech: [{ name: 'Nuxt.js', color: 'olive' }],
                    gallery: { state: false },
                },
                {
                    name: '英倫護理之家',
                    url: 'https://www.yinglunbaby.com.tw/',
                    imgUrl: 'yinglunbaby.jpg',
                    txt: '使用 Drupal 開發的護理官方網站。',
                    media: 'pc mb',
                    tech: [{ name: 'Drupal', color: 'cyan' }],
                    gallery: { state: false },
                },
                {
                    name: '職場技術Zivazi掌握你的未來',
                    url: 'https://zivazi.com.tw/',
                    imgUrl: 'zivazi.jpg',
                    txt: '結合 Drupal 與 Vue.js 製作的線上教學網站。',
                    media: 'pc mb',
                    tech: [
                        { name: 'Drupal', color: 'cyan' },
                        { name: 'Vue.js', color: 'green' },
                    ],
                    gallery: { state: false },
                },
                {
                    name: '政大商學院信義不動產研究中心',
                    url: 'https://www.ncscre.nccu.edu.tw/',
                    imgUrl: 'ncscre.jpg',
                    txt: '使用 Drupal 開發的官方網站。',
                    media: 'pc mb',
                    tech: [{ name: 'Drupal', color: 'cyan' }],
                    gallery: { state: false },
                },
                {
                    name: '黑琵特約旅店',
                    url: '',
                    imgUrl: 'wetland.jpg',
                    txt: '為黑面琵鷺環境議題的資訊網站，使用 Nuxt.js 開發的網站。',
                    media: 'pc mb',
                    tech: [{ name: 'Nuxt.js', color: 'olive' }],
                    gallery: { state: false },
                },
                {
                    name: '德奧名廚德奧國際',
                    url: 'http://www.deraw.com.tw/mobile/index.asp',
                    imgUrl: 'deraw.jpg',
                    txt: '製作 AWD 手機版網站介面。',
                    media: 'mb',
                    tech: '',
                    gallery: { state: false },
                },
                {
                    name: '曼娜麗股份有限公司',
                    url: '',
                    imgUrl: 'manara.jpg',
                    txt: '日本美妝品購物網站。',
                    media: 'pc mb',
                    tech: '',
                    gallery: { state: false },
                },
            ],

            fun: [
                {
                    name: 'Facebook 眨眼照相遊戲',
                    url:
                        'https://www.facebook.com/fbcameraeffects/testit/760834367774051/M2M1MzMzYzYyMTVjMTAxM2YzNTNhNjZlOGM2NjAzMzQ=/',
                    imgUrl: 'spark-blink-game.jpg',
                    txt: '點擊螢幕開始遊戲，眨眼讓外送員跳過路上的障礙物。(未送審)',
                    tech: [{ name: 'Spark AR', color: 'red' }],
                    gallery: { state: false },
                },
                {
                    name: 'Looking Hashtag',
                    url:
                        'https://video.ftpe8-2.fna.fbcdn.net/v/t42.9040-2/75746180_1346987745476193_4290534696476999680_n.mp4?_nc_cat=100&_nc_sid=985c63&efg=eyJybHIiOjMwMCwicmxhIjo1MTIsInZlbmNvZGVfdGFnIjoic3ZlX3NkIn0%3D&_nc_ohc=Hx8GNof276cAX-D1ngs&rl=300&vabr=70&_nc_ht=video.ftpe8-2.fna&oh=dc5eecf9c4c1bf950c31871557de743d&oe=5E7337C2',
                    imgUrl: 'hashtag.jpg',
                    txt: '使用 Facebook Graph API。登入以搜尋IG公開貼文的hastag。(未送審)',
                    media: 'pc mb',
                    tech: '',
                    gallery: { state: false },
                },
                {
                    name: 'Just Fliping',
                    url: 'https://flip.oppswen.com/',
                    imgUrl: 'flip.jpg',
                    txt: '使用 Vue.js 與 CSS 撰寫的翻牌遊戲。',
                    media: 'pc mb',
                    tech: [{ name: 'Vue.js', color: 'green' }],
                    gallery: { state: false },
                },
                {
                    name: "Let's Bingo Bingo!",
                    url: 'https://bingo.oppswen.com/',
                    imgUrl: 'bingo.jpg',
                    txt: '為了聖誕節交換禮物，使用 Vue.js 與 CSS 撰寫的 Bingo 小遊戲。',
                    media: 'pc mb',
                    tech: [{ name: 'Vue.js', color: 'green' }],
                    gallery: { state: false },
                },
                {
                    name: 'Fruit Plan 水果配',
                    url: 'https://ann5509.github.io/myfruit/index.html',
                    imgUrl: 'fruit-plan.jpg',
                    txt: '練習 JS 的小題目，使用 ajax 取用 json 資料。',
                    media: 'mb',
                    tech: '',
                    gallery: { state: false },
                },
            ],

            gallery: {
                name: '敦南好好',
                path: 'dunnan',
                main: 1,
                num: 4,
            },
        };
    },

    methods: {
        switchStatus: function(which, boolean) {
            this.status[which] = boolean;
            this.setWindowUnscroll(which, boolean);
        },

        setWindowUnscroll: function(which, boolean) {
            var stopList = ['galleryModal'];

            stopList.forEach(function(el, i) {
                if (el == which) {
                    if (boolean) {
                        $('html').addClass('stop-scroll');
                    } else {
                        $('html').removeClass('stop-scroll');
                    }
                }
            });
        },

        formatedTech: function(media) {
            var txt = media.toUpperCase();
            txt = txt.replace(' ', '・');

            return txt;
        },

        goAnchor: function(id, index) {
            var target = $('#' + id);
            if (target.length) {
                this.menu.sec = index;
                var scrollTo = target.offset().top;
                $('body, html').animate({ scrollTop: scrollTo + 'px' }, 800);
            }
        },
    },
});

var $sec = null,
    scrollPos = 0,
    winH = 0,
    winW = 0;

$(window)
    .on('load', function() {
        $('body').addClass('loaded');

        $sec = $('section');
        setInitData();
        lazyLoading('.js-lazy');

        var that = app;
        var hashTag = location.hash;
        var menuItems = that.menu.items;

        if (hashTag.length) {
            var scrollHeight = $(hashTag).offset().top;
            menuItems.forEach(function(el, i) {
                if (hashTag.indexOf(el.anchor) !== -1) {
                    that.menu.sec = i + 1;
                }
            });

            $('html,body')
                .stop()
                .animate({ scrollTop: scrollHeight }, 10);
        }
    })
    .on('scroll', function() {
        $sec = $('section');
        setInitData();
        lazyLoading('.js-lazy');

        $sec.each(function(i, el) {
            var $elTop = $(el).offset().top;
            var $elH = $(el).outerHeight(true);
            if (scrollPos + winH >= $elTop && scrollPos + winH <= $elH + $elTop) {
                app.menu.sec = i + 1;
            }
        });
    });

// full height
function setInitData() {
    scrollPos = document.documentElement.scrollTop || document.body.scrollTop || 0;
    winW = $(window).outerWidth();
    winH = $(window).outerHeight();
}

function lazyLoading(target) {
    var $els = $(target);

    $els.each((i, el) => {
        var that = $(el);
        var $landing = that.siblings('[data-lazy="lazy"]');

        if (scrollPos + winH > $landing.offset().top && !$landing.hasClass('loaded')) {
            $src = that.attr('data-original');
            that.attr('src', $src);
            $landing.css({
                'background-image': 'url(' + $src + ')',
            });

            that.on('load', function() {
                that.siblings('.embed_lazy').addClass('uncover');
                $landing.addClass('loaded');
            });
        }
    });
}
