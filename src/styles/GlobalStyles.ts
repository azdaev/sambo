import { createGlobalStyle } from 'styled-components';
import { colors } from './colors';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', 'Helvetica', sans-serif;
    line-height: 1.6;
    color: ${colors.textPrimary};
    background-color: ${colors.background};
    overflow-x: hidden;
    margin: 0;
    padding: 0;
  }

  #root {
    width: 100%;
    min-height: 100vh;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
    margin-bottom: 1rem;
    color: ${colors.textPrimary};
  }

  h1 {
    font-size: 2.5rem;
    line-height: 1.2;
  }

  h2 {
    font-size: 2rem;
    line-height: 1.3;
  }

  h3 {
    font-size: 1.5rem;
    line-height: 1.4;
  }

  p {
    margin-bottom: 1rem;
    color: ${colors.textSecondary};
  }

  a {
    color: ${colors.primary};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${colors.hover};
    }
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    font-family: inherit;
    transition: all 0.3s ease;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .section {
    padding: 80px 0;
  }

  @media (max-width: 768px) {
    .container {
      padding: 0 15px;
    }

    .section {
      padding: 60px 0;
    }

    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    h3 {
      font-size: 1.25rem;
    }
  }
`;
