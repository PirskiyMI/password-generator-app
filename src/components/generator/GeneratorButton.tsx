import styles from './styles/styles.module.scss';

export const GeneratorButton = () => {
   return (
      <button className={styles.form_button} type="submit">
         Сгенерировать пароль
      </button>
   );
};
