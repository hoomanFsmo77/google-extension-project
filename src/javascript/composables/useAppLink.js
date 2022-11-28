import {RouterLink} from 'vue-router';

export default {
    props:{
        ...RouterLink.props,
        inactiveClass:String
    },
    computed:{
        isExternal (){
            return typeof this.to==='string' && this.to.startsWith('http')
        }
    }
}
