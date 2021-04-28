import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.scss';
import { contactsSls, contactsActs } from '../../redux/contacts';

export default function Filter() {
    const dispatch = useDispatch();

    const value = useSelector(contactsSls.getFilter);

    return (
        <input
            type="text"
            name="filter"
            value={value}
            onChange={e => dispatch(contactsActs.changeFilter(e.target.value))}
            placeholder="Поиск..."
            className={css.input}
            autoComplete="off"
        />
    );
}
