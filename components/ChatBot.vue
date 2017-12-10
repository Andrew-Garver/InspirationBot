<template>
    <div id="chat-bot">
        <div class="form-bottom">
            <div id="messages">
                <div class="sentMsg">
                    <p>Hello. I need some help with an exam.</p>
                </div>
                <div class="rcvdMsg">
                    <p>Hello! What subject do you need help with specifically? I am quite knowledgeable in all sorts of topics.</p>
                </div>
            </div>
            <form id="chatBotForm">
                <input type="text" class="form-control" placeholder="What's up Sydney?"/>
                <br/>
                <button type="button" class="btn btn-primary btn-block fat-btn">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
//    import {askQuestion} from '../vuex/actions'

    export default {
        vuex: {
//            getters: {
//                showMsg: state => state.showMsg
//            },
//            actions: {
//                askQuestion
//            }
        }
    }
</script>