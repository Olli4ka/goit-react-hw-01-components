import styled from "styled-components";

const statusColor = function getStatusColor(props) {
  return props.isOnline ? 'green' : 'red';
};

export const FriendsItem = styled.li`
display: flex;
align-items: center;
gap: 10px;
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);`;

export const FriendsStatus = styled.span`
display: inline-block;
margin-left: 40px;
height: 15px;
width: 15px;
border-radius: 50%;  
  
background-color: ${statusColor};`;

export const FriendsAvatar = styled.img`
background-color: beige;
border-radius: 4px;
margin-right: 25px;`

export const FriendsName = styled.p`
font-weight: bold;`