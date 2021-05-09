import styled from 'styled-components';
import { Button } from "reactstrap";

const CustomButton = styled(Button)`
  background-color: white;
  color: #1f1f1f;
  box-shadow: 0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%);

  &:hover {
    /* color: white;
    background-color: #5e72e4;
    border-color: #5e72e4; */
  }
`;

export default CustomButton;
