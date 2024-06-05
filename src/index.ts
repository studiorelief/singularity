import './index.css';

import { buttonActive, controlsActive } from '$utils/tricks';

window.Webflow ||= [];
window.Webflow.push(() => {
  buttonActive();
  controlsActive();
});
