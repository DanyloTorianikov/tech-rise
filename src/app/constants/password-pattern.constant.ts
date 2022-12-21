import { Validators } from "@angular/forms";

export const PASSWORD_PATTERN = Validators.pattern(
  /^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{8,}$/
);