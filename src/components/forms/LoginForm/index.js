import React from 'react';
import * as Yup from 'yup';
import {Form, withFormik} from 'formik';
import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import CustomField from '../Field';
import {login} from '../../../store/actions/userActions';
import "./index.scss";

const validationSchema = Yup.object({
    password: Yup.string()
        .min(5, 'Minimum 5 chars')
        .max(10, 'Maximum 10 chars')
        .required('Required'),
    username: Yup.string()
        .min(5, 'Minimum 5 characters')
        .required('Required'),
});

const LoginForm = ({isSubmitting}) => {
    return (
       <Form>
          <div className='login-box'>
             <div className="login-title">LOGIN</div>
          </div>
          <CustomField name="password" type="text" placeholder="Password"/>
          <CustomField name="username" type="text" placeholder="Username"/>
          <span className='lost-pass'>Lost your Password?</span>
          <div className='wrap'>
             <button className='wrap-btn' type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Loading' : 'Sign in'}
             </button>
          </div>
         <div className='holder'>
            <div className='holder-line'> </div>
            <div className='text'>Dont have an account? <span className='text-color'>Sign up here!</span></div>
         </div>
       </Form>
    );
};

const mapPropsToState = dispatch => bindActionCreators({
    login
}, dispatch);

const FormikLoginForm = withFormik({
    mapPropsToValues: () => ({ username: '', password: '' }),
    validationSchema,
    handleSubmit: (values, { setSubmitting, props }) => {
        props.login(values, setSubmitting, props);
    }
})(LoginForm);

export default connect(mapPropsToState, mapPropsToState)(FormikLoginForm);
