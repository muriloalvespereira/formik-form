import * as Yup from 'yup';

export default Yup.object().shape({
    name: Yup.string().min(4, "At Least 4 characters").max(8, "Maximum 8 characters").required(),
    surname: Yup.string().min(2).required(),
    email: Yup.string().email().required()
})

