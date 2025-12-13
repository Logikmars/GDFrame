import { makeAutoObservable } from "mobx";

class languageStore {
  
  activeLanguage = 'ENG'

  constructor() {
    makeAutoObservable(this);
  }

  setActiveLanguage(lang){
    this.activeLanguage = lang
  }
}

export default new languageStore();