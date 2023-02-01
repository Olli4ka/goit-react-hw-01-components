import styled from "styled-components";

const randomColor = function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const StatisticsCard = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 20px, auto;
background-color: white;`;


export const StatisticsTitle = styled.h2`
margin-top: 20px;
text-align: center;
text-transform: uppercase;`;

export const StatList = styled.ul`
display: flex;
list-style: none;
padding: 0;
`;

export const StatisticItem = styled.li`
display: flex;
flex-direction: column;
align-items: center;
padding: 10px;
color: white;
background-color: ${randomColor};
`

