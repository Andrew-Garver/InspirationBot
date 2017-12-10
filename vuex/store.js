import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    inspImg: "../assets/" + new Date().getDate() + ".jpg",
    messages: [],
    activeText: "",
    placeholder: "What's up, Sydney?"
}

const mutations = {
    ASK_QUESTION(state, e) {
        if (state.activeText !== "") {
            const newMessage = {
                message: state.activeText,
                origin: "sent"
            }

            state.messages.push(newMessage);
            state.activeText = "";
            state.placeholder = "Message";

            // TODO: Make call to chatbot endpoint here
            setTimeout(function () {
                state.messages.push({
                    message: "You are a wonderful person.",
                    origin: "rcvd"
                })
            }, 1000);
        }

        e.preventDefault();

    },
    UPDATE_ACTIVE_TEXT(state, text) {
        state.activeText = text;
    }
}

export default new Vuex.Store({
    state,
    mutations
})
