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
            <div className="login-title">LOGIN</div>
            <CustomField name="password" type="text" placeholder="Password"/>
            <CustomField name="username" type="text" placeholder="Username"/>
            <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Loading' : 'Submit'}
            </button>
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
        props.login(values, setSubmitting)
    }
})(LoginForm);

export default connect(mapPropsToState, mapPropsToState)(FormikLoginForm);
