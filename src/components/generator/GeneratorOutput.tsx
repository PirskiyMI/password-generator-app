import { useState } from 'react';
import { GeneratorOutputProps } from './types/types';
import { copyPassword } from './functions/copyPassword';

import styles from './styles/styles.module.scss';
import cn from 'classnames';
import { Field } from 'formik';

export const GeneratorOutput = ({ value }: GeneratorOutputProps) => {
   const [passwordCopy, setPasswordCopy] = useState(false);
   return (
      <div className={styles.form_output}>
         <Field
            name="password"
            className={styles.form_field}
            value={value}
            readOnly
            onClick={(e: any) => {
               if (e.target.value.length > 0) {
                  copyPassword(e.target.value);
                  setPasswordCopy(true);
                  setTimeout(() => setPasswordCopy(false), 2000);
               }
            }}
         />
         <div
            className={cn(
               styles.form_subtitle,
               {
                  [styles.form_subtitle__hidden]: !passwordCopy,
               },
               styles.form_subtitle__success,
            )}>
            Пароль скопирован в буфер обмена
         </div>
      </div>
   );
};
