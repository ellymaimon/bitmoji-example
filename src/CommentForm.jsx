import { useState } from "react";
import { Button, Form, Image } from "semantic-ui-react";
import BitmojiButton from "./BitmojiButton";

function CommentForm(props) {
	const [userName, setUserName] = useState("");
	const [comment, setComment] = useState("");
	const [bitmojiURL, setBitmojiURL] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!userName || !comment) {
			return;
		}

		const newComment = {
			userName: userName,
			date: new Date(),
			text: comment,
			bitmojiURL: bitmojiURL,
		}

		props.setComments([...props.comments, newComment]);

		setUserName("");
		setComment("");
		setBitmojiURL(null);
	}

	return (
		<Form reply onSubmit={handleSubmit}>
			<Form.Input
				label='Enter Username'
				value={userName}
				onChange={(e) => setUserName(e.target.value)}
			/>
			<Form.Group widths='equal'>
				<Form.TextArea
					label='Comment'
					value={comment}
					onChange={(e) => setComment(e.target.value)}
				/>
				{bitmojiURL &&
					<Image
						src={bitmojiURL}
						alt="Commenter's Bitmoji"
						size='small'
						style={{ height: "100%" }}
					/>
				}
			</Form.Group>
			<Form.Group>
				<Button content='Add Reply' labelPosition='left' icon='edit' primary />
				<BitmojiButton setBitmojiURL={setBitmojiURL} />
			</Form.Group>
		</Form>
	);
}

export default CommentForm;

