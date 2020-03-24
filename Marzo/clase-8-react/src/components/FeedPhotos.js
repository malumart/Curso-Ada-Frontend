import React from "react";
import styled from "styled-components";

const Photo = styled.div`
	.cardimg {
		height: 500px;
		width: 450px;
		overflow: hidden;
		display: flex;
		margin: 30px;
		justify-content: center;
		align-items: center;
		img {
			flex-shrink: 0;
			min-width: 100%;
			min-height: 100%;
		}
	}
`;

const FeedPhotos = ({ img }) => {
	return (
		<Photo>
			<div className="cardimg">
				<img alt="Foto del feed" src={img} />
			</div>
		</Photo>
	);
};
export default FeedPhotos;
