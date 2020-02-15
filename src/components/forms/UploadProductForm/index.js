import React from 'react';
import * as Yup from 'yup';
import {Form, withFormik} from 'formik';
import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import CustomField from '../components/Field/Field';
import SelectableButtons from "../components/SelectableButtons";
import SelectDropDown from "../components/DropDown";
import MyDropzone from "../components/MyDropzone";
import { login } from '../../../store/actions/userActions';
import './index.scss';

const uploadCallback = (value) => {
    console.log(value, 'from external callback');
};

const validationSchema = Yup.object({
    password: Yup.string()
        .min(5, 'Minimum 5 chars')
        .max(10, 'Maximum 10 chars')
        .required('Required'),
    username: Yup.string()
        .min(5, 'Minimum 5 characters')
        .required('Required'),
});

const UploadForm = ({isSubmitting}) => {
    return (
        <Form>
            <div className="form-title">New Product 001</div>
            <div className="form-dropzone">
                <div className="form-dropzone-label">Load assets files</div>
                <MyDropzone callback={uploadCallback}/>
            </div>
            <div className="form-dropzone">
                <div className="form-dropzone-label">Load preview images</div>
                <MyDropzone />
            </div>
            <div className="form-sub-title">Details </div>
            <CustomField label="Title" name="title" type="text" />
            <CustomField label="Description" name="description" type="textarea" />
            <CustomField label="Tags" name="tags" type="text" />
            <div className="form-sub-title">Technical details</div>
            <SelectableButtons
                formValue="animation"
                multiple={true}
                elements={[
                    {name: 'Animated'},
                    {name: 'Rigged'},
                    {name: 'PBR'},
                ]}
            />
            <div className="form-sub--divider"> </div>
            <SelectDropDown
                label="Unwrapper UV's"
                fieldName="uvs"
                options={[
                    { name: 'Overlapping'},
                    { name: 'Unwrapped'},
                    { name: 'Custom'},
                ]}
            />
            <div className="form-sub-title">Category</div>
            <SelectableButtons
                formValue="category"
                elements={[
                    {name: 'Stylized'},
                    {name: 'Photoreal'},
                ]}
            />
            <CustomField name="testCheckbox" type="checkbox" checkboxLabel="test checkbox"/>
            <div className='submit-btn'>
                <button className="submit-btn--draft">Save Draft</button>
                <button className="submit-btn--preview">Preview</button>
                <button className='submit-btn--save' type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Loading' : 'Publish'}
                </button>
            </div>
        </Form>
    );
};

const mapPropsToState = dispatch => bindActionCreators({
    login
}, dispatch);

const FormikUploadForm = withFormik({
    mapPropsToValues: () => ({
        title: '',
        description: '',
        animation: [],
        category: '',
        uvs: ''
    }),
    validationSchema,
    handleSubmit: (values, { setSubmitting, props }) => {
        props.login(values, setSubmitting, props);
    }
})(UploadForm);

export default connect(mapPropsToState, mapPropsToState)(FormikUploadForm);
