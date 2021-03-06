let http = window;

export class Settings{
    static get_all_admin(data){
        http = window.Vue.http;
        return http.get('/api/users')
    }
    static list_language(){
        http = window.Vue.http;
        return http.get('/api/languages')
    }
    static add_language(data){
        http = window.Vue.http;
        return http.post('/api/add-language', data)
    }
    static add_Document(data, id){
        http = window.Vue.http;
        return http.post(`/api/import-csv/${id}`, data)
    }
    static export(id){
        http = window.Vue.http;
        return http.get(`/api/export-csv/${id}`)
    }
    static get_price_in_language(language_id){
        http = window.Vue.http;
        return http.get(`/api/price?language_id=${language_id}`)
    }
    static seve_price_in_language(data){
        http = window.Vue.http;
        return http.post(`/api/price`, data)
    }
    static get_test_codes(){
        http = window.Vue.http;
        return http.get(`/api/testcode`)
    }
    static crate_test_code(){
        http = window.Vue.http;
        return http.post(`/api/testcode-generate`, {})
    }
    static get_invoices(filter){
        http = window.Vue.http;
        return http.get(`/api/invoices?from_date=${filter.from_date}&to_date=${filter.to_date}`)
    }
    static get_site(language_id){
        http = window.Vue.http;
        return http.get(`/api/site-blocks?language_id=${language_id}`)
    }
    static update_site(data, id){
        http = window.Vue.http;
        return http.post(`/api/site-blocks/${id}`, {
            value:data.value,
            language_id:data.language_id
        })
    }
    static get_posts(language_id){
        http = window.Vue.http;
        return http.get(`/api/posts?language_id=${language_id}`)
    }
    static create_posts(data){
        http = window.Vue.http;
        return http.post(`/api/posts`, data)
    }
    static update_posts(data, post_id){
        http = window.Vue.http;
        return http.put(`/api/posts/${post_id}`, data)
    }
    static delete_posts(post_id){
        http = window.Vue.http;
        return http.delete(`/api/posts/${post_id}`)
    }

    static get_meta_tags(language_id){
        http = window.Vue.http;
        return http.get(`/api/metatags?language_id=${language_id}`)
    }
    static create_meta_tag(data){
        http = window.Vue.http;
        return http.post(`/api/metatags`, data)
    }
    static update_meta_tag(data, id){
        http = window.Vue.http;
        return http.put(`/api/metatags/${id}`, data)
    }
    static delete_meta_tag(id){
        http = window.Vue.http;
        return http.delete(`/api/metatags/${id}`)
    }
}
