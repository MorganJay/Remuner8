import styled from 'styled-components';

export const ProfileImageWrap = styled.div`
  border-radius: 50%;
  margin: 0 auto 30px;
  position: relative;

  img {
    border-radius: 50%;
    height: 120px;
    width: 120px;
  }

  .fileupload.btn {
    left: 0;
    position: absolute;
    right: 0;
    bottom: 0;
    background: rgba(33, 33, 33, 0.5);
    border-radius: 0;
    padding: 3px 10px;
    border: none;

    .upload {
      cursor: pointer;
      font-size: 20px;
      margin: 0;
      opacity: 0;
      position: absolute;
      right: -3px;
      top: -3px;
      padding: 5px;
    }
  }
`;
