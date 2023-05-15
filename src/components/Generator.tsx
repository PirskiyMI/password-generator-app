import { useState } from 'react';

import styles from './generator/styles/styles.module.scss';

import { Form, Formik } from 'formik';
import { validation } from './generator/functions/validation';
import { createPassword } from './generator/functions/createPassword';
import { GeneratorButton } from './generator/GeneratorButton';
import { GeneratorError } from './generator/GeneratorError';
import { GeneratorParams } from './generator/GeneratorParams';
import { GeneratorRange } from './generator/GeneratorRange';
import { GeneratorOutput } from './generator/GeneratorOutput';

export const Generator = () => {
   const [password, setPassword] = useState('');

   return (
      <Formik
         initialValues={{
            characters: 0,
            isUppercase: false,
            isLowercase: false,
            isNumbers: true,
            isSymbols: false,
            error: '',
         }}
         validate={validation}
         onSubmit={(values) => createPassword(values, setPassword)}>
         {({ errors, values }) => (
            <Form className={styles.form}>
               <div className={styles.from_top}>
                  <GeneratorOutput value={password} />
               </div>
               <div className={styles.form_bottom}>
                  <GeneratorRange characters={values.characters} />
                  <GeneratorParams values={values} />
                  <GeneratorError error={errors.error} />
                  <GeneratorButton />
               </div>
            </Form>
         )}
      </Formik>
   );
};
