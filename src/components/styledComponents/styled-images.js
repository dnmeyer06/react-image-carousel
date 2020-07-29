import styled from 'styled-components';

const StyledImage = styled.div`
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${props => props.backgroundImage});
`;

export default StyledImage