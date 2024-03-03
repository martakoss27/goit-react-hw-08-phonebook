import { useDispatch, useSelector } from 'react-redux';

import { selectFilter } from './../../redux/reducers/contacts/selectors';
import { setFilterValue } from './../../redux/reducers/contacts/filterSlice';

import css from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilter = ev => {
    dispatch(setFilterValue(ev.target.value));
  };

  return (
    <div className={css.filter}>
      <label className={css.label}>
        Find contacts by name
        <input
          className={css.input}
          type="text"
          name="filter"
          value={filter}
          onChange={handleFilter}
        />
      </label>
    </div>
  );
}
