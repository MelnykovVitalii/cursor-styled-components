import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
	Wrapper,
	FlexWrapper,
	IconBlock,
	Icon,
	Header,
	Title,
	Form,
	Input,
	LabelForCheckbox,
	CheckBox,
	Button,
	HintsBlock,
	TextHint,
	Footer,
	TextFooter,
} from './Styles.js';

function SignIn() {
	const [password, setPassword] = useState(null);
	const [email, setEmail] = useState(null);
	const [isPasswordCorrect, setIsPasswordCorrect] = useState(null);
	const [isEmailCorrect, setIsEmailCorrect] = useState(null);
	const [rememberMe, setRememberMe] = useState(false);

	const storage = JSON.parse(localStorage.getItem('user'));
	const history = useHistory();

	const handleSignIn = () => {
		if (storage.email === email && storage.password === password) {
			console.log('signin');
			localStorage.setItem('remember', rememberMe);
			history.push('/login');
		}
	};

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	const handleCheckboxChange = (event) => {
		setRememberMe(event.target.checked);
	};

	useEffect(() => {
		if (password !== null) {
			const isValid = password.match(/^(?=.*?[A-Z])(?=.*?[a-z]).{8,}$/) !== null;
			setIsPasswordCorrect(isValid);
		}
		if (!password?.length) {
			setPassword(null);
		}

		if (email !== null) {
			const isValid = email.match(/^\S{3,}@\S{2,}\.\D{2,}$/) !== null;
			setIsEmailCorrect(isValid);
		}
		if (!email?.length) {
			setEmail(null);
		}
	}, [password, email]);

	useEffect(() => {
		const remember = JSON.parse(localStorage.getItem('remember'));
		if (remember && storage?.email && storage?.password) {
			setEmail(storage.email);
			setPassword(storage.password);
			setRememberMe(remember);
		}
	}, []);

	return (
		<Wrapper>
			<FlexWrapper>
				<IconBlock>
					<Icon src="https://image.flaticon.com/icons/png/512/565/565547.png"></Icon>
				</IconBlock>
				<Header>
					<Title>Sign in</Title>
				</Header>
				<Form>
					<Input
						isInitialEmail={email === null}
						isEmailCorrect={isEmailCorrect}
						onChange={handleEmailChange}
						type="text"
						placeholder="Email Adress *"
						value={email ?? ''}
					/>
					<Input
						onChange={handlePasswordChange}
						type="password"
						isInitialPassword={password === null}
						isPasswordCorrect={isPasswordCorrect}
						placeholder="Password *"
						value={password ?? ''}
					/>
					<LabelForCheckbox>
						<CheckBox onChange={handleCheckboxChange} type="checkbox" checked={rememberMe} />
						Remember me
					</LabelForCheckbox>
					<Button onClick={handleSignIn} type="submit" value="Sign in">
						Sign in
					</Button>
					<HintsBlock>
						<TextHint>Forgot password?</TextHint>
						<Link style={{ textDecoration: 'none' }} to="/sign-up">
							<TextHint>Don't have an account? Sign Up</TextHint>
						</Link>
					</HintsBlock>
					<Footer>
						<TextFooter>Copyright © Your Website 2021.</TextFooter>
					</Footer>
				</Form>
			</FlexWrapper>
		</Wrapper>
	);
}

export default SignIn;
