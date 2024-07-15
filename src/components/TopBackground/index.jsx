import UsersImage from '../../assets/users.png';
import { Background } from './style';

function TopBackground() {
  return (
    <Background>
      <img src={UsersImage} alt="users image" />
    </Background>
  );
}

export default TopBackground;
