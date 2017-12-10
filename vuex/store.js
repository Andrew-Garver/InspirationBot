import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    inspImg: "../assets/" + new Date().getDate() + ".jpg"
    // notes: [],
    // activeNote: {}
}

const mutations = {
    ASK_QUESTION(state) {
        // let url = "https://www.cleverbot.com/getreply";
        // let key = "CC5ryIKC50H5u8qWzvf7myIGsKw";
        // let input = encodeURIComponent ("How are you?");

        // function ProcessReply (data) {
        //     if (data.error) console.log ('Error: ' + data.error);
        //     else alert ('Reply: ' + data.output);
        // }

        // script_element = document.createElement('script'); //create new script element
        // script_element.src = url + "?input=" + input + '&key=' + key + '&callback=ProcessReply';
        // document.getElementsByTagName ('head')[0].appendChild(script_element); //append to page, which executes it
    }
    //
    // ADD_NOTE (state) {
    //   const newNote = {
    //     text: 'New note',
    //     favorite: false
    //   }
    //   state.notes.push(newNote)
    //   state.activeNote = newNote
    // },
    //
    // EDIT_NOTE (state, text) {
    //   state.activeNote.text = text
    // },
    //
    // DELETE_NOTE (state) {
    //   state.notes.$remove(state.activeNote)
    //   state.activeNote = state.notes[0]
    // },
    //
    // TOGGLE_FAVORITE (state) {
    //   state.activeNote.favorite = !state.activeNote.favorite
    // },
    //
    // SET_ACTIVE_NOTE (state, note) {
    //   state.activeNote = note
    // }
}

export default new Vuex.Store({
    state,
    mutations
})
