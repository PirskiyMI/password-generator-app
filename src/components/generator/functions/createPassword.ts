import { IValues } from '../types/types';
import { letterArr, symbolArr } from '../constants';

export const createPassword = (obj: IValues, setPassword: (value: string) => void) => {
   let passwordLength = obj.characters;
   let res = '';
   while (passwordLength > 0) {
      if (passwordLength > 0 && obj.isLowercase) {
         res += letterArr[Math.floor(Math.random() * 26)];
         passwordLength -= 1;
      }
      if (passwordLength > 0 && obj.isUppercase) {
         res += letterArr[Math.floor(Math.random() * 26)].toUpperCase();
         passwordLength -= 1;
      }
      if (passwordLength > 0 && obj.isNumbers) {
         res += Math.floor(Math.random() * 10);
         passwordLength -= 1;
      }
      if (passwordLength > 0 && obj.isSymbols) {
         res += symbolArr[Math.floor(Math.random() * 26)];
         passwordLength -= 1;
      }
   }
   setPassword(res);
};
