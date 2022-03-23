import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import LEVELS from '../../models/levels.enum';

const Taskform = ({ onAdd }) => {
  const TaskSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    description: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Required'),
  });
  return (
    <Formik
      initialValues={{
        name: '',
        description: '',
        level: LEVELS.NORMAL,
        done: false,
      }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          onAdd(values);
          actions.resetForm({});
          actions.setSubmitting(false);
        }, 500);
      }}
      validationSchema={TaskSchema}
    >
      {({ errors }) => (
        <Form>
          <Field name="name" placeholder="Task Name" />
          {errors && errors.name}
          <Field name="description" placeholder="Task Description" />
          {errors && errors.description}

          <Field as="select" name="level">
            <option value={LEVELS.NORMAL}>Normal</option>
            <option value={LEVELS.URGENT}>Urgent</option>
            <option value={LEVELS.BLOCKING}>Blocking</option>
          </Field>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default Taskform;
