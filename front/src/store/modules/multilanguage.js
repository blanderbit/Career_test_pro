// initial state

import list_language from './../../api/multilanguage_request';
import questions from "../../api/questions";
import Helper_count from "../helpers/count";
import Helper_CreateObject from "../helpers/multilanguage_counter";

const state = {
    active: false,
    language_now: {
        id: 1,
        language: "English",
        code: "en"
    },
    menu_list: [
        {
            name: 'Home',
            path: '/home'
        },{
            name: 'FAQ',
            path: '/faq'
        },{
            name:  'Blog',
            path: '/blog'
        },{
            name:  'Contact Us',
            path: '/contact-us'
        },{
            name:  'About Us',
            path: '/about-us'
        },
    ],
    language_array:[
        {
            name:'RU',
            full_name:'Russian',
            path: '/ru'
        },
        {
            name: 'EN',
            full_name: 'English',
            path: '/ru'
        }
    ],
    sotial_networks: [
        {
            name: 'linkedin',
            path: 'http://backcartestpro.qbex.io/assets/linkedin.png'
        },{
            name: 'twitter',
            path: 'http://backcartestpro.qbex.io/assets/twitter.png'
        },{
            name: 'facebook',
            path: 'http://backcartestpro.qbex.io/assets/facebook.png'
        },
    ],
    data:{}
};

const getters = {
    get_language_now(state) {
        return state.language_now
    },
    get_menu_list (state) {
        return state.menu_list
    },
    get_language_array (state) {
        return state.language_array
    },
    get_sotial_networks (state) {
        return state.sotial_networks
    },
    get_status_project(state){
        return state.active
    },
    getHomeFirstSection(){
        return state.data
               && state.data.HomePage
               && state.data.HomePage.oneSection ? state.data.HomePage.oneSection : {}
    }
};

/**
 * ----- ACTIONS -----
 **/

const actions = {
    action_change_state({commit}, value){
        commit('change_state', {
            data: value,
            name: 'language_array'
        });
        const data = Helper_count.find_language_now_in_array(value);
        commit('change_state', {
            data: data,
            name: 'language_now'
        });
        list_language.get_site(data.id, commit);
        questions.get_questions(data.id, this, commit);
    },
    action_spinner({commit}, value){
        commit('change_state', value)
    },
};
/**
 * ----- MUTATIONS -----
 * */
const mutations = {
    change_state (state, value) {
        state[value.name] = value.data;
    },
    setVariable(state, value){
        const object = Helper_CreateObject.createObjectSite(value);
        state.data = {...object};
        state.menu_list = state.menu_list.map((item, index) => {
            return {
                name: object.menu_list[index],
                path: item.path
            }
        });
    }
};

export default {
  namespaced: true,
  getters,
  state,
  actions,
  mutations
};
