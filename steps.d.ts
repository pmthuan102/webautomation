/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type homePage = typeof import('./pages/home.js');
type companyPage = typeof import('./pages/company.js');
type Fragment = typeof import('./fragments/fragment.js');
type careerPage = typeof import('./pages/career.js');
type Webcommon = import('./webcommon_helper.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, homePage: homePage, companyPage: companyPage, Fragment: Fragment, careerPage: careerPage }
  interface Methods extends Puppeteer, Webcommon {}
  interface I extends ReturnType<steps_file>, WithTranslation<Webcommon> {}
  namespace Translation {
    interface Actions {}
  }
}
