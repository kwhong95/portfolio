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
    opacity: 0;
    top: 35vh;

    p {
      font-weight: bold;
      text-align: center;
      line-height: 1.2;
    }
  }

  .sticky-elem {
    position: fixed;
    display: none;
    left: 0;
    width: 100%;
  }

  & > .description {
    font-size: 1.2rem;
    color: #888;

    strong {
      float: left;
      font-size: 3rem;
      margin-right: 0.2rem;
      color: #fff;
    }
  }

  canvas {
    top: 0;
    background: #ccc;
  }
`
