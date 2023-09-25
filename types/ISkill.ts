import { typeIcon } from './IIcon';

export interface ISkill {
  title: String;
  description: string[];
  icons: typeIcon[];
  urlSite?: string;
  urlCode?: string;
  imgUrl: string;
}
