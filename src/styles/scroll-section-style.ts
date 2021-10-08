import styled from '@emotion/styled'

export const ScrollSection = styled('section')`
  padding-top: 50vh;

  & > h1 {
    font-size: 4rem;
    text-align: center;
  }

  & > .main-message {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 0;
    height: 3em;
    font-size: 2.5rem;
    background-color: rgba(0, 0, 0, 0.3);

    p {
      font-weight: bold;
      text-align: center;
      line-height: 1.2;
    }
  }
`
