import React from 'react';
import * as Yup from 'yup';
import {Form, withFormik} from 'formik';
import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import CustomField from '../components/Field/Field';
import {registration} from '../../../store/actions/userActions';
import "../index.scss";
import "./index.scss";

const validationSchema = Yup.object({
    firstName: Yup.string()
        .min(5, 'Minimum 5 chars')
        .max(10, 'Maximum 10 chars')
        .required('Required'),
    lastName: Yup.string()
        .min(5, 'Minimum 5 characters')
        .required('Required'),
    userPolicy: Yup.bool().oneOf([true], 'Field must be checked'),
});

const RegistrationForm = ({isSubmitting, errors}) => {
    return (
        <Form>
           <div className='form-title-box'>
              <div className='form-title-line'> </div>
               <div className="form-title">Registration</div>
              <div className='form-title-line'> </div>
           </div>
            <CustomField name="firstName" type="text" placeholder="First Name"/>
            <CustomField name="lastName" type="text" placeholder="Last Name"/>
            <CustomField name="email" type="text" placeholder="Email"/>
            <CustomField name="password" type="text" placeholder="Password"/>
            <CustomField name="confirmPassword" type="text" placeholder="Confirm Password"/>
            <CustomField name="userPolicy" type="checkbox" checkboxLabel="User Policy" />
            {/* {errors && errors.serverError && ( */}
            {/*    <div>{errors.serverError}</div> */}
            {/* )} */}
           <div className='wrap'>
              <button className='wrap-btn' type="submit" disabled={isSubmitting}>
                 {isSubmitting ? 'Loading' : 'Sign in'}
              </button>
           </div>
        </Form>
    );
};

const mapPropsToState = dispatch => bindActionCreators({
    registration
}, dispatch);

const FormikRegistrationForm = withFormik({
    mapPropsToValues: () => ({
        firstName: 'Merry',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        userPolicy: true
    }),
    validationSchema,
    handleSubmit: (values, { setErrors, setSubmitting, props }) => {
        props.registration(values, setSubmitting, setErrors, props);
    }
})(RegistrationForm);

export default connect(null, mapPropsToState)(FormikRegistrationForm);
