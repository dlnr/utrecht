import { NgModule } from '@angular/core';
import { BooleanValueAccessor } from './directives/boolean-value-accessor';
import { NumericValueAccessor } from './directives/number-value-accessor';
import {
  UtrechtArticle,
  UtrechtBadgeCounter,
  UtrechtBadgeData,
  UtrechtBadgeStatus,
  UtrechtBreadcrumb,
  UtrechtButton,
  UtrechtCheckbox,
  UtrechtContactCardTemplate,
  UtrechtCustomCheckbox,
  UtrechtDigidButton,
  UtrechtDigidLogo,
  UtrechtDocument,
  UtrechtEherkenningLogo,
  UtrechtEidasLogo,
  UtrechtFormFieldCheckbox,
  UtrechtFormFieldDescription,
  UtrechtFormFieldTextarea,
  UtrechtFormFieldTextbox,
  UtrechtFormToggle,
  UtrechtHeading,
  UtrechtHeading1,
  UtrechtHeading2,
  UtrechtHeading3,
  UtrechtHeading4,
  UtrechtHeading5,
  UtrechtHeading6,
  UtrechtHtmlContent,
  UtrechtIconArrow,
  UtrechtIconCheckmark,
  UtrechtIconCross,
  UtrechtIconError,
  UtrechtIconFacebook,
  UtrechtIconFilter,
  UtrechtIconInformation,
  UtrechtIconInstagram,
  UtrechtIconLinkedin,
  UtrechtIconList,
  UtrechtIconLoupe,
  UtrechtIconTwitter,
  UtrechtIconWarning,
  UtrechtIconWhatsapp,
  UtrechtIconZoomin,
  UtrechtIconZoomout,
  UtrechtLogo,
  UtrechtLogoButton,
  UtrechtPage,
  UtrechtPageContent,
  UtrechtPageFooter,
  UtrechtPagination,
  UtrechtParagraph,
  UtrechtSeparator,
  UtrechtSidenav,
  UtrechtTextbox,
} from './directives/proxies';
import { SelectValueAccessor } from './directives/select-value-accessor';
import { TextValueAccessor } from './directives/text-value-accessor';

// This array is maintained manually, unfortunately

const components = [
  UtrechtArticle,
  UtrechtBadgeCounter,
  UtrechtBadgeData,
  UtrechtBadgeStatus,
  UtrechtBreadcrumb,
  UtrechtButton,
  UtrechtCheckbox,
  UtrechtContactCardTemplate,
  UtrechtCustomCheckbox,
  UtrechtDigidButton,
  UtrechtDigidLogo,
  UtrechtDocument,
  UtrechtEherkenningLogo,
  UtrechtEidasLogo,
  UtrechtFormFieldCheckbox,
  UtrechtFormFieldDescription,
  UtrechtFormFieldTextarea,
  UtrechtFormFieldTextbox,
  UtrechtFormToggle,
  UtrechtHeading,
  UtrechtHeading1,
  UtrechtHeading2,
  UtrechtHeading3,
  UtrechtHeading4,
  UtrechtHeading5,
  UtrechtHeading6,
  UtrechtHtmlContent,
  UtrechtIconArrow,
  UtrechtIconCheckmark,
  UtrechtIconCross,
  UtrechtIconError,
  UtrechtIconFacebook,
  UtrechtIconFilter,
  UtrechtIconInformation,
  UtrechtIconInstagram,
  UtrechtIconLinkedin,
  UtrechtIconList,
  UtrechtIconLoupe,
  UtrechtIconTwitter,
  UtrechtIconWarning,
  UtrechtIconWhatsapp,
  UtrechtIconZoomin,
  UtrechtIconZoomout,
  UtrechtLogo,
  UtrechtLogoButton,
  UtrechtPage,
  UtrechtPageContent,
  UtrechtPageFooter,
  UtrechtPagination,
  UtrechtParagraph,
  UtrechtSeparator,
  UtrechtSidenav,
  UtrechtTextbox,
];

const valueAcessors = [BooleanValueAccessor, NumericValueAccessor, SelectValueAccessor, TextValueAccessor];

@NgModule({
  declarations: [...components, ...valueAcessors],
  exports: [...components, ...valueAcessors],
  imports: [],
  providers: [],
})
export class UtrechtWebComponentsModule {}
