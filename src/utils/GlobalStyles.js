import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    h2 {
		font-weight: 600;
		font-size: 20px;
	}
	body {
		margin: 0;
        font-family: ${props => props.theme.fonts.main};
	}
`;

export default GlobalStyles;
