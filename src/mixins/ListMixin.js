// mixin 구조
import bus from '../utils/bus.js';

export default {
    // 여러 컴포넌트에서 재사용할 컴포넌트 옵션
    mounted(){
      bus.$emit('end:spinner');
    },
    created(){
        // bus.$emit('start:spinner');
        
        // this.$store.dispatch('FETCH_LIST', this.$route.name)
        //     .then(() => {
        //       console.log('fetched!');
        //       bus.$emit('end:spinner');
        //     })
        //     .catch(error => {
        //       console.log(error);
        //     });
    },
}

// HOC 구조
// export default function create(){

// }