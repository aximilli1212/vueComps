export default {
    data(){
        return {
            offset: 0
        }
    },

    methods:{
       update(){
           this.offset = window.pageYOffset;
       }
    },

    mounted() {
        window.addEventListener("scroll", this.update)
    }
}