import { useState } from 'react';
import { Field } from 'formik'
import cn from 'classnames';

import styles from './styles/styles.module.scss';

import { GeneratorOptionsProps } from './types/types';

import DONE from './../../assets/img/done-icon.svg';

export const GeneratorOptions = ({ name, labelText, status}: GeneratorOptionsProps) => {
   const [isActive, setActive] = useState(status);

   return (
      <label className={styles.form_checkbox}>
         <div className={cn(styles.form_check, { [styles.form_check__active]: isActive })}>
            <img src={DONE} alt=" " />
         </div>{' '}
         <Field name={name} type="checkbox" onClick={() => setActive(!isActive)} /> {labelText}{' '}
      </label>
   );
};
