<template>
    <div id="vcomments"></div>
</template>
<script>
export default {
    methods: {
        renderValine() {
            if(typeof window !== 'undefined') {
                this.window = window;
                window.AV = require('leancloud-storage');
            }
            const Valine = require('valine');
            const secretKeyConf = require('../../../config/secretKeyConf.js');
            new Valine({
                el: '#vcomments' ,
                appId: secretKeyConf.appId,
                appKey: secretKeyConf.appKey,
                notify:false, 
                verify:false, 
                avatar:'retro', 
                placeholder: '欢迎留言...' 
            });
        }
    },
    mounted() {
        this.renderValine();
    },
    
}
</script>