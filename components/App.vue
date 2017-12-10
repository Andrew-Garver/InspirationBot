<template>
    <div id="app">
        <div class="col-md-8 subtle-background full-height">
            <daily-message></daily-message>
        </div>
        <div class="col-md-4 min-full-height">
            <chat-bot></chat-bot>
        </div>
    </div>
</template>

<script>
    import ChatBot from './ChatBot.vue'
    import DailyMessage from './DailyMessage.vue'

    export default {
        components: {
            ChatBot,
            DailyMessage
        }
    }
</script>
