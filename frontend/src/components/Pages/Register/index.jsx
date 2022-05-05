import styled from "styled-components";
import { Register_Form } from "./partials/Register_form";

const Register__container = styled.div`
  background-image: url("https://storage.googleapis.com/theme-vessel-items/checking-sites/oddo-2-html/HTML/main/assets/img/img-19.jpg");
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const Register = () => {
  return (
    <>
      <Register__container>
        <Register_Form />
      </Register__container>
    </>
  );
};
