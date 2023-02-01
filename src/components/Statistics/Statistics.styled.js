import styled from "styled-components";



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

& li:nth-of-type(1) {
  background-color: gray;
}
& li:nth-of-type(2) {
  background-color: lightblue;
}
& li:nth-of-type(3) {
  background-color: lightgreen;
}
& li:nth-of-type(4) {
  background-color: blueviolet;
}
& li:nth-of-type(5) {
  background-color: lightpink;
};
`;

export const StatisticItem = styled.li`
display: flex;
flex-direction: column;
align-items: center;
padding: 10px;
color: white;
`

