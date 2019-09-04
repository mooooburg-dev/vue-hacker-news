import Vue from 'vue';

export default new Vue();



// // 1. export const 로 내보낼 경우
// export const bus = new Vue();
// // 1-1. 받는 쪽에서는 const 변수명 그대로 받아야 한다
// import { bus } from '..경로';



// // 2. export default .. new 로 내보낼 경우,
// export default new Vue();
// // 2-1. 받는 이름을 자유롭게 아무렇게나 지정할 수 있는 차이가 있다
// import Bus(자유롭게) from '..경로';