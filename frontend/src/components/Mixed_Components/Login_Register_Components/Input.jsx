import styled from "styled-components";

const Input_Box = styled.div`
  border: 1px solid blue;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
`;

const Input_Box__Input = styled.div`
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
  input {
    font-size: 16px;
    outline: none;
    color: #535353;
    border-radius: 3px;
    font-weight: 500;
    border: 1px solid transparent;
    background: #fff;
    box-shadow: 0 0 5px rgb(0 0 0 / 20%);

    height: 55px;
  }
`;

const Input_Box__Icon__div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

export const Input = () => {
  return (
    <>
      <Input_Box>
        <Input_Box__Input>
          <input type="text" placeholder="please enter your name" />
        </Input_Box__Input>

        <Input_Box__Icon__div>
          <img
            src="https://img.icons8.com/ios/35/000000/apple-mail.png"
            alt="emial"
          />
        </Input_Box__Icon__div>
      </Input_Box>
    </>
  );
};
