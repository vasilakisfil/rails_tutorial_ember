import ApplicationAdapter from './application';
import UrlTemplates from "ember-data-url-templates";

export default ApplicationAdapter.extend(UrlTemplates, {
  urlTemplate: '{+host}/{+namespace}/users/{user_id}/following',
});
