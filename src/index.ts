import Vue from 'vue';
import HomePage from './components/homePage.vue';

export class App {
    constructor(selector: string){
        new Vue({
            render: (createElement) => createElement(HomePage)
        }).$mount(selector)
    }
}

const app = new App('#app');