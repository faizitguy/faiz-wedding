import styled from 'styled-components';

export const CountDownWrapper = styled.div`
    color: white;
    text-align: center;
    h2 {
        margin-bottom: 12px;
    }
`;

export const ClocksWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Clock = styled.div`
  margin: 0 20px;
  height: 80px;
  min-width: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 35px;
  border: 1px solid #F14E95;
  color: #fff;
  background: rgba(241, 78, 149, 0.8);
  animation: pulse 1s ease infinite;
  font-size: 1.2rem;
  padding: 12px 2px;

  span {
    font-size: 2rem;
  }

  @keyframes pulse {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.05);
  }

  100% {
    transform: scale(1);
  }
}

@media screen and (max-width: 568px) {
   min-width: 65px;
   margin: 0 5px;
   padding: 12px 0;
}
`;