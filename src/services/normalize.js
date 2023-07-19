export const normalizeContact = ({
    _id,
    name,
    surname,
    phone,
    email,
    img,
    favorite,
}) => {
    if (surname !== '') name = `${name} ${surname}`;
    return { _id, name, phone, email, img, favorite };
};
