import { useField } from 'formik'
import React from 'react'

function CustomInput({label,...props}) {
    const [field,meta]=useField(props)
    console.log(meta);
    console.log(field)
  return (
<>
<label>{label}</label>
<input {...field}{...props} className={meta.error&& meta.touched?'input-error':''}/>
{meta.error && meta.touched} <p className='error'>{meta.error}</p>
</>
  )
}

export default CustomInput