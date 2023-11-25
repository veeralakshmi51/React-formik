import React from 'react';
import { Form,Formik } from 'formik';
import CustomInput from './CustomInput';
import { advancedSchema } from '../schemas';
import CustomCorrect from './CustomCorrect';
const onSubmit= async (values,actions)=>{
  await new Promise((resolve)=>setTimeout(resolve,1000));
  actions.resetForm();
  console.log(values);
  }
const BasicExample = () => (
  <div>
    <h1>My Form</h1>
    <Formik
      initialValues={{ 
        username: '',
        // staffname:'',
        acceptedTos:false
      }}//here i am passing name props
      validationSchema={advancedSchema}
      onSubmit={onSubmit}
    >
      {({isSubmitting}) => (
<Form >
  <CustomInput label='Username' type='text' name='username' placeholder='Enter UserName' id='username'
  />
  
  <CustomCorrect type='checkbox' name='acceptedTos'/>
 <button disabled={isSubmitting} type="submit" >Submit</button>
</Form>     
 )}
    </Formik>
  </div>
);
export default BasicExample

//Using Formik component for managing for state