import { GeneratorOptions } from './GeneratorOptions';
import { fieldsArr } from './constants';
import styles from './styles/styles.module.scss';
import cn from 'classnames';

export const GeneratorParams = ({ values }: any) => {
   return (
      <div className={cn(styles.form_checkboxes)}>
         {fieldsArr.map((el) => (
            <GeneratorOptions
               key={el.id}
               name={el.name}
               labelText={el.labelText}
               status={values[el.name]}
            />
         ))}
      </div>
   );
};
