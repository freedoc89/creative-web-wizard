import data from "./formDialogContent.json";
import { LocalizedString } from "./localization";

export type FormMode = "consultation" | "quote_request";

export type FormField = {
  id: string;
  label: LocalizedString;
  type: string;
  placeholder: LocalizedString;
  errorMessage: LocalizedString;
};

export type FormDialogContent = {
  modes: Record<
    FormMode,
    {
      title: LocalizedString;
      description: LocalizedString;
      serviceLabel: LocalizedString;
    }
  >;
  fields: FormField[];
  submitButtonText: LocalizedString;
  declineButtonText: LocalizedString;
  toastNotificationContent: LocalizedString;
};

export const formDialogContent: FormDialogContent = {
  modes: data.modes,
  fields: data.fields,
  submitButtonText: data.submitButtonText,
  declineButtonText: data.declineButtonText,
  toastNotificationContent: data.toastNotificationContent
};
