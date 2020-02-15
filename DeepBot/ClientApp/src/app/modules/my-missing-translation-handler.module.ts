import { MissingTranslationHandler, MissingTranslationHandlerParams } from '@ngx-translate/core';

export class MyMissingTranslationHandler implements MissingTranslationHandler {
  handle(params: MissingTranslationHandlerParams) {
    console.log(params);
    return '## WARNING ## The phrase for the key \'' + params.key + '\' has not been translated into your language. ' +params.translateService.defaultLang + ' ## WARNING ##';
  }
}
