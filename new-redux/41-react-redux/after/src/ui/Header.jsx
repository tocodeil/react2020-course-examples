import { useSelector, useDispatch } from 'react-redux';
import { setUserName } from '../dl/slices/account';

export default function Header() {
  const username = useSelector(state => state.account.name);
  const dispatch = useDispatch();

  function handleChange(e) {
    dispatch(setUserName(e.target.value));
  }

  return (
    <div className="header">
      <label>Username
        <input type="text" value={username} onChange={handleChange} />
      </label>
    </div>
  );
}
