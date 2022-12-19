import { Validators } from '@angular/forms';

export const EMAIL_PATTERN = Validators.pattern(
  /^\w+([\.+-]?\w+){0,2}@\w+\.\w{2,3}$/
);