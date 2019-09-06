import {
    fetchNewsList,
    fetchJobsList,
    fetchAskList,
    fetchList,
    fetchUserInfo,
    fetchCommentItem,
} from '../api/index.js';

export default {
    // promise ver.
    // FETCH_NEWS(context){
    //     return fetchNewsList()
    //         .then(response => {
    //             context.commit('SET_NEWS', response.data);
    //             return response;
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // },
    // FETCH_ASK(context){
    //     return fetchAskList()
    //         .then(response => {
    //             context.commit('SET_ASK', response.data);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // },
    // FETCH_JOBS(context){
    //     return fetchJobsList()
    //         .then(response => {
    //             context.commit('SET_JOBS', response.data);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // },
    // FETCH_USER(context, name){
    //     return fetchUserInfo(name)
    //         .then(response => {
    //             context.commit('SET_USER', response.data)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // },
    // FETCH_ITEM(context, id){
    //     return fetchCommentItem(id)
    //         .then(response => {
    //             // console.log(response.data);
    //             context.commit('SET_ITEM', response.data)
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // },
    // FETCH_LIST(context, pageName){
    //     return fetchList(pageName)
    //         .then(response => {
    //             context.commit('SET_LIST', response.data)
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // },

    // async / await ver.
    async FETCH_NEWS(context){
        const response = await fetchNewsList();
        context.commit('SET_NEWS', response.data);
        return response;
    },
    async FETCH_ASK(context){
        const response = await fetchAskList();
        context.commit('SET_ASK', response.data);
        return response;
    },
    async FETCH_JOBS(context){
        const response = await fetchJobsList();
        context.commit('SET_JOBS', response.data);
        return response;
    },
    async FETCH_USER(context, name){
        const response = await fetchUserInfo(name);
        context.commit('SET_USER', response.data);
        return response;
    },
    async FETCH_ITEM(context, id){
        const response = await fetchCommentItem(id);
        context.commit('SET_ITEM', response.data)
        return response;
    },
    async FETCH_LIST(context, pageName){
        const response = await fetchList(pageName);
        context.commit('SET_LIST', response.data);
        return response;
    },
}