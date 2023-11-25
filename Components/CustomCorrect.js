import { useField } from 'formik'
import React from 'react'

function CustomCorrect({...props}) {
    const [field,meta]=useField(props)  
    return (
<>
<div className="checkbox">
<input {...field}{...props} className={meta.error && meta.touched?'input-error':''}/>
<span>I accept the terms and conditions</span>
</div>
{meta.error && meta.touched}<p className='error'>{meta.error}</p>

</>  
)
}

export default CustomCorrect