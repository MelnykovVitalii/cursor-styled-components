import './App.css';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

const AppWrapper = styled.div`
	min-height: 100vh;
	background: #000;
	display: flex;
	width: 100%;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

function App() {
	const remember = JSON.parse(localStorage.getItem('remember'));
	console.log(remember);
	return (
		<AppWrapper>
			<Router basename="/cursor-styled-components">
				<Switch>
					<Route exact path="/cursor-styled-components">
						{remember ? <Redirect to="/login" /> : <Redirect to="/sign-in" />}
					</Route>
					<Route path="/sign-up" component={SignUp} />
					<Route path="/sign-in" component={SignIn} />
					<Route path="/login" component={Login} />
				</Switch>
			</Router>

			{/* <SignUp /> */}
		</AppWrapper>
	);
}

export default App;
