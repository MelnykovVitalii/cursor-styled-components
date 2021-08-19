import styled from 'styled-components';

export const Wrapper = styled.div`
	max-width: 420px;
	width: 100%;
	background-color: #000;
	margin: 0 auto;
	padding: 5px;
	box-sizing: border-box;
`;

export const FlexWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	align-items: center;
`;

export const IconBlock = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 32px;
	height: 32px;
	background-color: #f48fb2;
	border-radius: 50%;
	margin-top: 42px;
`;

export const Icon = styled.img`
	height: 16px;
	width: 16px;
`;

export const Header = styled.div``;

export const Title = styled.p`
	color: #fff;
	font-family: 'Roboto', sans-serif;
	margin: 0px;
	font-size: 20px;
	margin: 10px 0px;
`;

export const Form = styled.form`
	max-width: 320px;
	width: 100%;
	display: flex;
	flex-direction: column;
	margin: 0 auto;
`;

export const Input = styled.input`
	width: 100%;
	padding: 15px 10px;
	border: 1px solid
		${(props) => {
			// console.log(props);
			if (props.isInitialPassword || props.isInitialEmail || props.isInitialFirstName || props.isInitialLastName) {
				// console.log('hear');
				return '#424242';
			}
			if (props.isPasswordCorrect || props.isEmailCorrect || props.isFirstNameCorrect || props.isLastNameCorrect) {
				return 'green';
			}
			return 'red';
		}};
	color: #9e9e9e;
	background-color: #000;
	border-radius: 3px;
	outline: 0;
	margin: 9px 0px;
	box-sizing: border-box;
	margin-right: ${(props) => (props.signupinput ? '10px' : '0px')};
`;

export const CheckBox = styled.input`
	margin-right: 10px;
`;

export const LabelForCheckbox = styled.label`
	font-family: 'Roboto', sans-serif;
	display: flex;
	align-items: center;
	font-size: 12px;
	color: #eeeeee;
	line-height: ${(props) => (props.signuplabel ? '1.5' : '1')};
	letter-spacing: ${(props) => (props.signuplabel ? '2px' : '0px')};
`;

export const Button = styled.button`
	width: 100%;
	height: 100%;
	background-color: ${(props) => (props.logout ? '#000' : '#90caf9')};
	color: ${(props) => (props.logout ? '#fff' : '#000')};
	text-transform: uppercase;
	outline: none;
	border: none;
	font-family: 'Roboto', sans-serif;
	font-weight: 700;
	padding: 8px 0px;
	border-radius: 3px;
	font-size: 12px;
	margin: 20px 0px;
	border: ${(props) => (props.logout ? '1px solid #fff' : 'none')}; ;
`;

export const HintsBlock = styled.div`
	display: flex;
	align-items: baseline;
	justify-content: ${(props) => (props.signupblock ? 'flex-end' : 'space-between')};
`;

export const TextHint = styled.span`
	color: #90caf9;
	font-family: 'Roboto', sans-serif;
	font-size: 11px;
`;

export const Footer = styled.div`
	text-align: center;
	font-family: 'Roboto', sans-serif;
	font-size: 12px;
	padding: 42px 0px;
`;
export const TextFooter = styled.span`
	color: #9e9e9e;
`;

export const NameBlock = styled.div`
	display: flex;
`;

export const LoginBlock = styled.div`
	padding: 20px;
	text-align: center;
	font-size: 30px;
	font-family: 'Roboto', sans-serif;
`;

export const LoginText = styled.span`
	color: #fff;
`;
