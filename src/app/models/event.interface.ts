import { FormControl } from "@angular/forms";

export interface EventForm{
  created_by: string | null,
  name: string | null;
  phoneNumber: string | null;
  notification: number | null;
  timeZone: string | null;
  time: string;
  recepient: string | null;
}
