<style lang="less">
    @import "../styles/article.less";
</style>
<template>
    <div>
        <div class="wrapper">
            <div class="wrapper-header">
                <nav-menu :active-key="activeKey" @on-change="handleNavMenuChange"></nav-menu>
            </div>
            <div class="wrapper-container">
                <Row>
                    <i-col span="4" class="wrapper-navigate">
                        <Navigate :type="activeKey"></Navigate>
                    </i-col>
                    <i-col span="17">
                        <div class="wrapper-content ivu-article">
                            <slot></slot>
                        </div>
                    </i-col>
                    <i-col span="3">
                        <Affix :offset-top="75">
                            <div class="catalogue" v-if="list.length">
                                <Anchor show-ink>
                                    <AnchorLink v-for="(item, index) in list" :key="index" :href="'#' + item.path" :title="item.title" />
                                    <AnchorLink :scroll-offset="140" href="#API" title="API" v-if="need_api" />
                                </Anchor>
                            </div>

                            <template v-if="lang === 'zh-CN'">
                                <div style="margin-top: 20px"></div>
                                <a v-for="item in app.adList2" :href="item.link" :key="item.id" @click="handleAsideAd(item.id)" target="_blank" class="wrapper-aside wrapper-aside-no-padding">
                                    <img :src="item.img">
                                </a>
                            </template>
                        </Affix>
                    </i-col>
                </Row>
            </div>
        </div>
    </div>
</template>
<script>
    import Navigate from './navigate.vue';
    import navMenu from './menu.vue';

    export default {
        inject: ['app'],
        components: {
            Navigate,
            navMenu
        },
        data () {
            return {
                list: [],
                need_api: false,
                donate: false,
                ask: false,
                activeKey: '',
                lang: this.$lang,
                adCarousel: 0,
                ad_index: this.app.ad_index
            }
        },
        methods: {
            handleModalClose () {
                this.donate = false;
            },
            handleAskClose () {
                this.ask = false;
            },
            updateActiveNav () {
                const componentList = [
                    '/guide/install',
                    '/guide/install-en',
                    '/guide/start',
                    '/guide/start-en',
                    '/guide/i18n',
                    '/guide/i18n-en',
                    '/guide/theme',
                    '/guide/theme-en',
                    '/guide/iview-loader',
                    '/guide/iview-loader-en',
                    '/overview',
                    '/overview-en',
                    '/guide/update',
                    '/guide/update-en',
                    '/guide/global',
                    '/guide/global-en',
                ];

                const route = this.$route.path;
                if (route.indexOf('component') > -1 || componentList.indexOf(route) > -1) {
                    this.activeKey = 'component';
                } else if (route.indexOf('practice') > -1) {
                    this.activeKey = 'practice';
                } else if (route.indexOf('live') > -1) {
                    this.activeKey = 'live';
                }  else {
                    this.activeKey = 'guide';
                }
            },
            handleNavMenuChange (val) {
                this.activeKey = val;
            },
            // 控制锚点跳转
            handleClickLink (id) {
                const top = document.getElementById(id).offsetTop;
                window.location.hash = id;
                let scroll_top = top + 15;
                if (id === 'API') scroll_top -= 150;
                window.scrollTo(0, scroll_top);
            },
            handleAsideAd (name, isQQGroup = false) {
//                _hmt.push(['_trackEvent', name, 'click']);
                if (isQQGroup) {
                    this.ask = true;
                }
            },
            handleClickAsk () {
//                _hmt.push(['_trackEvent', 'ask_issue_dev', 'click']);
            }
        },
        created () {
            this.lang = this.$lang;
        },
        mounted () {
            this.updateActiveNav();

            const examples = this.$slots.default[0].elm.querySelectorAll('.example');

            // 有示例时，显示示例的目录，没有，显示标题为目录
            if (examples.length) {
                this.need_api = true;
                for (let i = 0; i < examples.length; i++) {
                    const path = examples[i].querySelectorAll('header span a')[0].getAttribute('href').replace('#', '');
                    const title = examples[i].querySelectorAll('header span a')[0].getAttribute('data-title').replace('#', '');
                    this.list.push({
                        title: title,
                        path: path
                    });
                }
            } else {
                this.need_api = false;
                const headers = this.$slots.default[0].elm.querySelectorAll('.anchor');
                for (let i = 0; i < headers.length; i++) {
                    const title = headers[i].querySelectorAll('h2')[0];
                    if (title) {
                        const title_name = title.innerHTML;
                        const path = headers[i].querySelectorAll('h2')[0].getAttribute('id');
                        this.list.push({
                            title: title_name,
                            path: path
                        });
                    }
                }
            }
        }
    }
</script>