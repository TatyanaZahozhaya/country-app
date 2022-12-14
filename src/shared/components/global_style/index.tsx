import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
	padding: 0;
	margin: 0;
	border: 0;
}
*,*:before,*:after{
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
}
:focus,:active{outline: none;}
a:focus,a:active{outline: none;}

nav,footer,header,aside{display: block;}

html,body{
	background-color: ${({theme}) => theme.palette.primaryBackgroundColor};
	height: 100%;
	width: 100%;
	line-height: 1;

}
input,textarea{ background-color: inherit;}
button{ color: inherit;}

input::-ms-clear{display: none;}
button{cursor: pointer;}
button::-moz-focus-inner {padding:0;border:0;}
a{color:inherit}
a, a:visited{text-decoration: none;}
a:hover{text-decoration: none;}
ul li{list-style: none;}
img{vertical-align: top;}

h1,h2,h3,h4,h5,h6{font-weight: 400;}
`;

