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

            // TODO: Make call to chatbot endpoint here
            let req = new XMLHttpRequest();
            // let url = "https://jsonplaceholder.typicode.com"
            let url = "http://localhost:8000/chat";

            req.open('POST', url);
            req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

            req.onload = function() {
                if (req.status == 200) {
                    state.messages.push({
                        message: req.response,
                        origin: "rcvd"
                    })
                }
                else {
                    state.messages.push({
                        message: "I'm sorry. I don't understand you.",
                        origin: "rcvd"
                    })
                }
            };

            req.send("input=" + state.activeText);

            state.activeText = "";
            state.placeholder = "Message";

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
