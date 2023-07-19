import {
    FormikForm,
    SubmitButton,
    PhotoLabel,
    BtnClose,
    IconEdit,
} from './ContactForm.styled';
import { Formik } from 'formik';
import { validationSchema } from 'services/validate-schema';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { selectContacts } from 'store/selector';
import sprite from '../../img/icons.svg';
import { Svg } from 'components/icon/Icon';
import defaultPhoto from '../../img/avatar-default.png';
import { FormItem } from 'components/FormItem/FormItem';
import { useNavigate } from 'react-router-dom';
import { hendleAddContact } from 'store/contacts/contactsOperations';

export const ContactForm = () => {
    const contacts = useSelector(selectContacts);
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const hendleSetState = values => {
        dispatch(hendleAddContact(values));
    };

    return (
        <Formik
            validationSchema={validationSchema}
            initialValues={{
                name: '',
                surname: '',
                phone: '',
                email: '',
                img: '',
            }}
            onSubmit={(values, { resetForm }) => {
                const isNameExist = contacts.find(
                    val => val.name.toLowerCase() === values.name.toLowerCase()
                );
                const isNumberExist = contacts.find(
                    val => val.phone === values.phone
                );
                if (isNameExist) {
                    toast(`${values.name} is already in contacts.`);
                    return;
                }
                if (isNumberExist) {
                    toast(
                        `${values.phone} is already in contacts as ${isNumberExist.name}.`
                    );
                    return;
                }
                hendleSetState(values);
                resetForm();
                navigate('/');
            }}
        >
            {({ handleSubmit, handleChange }) => {
                return (
                    <>
                        <FormikForm onSubmit={handleSubmit}>
                            <BtnClose to={'/'}>
                                <Svg
                                    w={20}
                                    h={20}
                                    use={`${sprite}#icon-close`}
                                />
                            </BtnClose>
                            <PhotoLabel htmlFor={'img'} file={defaultPhoto}>
                                <IconEdit>
                                    <Svg
                                        w={20}
                                        h={20}
                                        use={`${sprite}#icon-pencil`}
                                    />
                                </IconEdit>
                            </PhotoLabel>
                            <FormItem
                                type="text"
                                name="name"
                                use="contact"
                                onChange={handleChange}
                            />
                            <FormItem
                                type="text"
                                name="surname"
                                use="contact"
                                onChange={handleChange}
                            />
                            <FormItem
                                type="tel"
                                name="phone"
                                use="phone"
                                onChange={handleChange}
                            />
                            <FormItem
                                type="email"
                                name="email"
                                use="email"
                                onChange={handleChange}
                            />
                            <SubmitButton type="submit">
                                <Svg
                                    w={20}
                                    h={20}
                                    use={`${sprite}#icon-save-contact`}
                                />
                                Add contact
                            </SubmitButton>
                        </FormikForm>
                    </>
                );
            }}
        </Formik>
    );
};
