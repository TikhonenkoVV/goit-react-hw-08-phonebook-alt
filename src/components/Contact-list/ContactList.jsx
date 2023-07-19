import PropTypes from 'prop-types';
import {
    BtnDel,
    BtnEdit,
    BtnFavorite,
    ContactListHeader,
    ContactListHeaderBox,
    ContactListSection,
    ContactWrapper,
    FirstElement,
    Item,
    List,
    NameWrapper,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from 'store/selector';
import { Container } from 'components/App.styled';
import { useLocation } from 'react-router-dom';
import sprite from '../../img/icons.svg';
import { Svg } from 'components/icon/Icon';
import { useEffect } from 'react';
import {
    hendleDeleteContact,
    hendleFetchContact,
} from 'store/contacts/contactsOperations';
import avatar from '../../img/avatar-default.png';

export const ContactList = () => {
    const dispatch = useDispatch();
    const list = useSelector(selectFilteredContacts);

    useEffect(() => {
        dispatch(hendleFetchContact());
    }, [dispatch]);

    const delContact = id => dispatch(hendleDeleteContact(id));

    const location = useLocation();
    return (
        <ContactListSection>
            <Container>
                <ContactListHeader>
                    <ContactListHeaderBox>
                        <FirstElement>Name</FirstElement>
                        <p>Phone mumber</p>
                        <p>E-mail</p>
                    </ContactListHeaderBox>
                </ContactListHeader>
                <List>
                    {list.map(({ _id, name, phone, email, img }) => {
                        return (
                            <Item key={_id}>
                                <ContactWrapper>
                                    <NameWrapper>
                                        <img
                                            src={img === '' ? avatar : img}
                                            alt="avatar"
                                            width={30}
                                            height={30}
                                        />
                                        <p>{name}</p>
                                    </NameWrapper>
                                    <p>{phone}</p>
                                    <p>{email}</p>
                                </ContactWrapper>
                                <BtnEdit
                                    to={`contact/${_id}`}
                                    state={{ from: location }}
                                >
                                    <Svg
                                        w={20}
                                        h={20}
                                        use={`${sprite}#icon-pencil`}
                                    />
                                </BtnEdit>
                                <BtnDel
                                    type="button"
                                    onClick={() => delContact(_id)}
                                >
                                    <Svg
                                        w={20}
                                        h={20}
                                        use={`${sprite}#icon-del-contact`}
                                    />
                                </BtnDel>
                                <BtnFavorite type="button" onClick={() => {}}>
                                    <Svg
                                        w={20}
                                        h={20}
                                        use={`${sprite}#icon-favorite`}
                                    />
                                </BtnFavorite>
                            </Item>
                        );
                    })}
                </List>
            </Container>
        </ContactListSection>
    );
};

ContactList.propTypes = {
    list: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            phone: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
        })
    ),
};
