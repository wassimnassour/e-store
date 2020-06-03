import styled from "styled-components";
import { Link } from "react-router-dom";

export const A = styled(Link)`

font-size: 0.9rem;

line-height: 20px;

margin-right: 2rem;

list-style: none;

text-decoration: none;
font-family: 'Noto Serif', serif;
color: white;
    cursor: pointer;
   


}`;
export const Logo = styled.h1`
	font-size: 35px;
	line-height: 70px;
	color: white;
	font-family: "Noto Serif", serif;
	color: black;
	margin: 0 5rem;
	${A} {
		font-size: 30px;
	}
`;

export const HeaderButton = styled.button`
	cursor: pointer;
	background: transparent;
	border: none;
	font-size: 0.9rem;
	color: white;
	font-size: 0.9rem;
	line-height: 20px;
	margin-right: 2rem;
	list-style: none;
	-webkit-text-decoration: none;
	text-decoration: none;
	font-family: "Noto Serif", serif;
	font-weight: 400;
	color: black;
	& > span {
		margin-right: 0.3rem;
	}
`;
export const HeaderContainer = styled.header`
	box-shadow:${(props) => (props.boxShadow ? "" : "0px 0px 2px 1.1px #959595")};

height: 5vh;
left: 120px;
top: 40px;
display: flex;
justify-content: space-around;
align-items: center;
background:
    transparent;

& > ul {
	display: flex;
justify-content: center;
align-items: center;
align-content: baseline;

 & > li {

 	list-style:none;
 	 & > a {
 	 	color:${(props) => props.color};
 	 }
 }}}
 ${HeaderButton} {
 	 	color:${(props) => props.color};


 }

 ${Logo} {
 
	${A} {
		color:${(props) => props.color}
	
}

`;