import React from "react";
import Button from "material-ui/Button";
import "typeface-roboto";
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import Activities from "../Activities";

const styles = theme => ({
	root: {
		width: "100%"
	}
});

const App = props => {
	const { classes } = props;

	return (
		<div className={classes.root}>
			<AppBar position="static" color="default">
				<Toolbar>
					<Typography type="title" color="inherit">
						Progress
					</Typography>
				</Toolbar>
			</AppBar>
			<div>
				<Button>Add Activity</Button>
				<Activities />
			</div>
		</div>
	);
};

export default withStyles(styles, { withTheme: true })(App);
