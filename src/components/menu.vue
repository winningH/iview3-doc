<style>
    .wrapper-header-nav .ivu-menu-item i{
        margin-right: 6px;
    }
    .wrapper-header .ivu-menu{
        z-index: 901;
        box-shadow: 0 1px 1px rgba(0,0,0,.08);
    }
</style>
<template>
    <Menu mode="horizontal" :active-name="currentActiveKey" @on-select="handleSelect">
        <div class="wrapper-header-nav">
            <router-link to="/" class="wrapper-header-nav-logo">
                <img src="../images/logo-doc.png">
            </router-link>
            <div class="wrapper-header-nav-search">
                <i-select
                    ref="select"
                    v-model="search"
                    filterable
                    :placeholder="searchText"
                    :not-found-text="notFoundText"
                    @on-change="handleSearch">
                    <i-option v-for="item in navigateList" :key="item.path" :value="item.path">
                        <template v-if="lang === 'zh-CN'">{{ item.title }}</template>
                        <template v-else>{{ item.title.split(' ')[0] }}</template>
                    </i-option>
                </i-select>
            </div>
            <div class="wrapper-header-nav-list">
                <Menu-item name="guide" :to="handleGoToMenu('/guide/introduce')">
                    <!--<Icon type="ios-navigate"></Icon>-->
                    {{ $t('index.guide') }}
                </Menu-item>
                <Menu-item name="component" :to="handleGoToMenu('/guide/install')">
                    <!--<Icon type="ios-keypad"></Icon>-->
                    {{ $t('index.component') }}
                </Menu-item>
                
                <ButtonGroup size="small">
                    <Button icon="logo-github" @click="handleGoToGitHub"></Button>
                    <Button icon="ios-settings" @click="handleToggleSetting"></Button>
                    <Button @click="handleChangeLang" >
                        <template v-if="lang === 'zh-CN'">EN</template>
                        <template v-else>中文</template>
                    </Button>
                </ButtonGroup>
            </div>
        </div>
    </Menu>
</template>
<script>
    import navigate from '../config/navigate';
    import Config from '../config/config';
    import bus from './bus';

    export default {
        inject: ['app'],
        props: {
            activeKey: String
        },
        data () {
            return {
                search: '',
                navigateList: [],
                liveDot: false,
                currentActiveKey: this.activeKey,
                searchText: this.$t('index.search'),
                notFoundText: this.$t('index.notFound'),
                lang: this.$lang
            };
        },
        watch: {
            activeKey (val) {
                this.currentActiveKey = val;
            },
            currentActiveKey (val) {
                this.$emit('on-change', val);
            }
        },
        methods: {
            handleSearch (path) {
                if (this.lang === 'en-US') path += '-en';
                this.search = '';
                this.$refs.select.setQuery('');
                this.$nextTick(() => {
                    setTimeout(() => {
                        this.$router.push(path);
                    }, 300);
                });
            },
            handleSelect (type) {
                if (type === 'dev') return;
                const pathSuffix = this.lang === 'zh-CN' ? '' : '-en';

                if (type === 'donate') {
                    bus.$emit('on-donate-show');
                } else if (type === 'github') {
                    window.open('https://github.com/iview/iview');
                } else if (type === 'guide') {
                    this.$router.push(navigate.guide[0].path + pathSuffix);
                } else if (type === 'component') {
                    this.$router.push(navigate.beforeComponents[0].path + pathSuffix);
                } else if (type === 'practice') {
                    this.$router.push(navigate.practice[0].path + pathSuffix);
                } else if (type === 'cli') {
                    this.$router.push('/cli' + pathSuffix);
                } else if (type === 'live') {
                    this.$router.push('/live');
                } else if (type === 'iview-loader') {
                    this.$router.push('/guide/iview-loader' + pathSuffix);
                } else if (type === 'iview-admin') {
                    window.open('https://github.com/iview/iview-admin');
                } else if (type === 'iview-area') {
                    window.open('https://github.com/iview/iview-area');
                } else if (type === 'iview-editor') {
                    window.open('https://github.com/iview/iview-editor');
                }
                this.$nextTick(() => {
                    this.updateActiveNav();
                });
            },
            updateActiveNav () {
                const componentList = [
                    '/guide/install',
                    '/guide/start',
                    '/guide/i18n',
                    '/guide/theme',
                    '/guide/iview-loader',
                    '/overview',
                    '/guide/update'
                ];

                const route = this.$route.path;
                if (route.indexOf('component') > -1 || componentList.indexOf(route) > -1) {
                    this.currentActiveKey = 'component';
                } else if (route.indexOf('practice') > -1) {
                    this.currentActiveKey = 'practice';
                } else if (route.indexOf('live') > -1) {
                    this.currentActiveKey = 'live';
                } else {
                    this.currentActiveKey = 'guide';
                }
            },
            handleChangeLang () {
                const lang = this.lang === 'zh-CN' ? 'en-US' : 'zh-CN';
                const path = this.$route.path.indexOf('-en') > -1 ? this.$route.path.split('-en')[0] : this.$route.path + '-en';
                bus.$emit('on-change-lang', lang, path);
            },
            handleVersion (v) {
                if (v == 1) {
                    window.location.href = 'http://v1.iviewui.com';
                }
                if (v == 2) {
                    window.location.href = 'http://v2.iviewui.com';
                }
            },
            handleGoToGitHub () {
                window.open('https://github.com/winningH/iview3-doc');
            },
            
            handleGoToMenu (name) {
                if (this.lang === 'zh-CN') {
                    return name;
                } else {
                    return name + '-en';
                }
            },
            handleToggleSetting () {
                this.app.handleOpenSetting();
            }
        },
        created () {
            this.lang = this.$lang;
            let list = [];
            for (let i = 0; i < navigate.components.length; i++) {
                for (let j = 0; j < navigate.components[i].list.length; j++) {
                    list.push(navigate.components[i].list[j]);
                }
            }
            this.navigateList = list;
            // 设置直播 dot
            const liveDotVersion = window.localStorage.getItem('liveVersion');
            if (liveDotVersion) {
                this.liveDot = liveDotVersion < Config.liveVersion;
            } else {
                this.liveDot = true;
            }
        }
    };
</script>