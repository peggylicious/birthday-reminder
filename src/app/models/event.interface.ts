import { FormControl } from "@angular/forms";

export interface EventForm{
  _id: string,
  created_by: string | null,
  name: string | null;
  phoneNumber: string | null;
  notification: number | null;
  timeZone: string | null;
  time: string;
  recepient: string | null;
}
