var app = new Vue({
    el: '#app',
    data() {
        return {
            menu: {
                sec: 1,
                items: [
                    { name: '關於我', anchor: 'about', icon: 'fas fa-smile' },
                    { name: '工作經驗', anchor: 'experience', icon: 'fas fa-briefcase' },
                    { name: '參與作品', anchor: 'works', icon: 'fas fa-smile' },
                    { name: '趣味・遊戲', anchor: 'practice', icon: 'fas fa-gamepad' },
                ],
            },

            exps: [
                {
                    date: '2020 / 03 - 2019 / 04',
                    jobTitle: '前端工程師',
                    jobInfo: '活動網站切版與前端開發，包含網站測試與維護，與GTM追蹤代碼安裝。',
                    company: '邁圈數位整合有限公司',
                    address: 'https://goo.gl/maps/tZjVzaxAmZQqUHHE7',
                },
                {
                    date: '2019 / 03 - 2018 / 06',
                    jobTitle: '前端工程師',
                    jobInfo:
                        '使用 Drupal(CMS，內容管理系統)進行網頁開發，以及 Nuxt.js，與團隊分工合作開發如官方網站、一頁式活動網站以及購物網站。',
                    company: '聖誕老人國際股份有限公司',
                    address: 'https://goo.gl/maps/7nSE5KKyZpn',
                },
                {
                    date: '2018 / 06 - 2016 / 07',
                    jobTitle: '網站設計 / 實習',
                    jobInfo:
                        '參與專案規劃與製作，執行專案網站的製作與切版(含行動版)，如官方網站、活動網站、EDM電子郵件廣告，以及網站前後台的維護。',
                    company: '凱斯整合行銷有限公司',
                    address: 'https://goo.gl/maps/SJx1nTNjBCC2',
                },
                {
                    date: '2015／05 - 2015／03',
                    jobTitle: '網站開發助理 / 實習',
                    jobInfo: '協助Prototype與系統文件整理等系統建置作業準備，以及網站優化SEO。',
                    company: '技嘉科技股份有限公司',
                    address: 'https://goo.gl/maps/SJx1nTNjBCC2',
                },
            ],

            works: [
                {
                    name: 'ETUDE HOUSE 專屬美肌魔飾',
                    url: 'https://faceblur.etudehouseevent.tw/',
                    imgUrl: 'etudehouse.jpg',
                    media: 'pc mb',
                    tech: [{ name: 'Vue.js', color: 'green' }],
                },
                {
                    name: 'IPSA肌膚檢測專家',
                    url: '',
                    imgUrl: 'skincare.jpg',
                    media: 'pc mb',
                    tech: [{ name: 'Vue.js', color: 'green' }],
                },
                {
                    name: 'IPSA流金水 水嫩發光100%',
                    url: '',
                    imgUrl: 'goldwater.jpg',
                    media: 'pc mb',
                    tech: [{ name: 'Vue.js', color: 'green' }],
                },
                {
                    name: '敦南好好',
                    url: 'https://dunnanhowhow.h35.tw/',
                    imgUrl: 'dunnan.jpg',
                    media: 'pc mb',
                    tech: [{ name: 'Vue.js', color: 'green' }],
                },
                {
                    name: '迪卡儂十項全能運動派對活動',
                    url: '',
                    imgUrl: 'decathlon.jpg',
                    media: 'pc mb',
                    tech: [{ name: 'Nuxt.js', color: 'olive' }],
                },
                {
                    name: '正義聯盟',
                    url: 'https://zy.h35.tw/',
                    imgUrl: 'justice.jpg',
                    media: 'pc mb',
                    tech: [{ name: 'Vue.js', color: 'green' }],
                },
                {
                    name: 'Amway安麗純淨居家',
                    url: 'https://www.amway.com.tw/healthyhome/',
                    imgUrl: 'witness.jpg',
                    media: 'pc mb',
                    tech: [{ name: 'Vue.js', color: 'green' }],
                },
                {
                    name: 'Amway安麗海外旅遊研討會獎勵方案',
                    url: 'https://www.amway.com.tw/AmwayASP4/incentivetrip/index.html',
                    imgUrl: 'incentivetrip.jpg',
                    media: 'pc mb',
                    tech: [{ name: 'Vue.js', color: 'green' }],
                },
                {
                    name: 'Amway安麗核心加碼計畫',
                    url: 'https://www.amway.com.tw/AmwayASP4/coreplusincentive/index.html',
                    imgUrl: 'coreplusincentive.jpg',
                    media: 'pc mb',
                    tech: [{ name: 'Vue.js', color: 'green' }],
                },
                {
                    name: '2019華為新影像大賽 next-image',
                    url: 'https://www.huaweifans.com.tw/nextimage2019/',
                    imgUrl: 'nextimage2019.jpg',
                    media: 'pc mb',
                    tech: [{ name: 'Vue.js', color: 'green' }],
                },
                {
                    name: 'KNCKFF.COM',
                    url: 'https://www.knckff.com/',
                    imgUrl: 'knckff.jpg',
                    media: 'pc mb',
                    tech: [{ name: 'Drupal', color: 'cyan' }],
                },
                {
                    name: '宇恩到府月子護理長',
                    url: 'http://www.yuennurse.com/',
                    imgUrl: 'yuennurse.jpg',
                    media: 'pc mb',
                    tech: [{ name: 'Nuxt.js', color: 'olive' }],
                },
                {
                    name: '英倫護理之家',
                    url: 'https://www.yinglunbaby.com.tw/',
                    imgUrl: 'yinglunbaby.jpg',
                    media: 'pc mb',
                    tech: [{ name: 'Drupal', color: 'cyan' }],
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
                },
                {
                    name: '政大商學院信義不動產研究中心',
                    url: 'https://www.ncscre.nccu.edu.tw/',
                    imgUrl: 'ncscre.jpg',
                    media: 'pc mb',
                    tech: [{ name: 'Drupal', color: 'cyan' }],
                },
                {
                    name: '黑琵特約旅店',
                    url: '',
                    imgUrl: 'wetland.jpg',
                    media: 'pc mb',
                    tech: [{ name: 'Nuxt.js', color: 'olive' }],
                },
                {
                    name: '德奧名廚德奧國際',
                    url: 'http://www.deraw.com.tw/mobile/index.asp',
                    imgUrl: 'deraw.jpg',
                    media: 'mb',
                    tech: '',
                },
                {
                    name: '曼娜麗股份有限公司',
                    url: '',
                    imgUrl: 'manara.jpg',
                    media: 'pc mb',
                    tech: '',
                },
            ],

            fun: [
                {
                    name: 'Looking Hashtag',
                    url: '',
                    imgUrl: 'hashtag.jpg',
                    media: 'pc mb',
                    tech: '',
                },
                {
                    name: 'Just Fliping',
                    url: 'https://bingo.oppswen.com/',
                    imgUrl: 'flip.jpg',
                    media: 'pc mb',
                    tech: [{ name: 'Vue.js', color: 'green' }],
                },
                {
                    name: "Let's Bingo Bingo!",
                    url: 'https://bingo.oppswen.com/',
                    imgUrl: 'bingo.jpg',
                    media: 'pc mb',
                    tech: [{ name: 'Vue.js', color: 'green' }],
                },
                {
                    name: 'Fruit Plan 水果配',
                    url: 'https://ann5509.github.io/myfruit/index.html',
                    imgUrl: 'fruit-plan.jpg',
                    media: 'mb',
                    tech: '',
                },
            ],
        };
    },

    methods: {
        formatedTech: function(media) {
            var txt = media.toUpperCase();
            txt = txt.replace(' ', '・');

            return txt;
        },

        goAnchor: function(id, index) {
            this.menu.sec = index;

            var target = $('#' + id);
            console.log(target);
            if (target.length) {
                var scrollTo = target.offset().top;
                $('body, html').animate({ scrollTop: scrollTo + 'px' }, 800);
            }
        },
    },
});

$(window)
    .on('scroll', function() {
        var $sec = $('section');
    })
    .on('load', function() {
        var that = app;
        var hashTag = location.hash;
        var menuItems = that.menu.items;

        if (hashTag.length) {
            var scrollHeight = $(hashTag).offset().top;

            console.log(scrollHeight);

            menuItems.forEach(function(el, i) {
                if (hashTag.indexOf(el.anchor) !== -1) {
                    that.menu.sec = i + 1;
                }
            });

            $('html,body')
                .stop()
                .animate({ scrollTop: scrollHeight }, 10);
        }
    });

var cursorItem = '.js-cursor';
