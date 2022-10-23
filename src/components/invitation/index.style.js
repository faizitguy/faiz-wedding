import styled from 'styled-components';

export const Heading = styled.div`

  color:white;
  text-align:center;
  padding: 15px;
  
 h1 {
    font-family: 'Clicker Script', cursive;
    font-size:85px;
     letter-spacing:4px
    color: #D0012D;
    font-weight: bold;
    }
 h2 {
    font-family: 'Clicker Script', cursive;
    font-size:35px;
    margin-top: 12px;
    letter-spacing:4px
    font-weight: bold;
    }

      @media screen and (max-width: 486px) {
        h1 {
          font-size:75px;
        }
      }

      @media screen and (max-width: 426px) {
        h1 {
          font-size:65px;
        }
      }

      @media screen and (max-width: 372px) {
        h1 {
          font-size:55px;
        }
      }
`;


export const Invited = styled.h2`
  font-family: 'Clicker Script', cursive;
  text-align: center;
  font-size: 48px;
  font-weight: bold;
  color: #D0012D;
  margin: 25px 0;
`;

export const InvitationWrapper = styled.div`
    text-align: center;
    margin-top: 12px;
`;

export const BismillahText = styled.h4`
    color: white;
    font-size: 22px;
    
    @media screen and (max-width: 568px) {
        font-size: 12px;
    }
`;

export const ButtonsWrapper = styled.div`
    text-align: center;
    margin: 25px;
    padding: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const NeoButton = styled.div`

  box-shadow: inset 20px 20px 30px #d3d3d3, inset -20px -20px 60px #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15px;
  width: 125px;
  margin: 0 12px;
  padding: 1.2rem;
  border-radius: 3rem;
  cursor: pointer;
  font-weight: bold;
  -webkit-animation: shadowFadeOut 1s;
  
  &:hover {
    -webkit-animation: shadowFade 1s;
    box-shadow: 5px 5px 15px #bebebe, -5px -5px 15px #fafafa;
    color: white;
    font-weight: bold;
  }

  &:active {
    webkit-animation: button-color 1s forwards linear;
    animation: button-color 1s forwards linear;
  }

  @-webkit-keyframes shadowFade {
  0% {
    box-shadow: inset 20px 20px 30px #d3d3d3, inset -20px -20px 60px #fafafa;
  }
  50% {
    box-shadow: none;
  }
  100% {
    box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #fafafa;
  }
}

@-webkit-keyframes shadowFadeOut {
  0% {
    box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #fafafa;
  }
  50% {
    box-shadow: none;
  }
  100% {
    box-shadow: inset 20px 20px 30px #d3d3d3, inset -20px -20px 60px #fafafa;
  }
}

@-webkit-keyframes btn-color {
    0% { background: red; }
    50% { background: red; }
    100% { background: yellow; }
}
@keyframes btn-color {
    0% { background: red; }
    50% { background: red; }
    100% { background: yellow; }
}

  @media screen and (max-width: 426px) {
    padding: 1.5rem;
  }

`;