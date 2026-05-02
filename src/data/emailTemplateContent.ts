import data from "./emailTemplateContent.json";
import { LocalizedString } from "./localization";
import { FormMode } from "./formDialogContent";

export type EmailTemplateContent = {
  admin: {
    subjects: Record<FormMode, LocalizedString>;
    labels: Record<string, LocalizedString>;
  };
  user: {
    subjects: Record<FormMode, LocalizedString>;
    titles: Record<FormMode, LocalizedString>;
    messages: Record<FormMode, LocalizedString>;
    packageSection: {
      title: LocalizedString;
      priceLabel: LocalizedString;
    };
    footer: LocalizedString;
  };
};

export const emailContent = data as EmailTemplateContent;
