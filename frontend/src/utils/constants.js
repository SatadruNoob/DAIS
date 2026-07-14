export const API_BASE = import.meta.env.VITE_API_BASE || "/api";

export const AUTH_USER = "dais_user";
export const AUTH_TOKEN = "dais_authToken";
export const AUTH_TIMESTAMP = "dais_authTimestamp";
export const COMPLETE_QUESTIONNAIRE = "dais_completed_questionnaire";
export const SEEN_DOC_PIN_ALERT = "dais_pinned_document_alert";

export const USER_BACKGROUND_COLOR = "bg-historical-msg-user";
export const AI_BACKGROUND_COLOR = "bg-historical-msg-system";

export function fullApiUrl() {
  if (API_BASE !== "/api") return API_BASE;
  return `${window.location.origin}/api`;
}
