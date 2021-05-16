import React from 'react';
import { Row, Button } from 'reactstrap';
import { Formik, Form } from 'formik';

const CustomForm = ({ children, handleSubmit, buttonText, values, schema }) => {
  return (
    <Formik
      initialValues={values}
      validationSchema={schema}
      onSubmit={(data, { setSubmitting }) => handleSubmit(data, setSubmitting)}
    >
      {({ isSubmitting }) => (
        <Form>
          <Row>
            {Array.isArray(children) ? children.map(child => child) : children}
          </Row>
          <Row className="justify-content-center mt-2">
            <Button color="primary" type="submit" style={{ minWidth: '200px' }}>
              {isSubmitting ? (
                <span>
                  <i className="fas fa-circle-o-notch fa-spin"></i> LOADING
                </span>
              ) : (
                `${buttonText || 'SAVE'}`
              )}
            </Button>
          </Row>
        </Form>
      )}
    </Formik>
  );
};

export default CustomForm;
