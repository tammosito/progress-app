import React from "react";
import { connect } from "react-redux";
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import Activities from "../Activities";
import AddActivity from "../AddActivity";
import styled from "styled-components";
import * as actions from "../../actions";
import { AppContainer, PageWrapper } from "../Layout";

const styles = theme => ({
	flex: {
		flex: 1
	}
});

const TransparentAppBar = styled(AppBar)`
	background-color: transparent !important;
`;

const App = ({ classes, addActivity }) => {
	return (
		<AppContainer>
			<PageWrapper>
				<TransparentAppBar
					position="static"
					color="inherit"
					elevation={0}
				>
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
		</AppContainer>
	);
};

const mappedActions = dispatch => {
	return {
		addActivity: (id, title) => dispatch(actions.addActivity(id, title))
	};
};

const AppWithStyles = withStyles(styles, { withTheme: true })(App);

export default connect(null, mappedActions)(AppWithStyles);
