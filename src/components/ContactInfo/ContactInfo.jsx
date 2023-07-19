import {
    BtnGoBack,
    ContactCard,
    ContactTitle,
    Details,
    DetailsItem,
    DetailsTitle,
    DetailsWrapper,
    Photo,
    PhotoWrapper,
} from './ContactInfo.styled';
import { useParams } from 'react-router-dom';
import { Svg } from 'components/icon/Icon';
import sprite from '../../img/icons.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { hendleFetchContactById } from 'store/contacts/contactsOperations';
import { selectContact } from 'store/selector';
// import { selectRefreshToken } from 'store/selector';
// import axios from 'axios';
import defaultPhoto from '../../img/avatar-default.png';

export const ContactInfo = () => {
    const dispatch = useDispatch();
    const { contactId } = useParams();
    const { name, phone, email, img } = useSelector(selectContact);

    useEffect(() => {
        dispatch(hendleFetchContactById(contactId));
    }, [dispatch, contactId]);

    const tel = `tel:${phone}`;

    //
    // const persistToken = useSelector(selectRefreshToken);

    // const RefreshToken = async () => {
    //     try {
    //         const data = await axios.post('/users/refresh', {
    //             refreshToken: persistToken,
    //         });
    //         console.log('data', data);
    //         return data;
    //     } catch (err) {
    //         return err.response.statusText;
    //     }
    // };

    //

    return (
        <ContactCard>
            <PhotoWrapper>
                <BtnGoBack to={'/'}>
                    <Svg w={20} h={20} use={`${sprite}#icon-arrow-left`} />
                </BtnGoBack>
                {/* <button onClick={RefreshToken} style={{ marginLeft: '300px' }}>
                    тест
                </button> */}
                <Photo src={img === '' ? defaultPhoto : img} alt="" />
            </PhotoWrapper>
            <ContactTitle>{name}</ContactTitle>
            <DetailsWrapper>
                <DetailsTitle>Contact info</DetailsTitle>
                <Details>
                    <DetailsItem>
                        <p>Phone:</p>
                        <a href={tel}>{phone}</a>
                    </DetailsItem>
                    <DetailsItem>
                        <p>E-mail: {email}</p>
                    </DetailsItem>
                </Details>
            </DetailsWrapper>
        </ContactCard>
    );
};
