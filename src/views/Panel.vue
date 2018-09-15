<template>
    <container>
        个人中心111
        <modal /> {{ this.topics }}
        <button @click="test">登录</button>
    </container>
</template>

<script>
import { Modal, Container } from 'comps'
import { mapState, mapActions } from 'vuex'
//import { request } from 'request'

export default {
    components: {
        Modal,
        Container
    },
    computed: {
        ...mapState('user', ['topics'])
    },
    created() {
        this.test()
    },
    methods: {
        ...mapActions('user', ['fetchAllTopics']),
        test() {
            this.fetchAllTopics({
                method: 'get',
                url: 'topics',
                data: {
                    page: 1,
                    tab: 'good',
                    limit: 10,
                    mdrender: false
                }
            })
        }
    }
}
</script>
        