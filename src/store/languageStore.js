import { makeAutoObservable } from "mobx";
import i18n from "../i18n";

class LanguageStore {
  activeLanguage = 'ENG';

  constructor() {
    makeAutoObservable(this);
  }

  setActiveLanguage(lang) {
    this.activeLanguage = lang;
    i18n.changeLanguage(lang);
  }
}

export default new LanguageStore();
