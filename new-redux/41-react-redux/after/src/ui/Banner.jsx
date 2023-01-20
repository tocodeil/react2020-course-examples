import { useSelector } from 'react-redux';

export default function Banner() {
  const user = useSelector(state => state.account.name);
  const roomId = useSelector(state => state.rooms.activeRoomId);

  return (
    <p>Hello {user}. You are now in room id {roomId}</p>
  );
}

