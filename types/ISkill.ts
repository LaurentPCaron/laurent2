import { typeIcon } from './IIcon';

export interface ISkill {
  title: String;
  description: String;
  icons: typeIcon[];
  urlSite?: String;
  urlCode?: String;
  imgUrl: string;
}
