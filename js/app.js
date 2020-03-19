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
                    jobInfo: '活動網站製作、前端開發、網站測試與維護，以及GTM追蹤代碼安裝。',
                    company: '邁圈數位整合有限公司',
                    address: 'https://goo.gl/maps/tZjVzaxAmZQqUHHE7',
                },
                {
                    date: '2018 / 06 ~ 2019 / 03',
                    jobTitle: '前端工程師',
                    jobInfo:
                        '使用 Drupal(CMS，內容管理系統)、Vue.js與Nuxt.js網頁開發。團隊分工合作開發如官方網站、一頁式活動網站以及購物網站。',
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
                    address: 'https://goo.gl/maps/SJx1nTNjBCC2',
                },
            ],

            works: [
                {
                    name: 'Kule Lazy 4 (CSS Framework) Vue.js 組件開發',
                    url: 'https://demo-lazy4vue.akensite.ml/vueComponents/accordion',
                    imgUrl: 'lazy4.jpg',
                    media: 'pc mb',
                    tech: [{ name: 'Vue.js', color: 'green' }],
                    gallery: { state: false },
                },
                {
                    name: 'ETUDE HOUSE 專屬美肌魔飾',
                    url: 'https://faceblur.etudehouseevent.tw/',
                    imgUrl: 'etudehouse.jpg',
                    media: 'pc mb',
                    tech: [{ name: 'Vue.js', color: 'green' }],
                    gallery: { state: false },
                },
                {
                    name: 'IPSA肌膚檢測專家',
                    url: '',
                    imgUrl: 'skincare.jpg',
                    media: 'pc mb',
                    tech: [{ name: 'Vue.js', color: 'green' }],
                    gallery: { state: false },
                },
                {
                    name: 'IPSA流金水 水嫩發光100%',
                    url: '',
                    imgUrl: 'goldwater.jpg',
                    media: 'pc mb',
                    tech: [{ name: 'Vue.js', color: 'green' }],
                    gallery: { state: false },
                },
                {
                    name: '敦南好好',
                    url: '',
                    imgUrl: 'dunnan.jpg',
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
                    url: '',
                    imgUrl: 'decathlon.jpg',
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
                    url: '',
                    imgUrl: 'justice.jpg',
                    media: 'pc mb',
                    tech: [{ name: 'Vue.js', color: 'green' }],
                    gallery: { state: false },
                },
                {
                    name: 'Amway安麗純淨居家',
                    url: 'https://www.amway.com.tw/healthyhome/',
                    imgUrl: 'witness.jpg',
                    media: 'pc mb',
                    tech: [{ name: 'Vue.js', color: 'green' }],
                    gallery: { state: false },
                },
                {
                    name: 'Amway安麗海外旅遊研討會獎勵方案',
                    url: 'https://www.amway.com.tw/AmwayASP4/incentivetrip/index.html',
                    imgUrl: 'incentivetrip.jpg',
                    media: 'pc mb',
                    tech: [{ name: 'Vue.js', color: 'green' }],
                    gallery: { state: false },
                },
                {
                    name: 'Amway安麗核心加碼計畫',
                    url: 'https://www.amway.com.tw/AmwayASP4/coreplusincentive/index.html',
                    imgUrl: 'coreplusincentive.jpg',
                    media: 'pc mb',
                    tech: [{ name: 'Vue.js', color: 'green' }],
                    gallery: { state: false },
                },
                {
                    name: '2019華為新影像大賽 next-image',
                    url: 'https://www.huaweifans.com.tw/nextimage2019/',
                    imgUrl: 'nextimage2019.jpg',
                    media: 'pc mb',
                    tech: [{ name: 'Vue.js', color: 'green' }],
                    gallery: { state: false },
                },
                {
                    name: 'KNCKFF.COM',
                    url: 'https://www.knckff.com/',
                    imgUrl: 'knckff.jpg',
                    media: 'pc mb',
                    tech: [{ name: 'Drupal', color: 'cyan' }],
                    gallery: { state: false },
                },
                {
                    name: '宇恩到府月子護理長',
                    url: 'http://www.yuennurse.com/',
                    imgUrl: 'yuennurse.jpg',
                    media: 'pc mb',
                    tech: [{ name: 'Nuxt.js', color: 'olive' }],
                    gallery: { state: false },
                },
                {
                    name: '英倫護理之家',
                    url: 'https://www.yinglunbaby.com.tw/',
                    imgUrl: 'yinglunbaby.jpg',
                    media: 'pc mb',
                    tech: [{ name: 'Drupal', color: 'cyan' }],
                    gallery: { state: false },
                },
                {
                    name: '職場技術Zivazi掌握你的未來',
                    url: 'https://zivazi.com.tw/',
                    imgUrl: 'zivazi.jpg',
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
                    media: 'pc mb',
                    tech: [{ name: 'Drupal', color: 'cyan' }],
                    gallery: { state: false },
                },
                {
                    name: '黑琵特約旅店',
                    url: '',
                    imgUrl: 'wetland.jpg',
                    media: 'pc mb',
                    tech: [{ name: 'Nuxt.js', color: 'olive' }],
                    gallery: { state: false },
                },
                {
                    name: '德奧名廚德奧國際',
                    url: 'http://www.deraw.com.tw/mobile/index.asp',
                    imgUrl: 'deraw.jpg',
                    media: 'mb',
                    tech: '',
                    gallery: { state: false },
                },
                {
                    name: '曼娜麗股份有限公司',
                    url: '',
                    imgUrl: 'manara.jpg',
                    media: 'pc mb',
                    tech: '',
                    gallery: { state: false },
                },
            ],

            fun: [
                {
                    name: 'Looking Hashtag',
                    url: '',
                    imgUrl: 'hashtag.jpg',
                    media: 'pc mb',
                    tech: '',
                    gallery: { state: false },
                },
                {
                    name: 'Just Fliping',
                    url: 'https://bingo.oppswen.com/',
                    imgUrl: 'flip.jpg',
                    media: 'pc mb',
                    tech: [{ name: 'Vue.js', color: 'green' }],
                    gallery: { state: false },
                },
                {
                    name: "Let's Bingo Bingo!",
                    url: 'https://bingo.oppswen.com/',
                    imgUrl: 'bingo.jpg',
                    media: 'pc mb',
                    tech: [{ name: 'Vue.js', color: 'green' }],
                    gallery: { state: false },
                },
                {
                    name: 'Fruit Plan 水果配',
                    url: 'https://ann5509.github.io/myfruit/index.html',
                    imgUrl: 'fruit-plan.jpg',
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
