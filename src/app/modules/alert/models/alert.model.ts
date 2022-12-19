import { EAlert } from "../enums/alert.enum";

export class Alert {
  public type: EAlert = EAlert.error;
  public message: string = '';
  public autoClose: boolean = true;

  constructor(init?: Partial<Alert>) {
    Object.assign(this, init);
  }
}
