import React, { Component } from "react";
import Button from "material-ui/Button";
import TextField from "material-ui/TextField";
import Dialog, {
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle
} from "material-ui/Dialog";
import TouchAppIcon from "material-ui-icons/TouchApp";

export default class AddActivityDialog extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			title: "",
			unit: ""
		};
	}

	handleClickOpen = () => {
		this.setState({ open: true });
	};

	handleRequestClose = () => {
		this.setState({ open: false });
	};

	handleRequestAdd = () => {
		this.props.addActivity(this.state.title, this.state.unit);
		this.setState({
			open: false,
			title: "",
			unit: ""
		});
	};

	handleChange = name => event => {
		this.setState({
			[name]: event.target.value
		});
	};

	render() {
		return (
			<div>
				<Button color="contrast" onClick={this.handleClickOpen}>
					<TouchAppIcon />
					Add Activity
				</Button>
				<Dialog
					open={this.state.open}
					onClose={this.handleRequestClose}
				>
					<DialogTitle>Add Activity</DialogTitle>
					<DialogContent>
						<DialogContentText>
							Add something to work on
						</DialogContentText>
						<TextField
							autoFocus
							margin="dense"
							id="title"
							label="Title"
							value={this.state.title}
							onChange={this.handleChange("title")}
							fullWidth
						/>
						<TextField
							id="unit"
							label="Unit"
							margin="dense"
							value={this.state.unit}
							onChange={this.handleChange("unit")}
							fullWidth
						/>
					</DialogContent>
					<DialogActions>
						<Button
							onClick={this.handleRequestClose}
							color="primary"
						>
							Cancel
						</Button>
						<Button onClick={this.handleRequestAdd} color="primary">
							Add
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		);
	}
}
