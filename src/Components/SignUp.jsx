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
	NameBlock,
} from './Styles.js';

function SignUp() {
	const [password, setPassword] = useState(null);
	const [email, setEmail] = useState(null);
	const [firstName, setFirstName] = useState(null);
	const [lastName, setLastName] = useState(null);

	const [isPasswordCorrect, setIsPasswordCorrect] = useState(null);
	const [isEmailCorrect, setIsEmailCorrect] = useState(null);
	const [isLastNameCorrect, setIsLastNameCorrect] = useState(null);
	const [isFirstNameCorrect, setIsFirstNameCorrect] = useState(null);

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	const handleFirstNameChange = (event) => {
		setFirstName(event.target.value);
	};

	const handleLasttNameChange = (event) => {
		setLastName(event.target.value);
	};

	const history = useHistory();

	const handleSubmitChange = (event) => {
		event.preventDefault();
		if (isFirstNameCorrect && isLastNameCorrect && isEmailCorrect && isPasswordCorrect) {
			const user = {
				firstName: firstName,
				lastName: lastName,
				email: email,
				password: password,
			};
			localStorage.setItem('user', JSON.stringify(user));
			history.push('/login');
		}
	};

	useEffect(() => {
		if (firstName !== null) {
			const isValid = firstName.match(/^.{3,}$/) !== null;
			setIsFirstNameCorrect(isValid);
		}
		if (!firstName?.length) {
			setFirstName(null);
		}

		if (lastName !== null) {
			const isValid = lastName.match(/^.{3,}$/) !== null;
			setIsLastNameCorrect(isValid);
		}
		if (!lastName?.length) {
			setLastName(null);
		}
	}, [firstName, lastName]);

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

	return (
		<Wrapper>
			<FlexWrapper>
				<IconBlock>
					<Icon src="https://image.flaticon.com/icons/png/512/565/565547.png"></Icon>
				</IconBlock>
				<Header>
					<Title>Sign up</Title>
				</Header>
				<Form>
					<NameBlock>
						<Input
							isInitialFirstName={firstName === null}
							isFirstNameCorrect={isFirstNameCorrect}
							onChange={handleFirstNameChange}
							signupinput
							type="text"
							placeholder="First Name *"
						/>
						<Input
							isInitialLastName={lastName === null}
							isLastNameCorrect={isLastNameCorrect}
							onChange={handleLasttNameChange}
							type="text"
							placeholder="Last Name *"
						/>
					</NameBlock>
					<Input
						isInitialEmail={email === null}
						isEmailCorrect={isEmailCorrect}
						onChange={handleEmailChange}
						type="text"
						placeholder="Email Adress *"
					/>
					<Input
						onChange={handlePasswordChange}
						type="password"
						isInitialPassword={password === null}
						isPasswordCorrect={isPasswordCorrect}
						placeholder="Password *"
					/>
					<LabelForCheckbox signuplabel>
						<CheckBox type="checkbox" />I want to receive inspiration, marketing promotions and updates via email.
					</LabelForCheckbox>
					<Button onClick={handleSubmitChange} type="submit" value="Sign in">
						Sign up
					</Button>
					<HintsBlock signupblock>
						<Link style={{ textDecoration: 'none' }} to="/sign-in">
							<TextHint>Already have an account? Sign In</TextHint>
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

export default SignUp;
