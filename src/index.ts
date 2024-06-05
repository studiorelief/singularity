import './index.css';

import { buttonActive } from '$utils/tricks';

window.Webflow ||= [];
window.Webflow.push(() => {
  buttonActive();
});
