import React from "react";
import styled from "styled-components";
import fotoDePerfil from "../img/fotodeperfil.jpg";

const Profilecontainer = styled.div`
	background-color: whitesmoke;
	display: flex;
	justify-content: center;
	padding: 20px;

	.profileInfoContainer {
		width: 50%;
		display: flex;
		margin: auto;
		justify-content: flex-start;
	}
	img {
		width: 200px;
		height: auto;
		margin-right: 100px;
		border-radius: 50%;
	}
	.profileSection {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
	.profileUser {
		display: flex;
		justify-content: flex-start;
		b {
			margin-right: 20px;
			font-size: 18px;
			font-weight: bold;
		}
	}
	.profileInfo {
		display: flex;
		justify-content: flex-start;
		p {
			margin: 20px 10px 0px 0px;
		}
	}
`;

const Profile = () => {
	return (
		<Profilecontainer>
			<div className="profileInfoContainer">
				<img alt="foto de perfil" src={fotoDePerfil} />
				<div className="profileSection">
					<div className="profileUser">
						<p>
							<b>maluki</b>
						</p>
						<button> Edit Profile </button>
					</div>
					<div className="profileInfo">
						<p>
							<b>158</b> posts
						</p>
						<p>
							<b>1903</b> followers
						</p>
						<p>
							{" "}
							<b>2045</b> following
						</p>
					</div>
					<div className="profileName">
						<b> Malu Martin</b>
					</div>
				</div>
			</div>
		</Profilecontainer>
	);
};
export default Profile;
