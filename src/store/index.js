import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import {Virus, viruses} from '../model'

export default new Vuex.Store({
  state: () => ({
    collec : viruses,
    basket: [],
    samples: [],
    parts: [],
    newViruses: [],
    articles: [],
  }),
  mutations: {
    sendToLibrary(state, virus) {
      state.collec.push(virus);
    },
    sendToBasket(state, index) {
      // remove index from article
      for(let i=0; i<state.articles.length; i++){
        if(state.articles[i] === index){
          state.articles.splice(i,1)
        }
      }
      //add index in basket
      state.basket.push(index);
      //sort basket
      state.basket.sort()
    },
    removeFromBasket(state, index) {
      let idx = state.basket.findIndex(i => i === index)
      state.articles.push(index)
      state.articles.sort()
      state.basket.splice(idx,1) 
    },
    emptyAllBasket(state) {
      for(let i=0; i<state.basket.length; i++){
        state.articles.push(state.basket[i])
      }
      state.articles.sort()
      state.basket.splice(0,state.basket.length) 
    },
    sendBasketToLab(state) {
      state.basket.forEach(v => state.samples.push(new Virus(state.collec[v]._id, state.collec[v].name, state.collec[v].code)))
      state.basket.splice(0,state.basket.length)
    },
    sendNewVirusToLab(state, index) {
      state.samples.push(state.newViruses[index])
      state.newViruses.splice(index,1)
    },
    sendNewVirusToLibrary(state, index) {
      state.collec.push(state.newViruses[index])
      state.newViruses.splice(index,1)
    },
    removeNewVirus(state, index) {
      state.newViruses.splice(index,1)
    },
    clearParts(state) {
      state.parts.splice(0,state.parts.length)
    },
    mutate(state, params) {
      let letters = ['A','B','C','D']
      let idx = params.index
      let virus = state.samples[idx];
      let newCode = virus.code;
      for (let i = 0; i < params.nb; i++) {
        let idx = Math.floor(Math.random() * virus.code.length);
        let chr = letters[Math.floor(Math.random() * 4)]
        /* alternate code: use tricks with ascii code function

           let chr = String.fromCharCode(Math.floor(Math.random() * 4) + "A".charCodeAt(0));
         */
        newCode = newCode.substring(0, idx) + chr + newCode.substring(idx + 1);
      }
      virus.code = newCode;
      virus.updateCaracs();
    },
    cut(state, params) {
      let idx = params.index
      let virus = state.samples[idx];
      for (let i = 0; i < virus.code.length; i += params.size) {
        let v = new Virus(virus._id + 1000 + i, virus.name + "part" + i, virus.code.substring(i, i + params.size));
        state.parts.push(v)
      }
      // remove sample
      state.samples.splice(idx, 1)
    },
    assemble(state, params) {
      let code = ""
      params.forEach(idx => {
        code += state.parts[idx].code;
      })
      // create a new virus with an id/name created from the first part
      let v = new Virus(state.parts[0]._id + 2000, state.parts[0].name + "v" + state.parts.length, code);
      state.newViruses.push(v);
      params.sort((a, b) => b - a);
      params.forEach(idx => state.parts.splice(idx, 1))
    },
    initStock(state) {
      if(state.articles.length === 0){
        for(let i = 0; i<state.collec.length; i++){
          state.articles.push(i)
        }
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
