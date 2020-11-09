import { Comment, Header } from 'semantic-ui-react';
import CommentDetail from './CommentDetail';
import CommentForm from './CommentForm';

function CommentList(props) {
	return (
		<Comment.Group size='large' style={{ margin: '40px auto' }}>
			<Header as='h3' dividing>
				Comments
			</Header>
			{props.comments.map((comment, i) => <CommentDetail key={i} comment={comment} />)}
			<CommentForm comments={props.comments} setComments={props.setComments}/>
		</Comment.Group>
	);
}

export default CommentList;

