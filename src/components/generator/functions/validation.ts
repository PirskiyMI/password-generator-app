import { IError, IValues } from '../types/types';

export const validation = (values: IValues) => {
   const errors: IError = {};
   if (Object.values(values).filter((el) => el == false).length >= 5) {
      errors.error = 'Пожалуйста, выберете длинну пароля и используемые символы';
   }
   if (values.characters === 0) {
      errors.error = 'Пожалуйста, выберете длинну пароля и используемые символы';
   }
   return errors;
};
