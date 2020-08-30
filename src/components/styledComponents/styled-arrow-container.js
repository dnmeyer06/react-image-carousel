import styled from 'styled-components';

const ArrowContainer = styled.div`
  display: grid;
  -ms-grid-rows: auto;
  grid-template-rows: auto;
  align-self: stretch;

  &:hover {
    background-image: linear-gradient(
      to ${(props) => (props.direction === 'left' ? 'right' : 'left')},
      grey,
      white
    );
    cursor: pointer;
  }

  > div {
    justify-self: center;
    align-self: center;
    font-size: 45px;
  }
`;

export default ArrowContainer;
