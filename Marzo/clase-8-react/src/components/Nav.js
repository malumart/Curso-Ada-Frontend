import React from "react";
import styled from "styled-components";

const Navbar = styled.nav`
	background-color: white;
	height: 80px;
	padding: 20px 100px;
	color: darkgrey;
	display: flex;
	align-items: center;
	justify-content: space-around;
	input {
		width: 150px;
		cursor: pointer;
		color: darkgrey;
		background-color: transparent;
		border-radius: 3px;
		border: 1px solid darkgrey;
		padding: 5px;
		text-align: center;
	}
	img {
		width: 25px;
		height: auto;
	}
	div {
		padding: 20px;
	}
	i {
		padding: 20px;
	}
`;

const Nav = () => {
	return (
		<Navbar>
			<p> Stylagram</p>
			<div>
				<form>
					<input type="text" placeholder="Search.." />
				</form>
			</div>
			<div>
				<i className="fa fa-cog"></i>
				<i className="fa fa-heart"></i>
				<i className="fa fa-user"></i>
			</div>
		</Navbar>
	);
};
export default Nav;
