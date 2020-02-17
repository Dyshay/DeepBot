import { Icon } from '@visurel/iconify-angular';

export interface Link {
  label: string;
  route: string | string[];
  disabled?: boolean;
  icon?: Icon;
}
