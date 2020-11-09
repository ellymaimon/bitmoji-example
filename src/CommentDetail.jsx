import { Comment, Image } from 'semantic-ui-react';
import logo from './logo.svg';

function CommentDetail(props) {
	const { userName, date, text, bitmojiURL } = props.comment;

	return (
		<Comment>
			<Comment.Avatar src={logo} />
			<Comment.Content>
				<Comment.Author as='a'>{userName}</Comment.Author>
				<Comment.Metadata>
					<div>{date.toLocaleDateString()} {date.toLocaleTimeString()}</div>
				</Comment.Metadata>
				<Comment.Text>
					{text}
					{bitmojiURL && <Image src={bitmojiURL} alt="Commenter's Bitmoji" size='small' />}
				</Comment.Text>
				<Comment.Actions>
					<Comment.Action>Reply</Comment.Action>
				</Comment.Actions>
			</Comment.Content>
		</Comment>
	);
}

export default CommentDetail;

