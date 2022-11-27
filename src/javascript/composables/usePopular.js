import PriceCard from "../components/PriceCard.vue";

export default {
    props:['coinsList','error'],
    components:{PriceCard},
    data(){
        return{
            mode:true
        }
    },
    mounted() {
        this.loader()
    },
    methods:{
        loader(){
            setTimeout(()=>{
                this.mode=false
            },2000)
        }
    }
}