const Post = ({ id, pathname }: { id: string, pathname: string }) => {
	return (
		<div>
			I am the post {id}; my pathname is: {pathname}
		</div>
	)
}

export default Post;