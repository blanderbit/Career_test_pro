<template>
    <div class="tests">
        <component :is="component_active"></component>
    </div>
</template>

<script>
    import information_and_start from '../../components/test_page/information_and_start/index.vue';
    import steps from '../../components/test_page/steps/index.vue';
    import {Tag} from "../../helper/helpTegs";
    import {mapGetters} from "vuex";
    import {RETURN_ROUTER} from "../../helper/routerHelp";
    const {base64encode, base64decode} = require('nodejs-base64');
    if (process.browser) {

    }
    export default {
        async fetch({redirect, store, test, route, commit,req}) {
            if(store.getters['multilanguage/get_tests']) {
                store.commit('multilanguage/change_state', {
                    data: true,
                    name: 'active'
                });
                return;
            }
            store.commit('multilanguage/change_state', {
                data: store.getters['multilanguage/get_tests'] + 1,
                name: 'tests'
            });
            let lang = route && route.params && route.params.lang ? route.params.lang : '';
            console.log(lang)
            const rout = route && route.fullPath ? route.fullPath.split('/')[1] : '';
            !lang ? lang = 'en' : null;
            const data = await store.dispatch('multilanguage/ssrRender', {lang, rout, redirect});
            await store.dispatch('questions/action_questions', data);
            const res =  await store.dispatch('meta/action_tegs', {
                store:lang ? lang : store.getters['multilanguage/get_language_now'],
                page:rout
            });
            store.commit('multilanguage/change_state', {
                data: true,
                name: 'active'
            });
        },
        head () {
            return {
                meta: Tag.getArrayTags(this.meta),
            }
        },
        name: "TestPage",
        components:{
            'information_and_start-component' : information_and_start,
            'steps-component' : steps,
        },
        data () {
            return {}
        },
        created(){
            try {
                const resRout = RETURN_ROUTER.initRouter(this.$router.history.current);
                if (resRout) window.location.href = `/?rout=${base64encode(resRout)}`;
            } catch (e) {
            }
        },
        computed:{
            component_active(){
                return Object.keys(this.$route.params).length == 0
                    ?
                    'information_and_start-component'
                    :
                    'steps-component'
            },
            ...mapGetters({
                meta: 'meta/get_meta'
            })
        },
    }
</script>

<style scoped>

</style>
