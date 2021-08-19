import { LoginBlock, LoginText, Button } from './Styles.js';
import { useHistory } from 'react-router-dom';

function Login() {
	const user = JSON.parse(localStorage.getItem('user'));
	const history = useHistory();
	const LogOut = () => {
		history.push('/sign-in');
	};
	return (
		<LoginBlock>
			<LoginText>
				Welcome,
				{user.firstName}
			</LoginText>
			<Button onClick={LogOut} logout>
				Log out
			</Button>
		</LoginBlock>
	);
}

export default Login;
