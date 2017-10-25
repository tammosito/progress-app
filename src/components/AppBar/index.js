import React from "react";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import IconButton from "material-ui/IconButton";
import ArrowBack from "material-ui-icons/ArrowBack";
import styled from "styled-components";
import { withStyles } from "material-ui/styles";
import {
	Link
  } from 'react-router-dom'

const styles = theme => ({
	flex: {
		flex: 1
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20
	}
});

const TransparentAppBar = styled(AppBar)`
	background-color: transparent !important;
`;

const CustomAppBar = ({ title, action, classes, backbutton, ...rest }) => (
	<TransparentAppBar
		position="static"
		color="inherit"
		elevation={0}
		{...rest}
	>
		<Toolbar>
			{backbutton && (
				<Link to="/">
				<IconButton
					className={classes.menuButton}
					color="contrast"
					aria-label="Menu"
				>
					<ArrowBack />
				</IconButton>
				</Link>
			)}
			<Typography type="title" color="inherit" className={classes.flex}>
				{title}
			</Typography>
			{action}
		</Toolbar>
	</TransparentAppBar>
);

export default withStyles(styles, { withTheme: true })(CustomAppBar);
