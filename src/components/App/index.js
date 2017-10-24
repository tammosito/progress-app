import React from "react";
import "typeface-roboto";
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import Activities from "../Activities";
import AddActivity from "../AddActivity";
import styled from "styled-components";
import * as actions from "../../actions";
import { connect } from "react-redux";

const styles = theme => ({
	flex: {
		flex: 1
	}
});

const PageWrapper = styled.div`
	flex: 1;
	background-color: #4eb0f6;
	background-image: linear-gradient(200deg, #2e83d7, #4eb0f6 75vw);
	color: #fff;
	transition: background-color 0.2s;
`;

const TransparentAppBar = styled(AppBar)`
	background-color: transparent !important;
`

const App = ({ classes, addActivity }) => {
	return (
		<PageWrapper>
			<TransparentAppBar position="static" color="inherit" elevation={0}>
				<Toolbar>
					<Typography
						type="title"
						color="inherit"
						className={classes.flex}
					>
						TinyProgress
					</Typography>
					<AddActivity addActivity={addActivity} />
				</Toolbar>
			</TransparentAppBar>
			<Activities />
		</PageWrapper>
	);
};

const mappedActions = dispatch => {
	return {
		addActivity: (id, title) => dispatch(actions.addActivity(id, title))
	};
};

const AppWithStyles = withStyles(styles, { withTheme: true })(App);

export default connect(null, mappedActions)(AppWithStyles);
