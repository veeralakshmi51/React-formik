import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.
const gs02applicationsendercodeRules=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
const gs02applicationreceivercodeRules=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
export const outSchema = yup.object().shape({
  name:yup.string().min(5,'It should contain minimum 5 characters').required("This field  is Required"),
  edicontactname:yup.string().min(10,'It must contains 10 letters' ).required("This filed is Required"),
  edicontactphone:yup.number().min(5).max(10).required("Required Field"),
  edicontacttax:yup.number().min(5).max(15).required("This Field is Required"),
  isa:yup.string().required("Please Select Field"),
  userid:yup.string().max(10,'It contains maximum 10 characters').required("Field is Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("This field is Required"),
    submitterid:yup.string().max(10,'It contains maximum 10 characters').required("Field is Required"),
    receiverid:yup.string().max(10,'It contains maximum 10 characters').required("Field is Required"),
    ackrequest:yup.string().required("Please Select Field"),
    usageindicator:yup.string().required("Please Select Field"),
    gs02applicationsendercode:yup.string().min(10).matches(gs02applicationsendercodeRules,{message:"Please provide correct GS02 application Sender Code"}).required("Field is Required"),
    gs02applicationreceivercode:yup.string().min(10).matches(gs02applicationreceivercodeRules,{message:'Please give a correct GS02Application Reciever code'}).required("This Field is Required"),
    loopsubmitter:yup.number.max(10).required('Loopsubmitter Id is Required'),
    useridweb:yup.string().max(10,'It contains maximum 10 characters').required("Field is Required"),
    submitteridweb:yup.string().max(10,'It contains maximum 10 characters').required("Field is Required"),
    receiveridweb:yup.string().max(10,'It contains maximum 10 characters').required("Field is Required"),
    passwordweb: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("This field is Required"),
    providenpi:yup.string().required("Field is Required")

  
});