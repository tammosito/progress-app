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

export default class AddItemDialog extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			value: "",
			unit: this.props.unit
		};
	}

	handleClickOpen = () => {
		this.setState({ open: true });
	};

	handleRequestClose = () => {
		this.setState({ open: false });
	};

	handleRequestAdd = () => {
		this.props.addActivityItem(this.state.value, this.state.unit);
		this.setState({
			open: false,
			value: "",
			unit: this.props.unit
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
					Add Item
				</Button>
				<Dialog
					open={this.state.open}
					onRequestClose={this.handleRequestClose}
				>
					<DialogTitle>Add Item</DialogTitle>
					<DialogContent>
						<DialogContentText>
							Track you progress
						</DialogContentText>
						<TextField
							autoFocus
							margin="dense"
							id="value"
							label="Value"
							type="number"
							value={this.state.title}
							onChange={this.handleChange("value")}
							fullWidth
						/>
						<TextField
							id="unit"
							margin="dense"
							placeholder={this.state.unit}
							
							fullWidth
							disabled
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
