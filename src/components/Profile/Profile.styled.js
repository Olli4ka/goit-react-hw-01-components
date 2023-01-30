import styled from "styled-components";

export const ProfileCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;             
margin: 10px auto 0 auto;
padding: 95px;
width: fit-content;    
background-color: rgb(192, 205, 221);`;

export const DescribtionCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 320px;
padding: 15px;
background-color: white;
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
border-radius: 5px 5px 0 0;`;

export const ProfileAvatar = styled.img`
margin-top: 20px;
max-height: 150px;
background-color: white;
border-radius: 100%;`;

export const ProfileName = styled.p`
font-size: larger;
font-weight: bold;`;

export const ProfileInfo = styled.p`
color: grey;`;

export const ProfileStats = styled.ul`
    margin: 0;
    padding: 0 15px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    width: 320px;
    list-style: none;
    background-color: aliceblue;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
    border: 1px solid rgb(172, 194, 198);
    border-radius: 0 0 5px 5px;

        & li {
        display: flex;
        gap: 10px;
        flex-direction: column;
        align-items: center;
        width: 33%; 
        padding: 15px 0;
        }

        & li:nth-child(2) {
        border-left: 1px solid rgb(172, 194, 198);;
        border-right: 1px solid rgb(172, 194, 198);;
        }
    `;

export const ProfileLabel = styled.span`
    font-size: 14px;
    color: grey;`;

export const ProfileQuantity = styled.span`
    font-weight: bold;`;



