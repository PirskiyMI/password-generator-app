import cn from 'classnames';
import styles from './styles/styles.module.scss';
import { IError } from './types/types';


export const GeneratorError = ({ error }: IError) => {
   return <div className={cn(styles.form_subtitle, {[styles.form_subtitle__hidden]: !error}, styles.form_subtitle__error)}>{error}</div>;
};
