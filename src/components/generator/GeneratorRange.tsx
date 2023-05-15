import styles from './styles/styles.module.scss';
import { GeneratorRangeProps } from './types/types';
import { Field } from 'formik';

export const GeneratorRange = ({ characters }: GeneratorRangeProps) => {
   return (
      <div className={styles.form_range}>
         <div className={styles.form_characters}>
            {' '}
            <span>Длинна пароля:</span> <span>{characters}</span>{' '}
         </div>
         <Field name="characters" type="range" min={0} max={20} step={1} />
      </div>
   );
};
