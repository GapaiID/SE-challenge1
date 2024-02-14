import React from 'react';
import PostCard from './SingleCard';

type PostCardsProps = {
	children?: React.ReactNode;
};

const PostCards: React.FC<PostCardsProps> = ({ children }) => {
	return (
		<div data-testid="PostCards" className="w-9/12 mx-auto mb-16">
			<div className="grid grid-cols-3 gap-4">
				<PostCard />
				<PostCard />
				<PostCard />
				<PostCard />
				<PostCard />
				<PostCard />
				<PostCard />
				<PostCard />
				<PostCard />
			</div>
		</div>
	);
};

export default PostCards;
