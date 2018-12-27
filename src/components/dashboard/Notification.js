import React from "react";
import styled from "styled-components";
import moment from "moment";

const Notification = ({ notifications }) => {
  return (
    <Content>
      <Header>notification</Header>
      <NotificationList>
        {notifications &&
          notifications.map(notification => {
            return (
              <Item key={notification.id}>
                <User>
                  {notification.user} <p>{notification.content}</p>
                </User>
                <Time>
                  <em>{moment(notification.time.toDate()).fromNow()}</em>
                </Time>
              </Item>
            );
          })}
      </NotificationList>
    </Content>
  );
};

export default Notification;

const Content = styled.div`
  width: 100%;
  heigh: auto;
`;
const Header = styled.h2`
  width: 60%;
  margin: 0 auto;
  padding: 10px 0;
`;
const NotificationList = styled.ul`
  width: 60%;
  margin: 5px auto;
  list-style: none;
  padding: 15px
  background: #a4d3f2;
`;
const Item = styled.li`
  font-size: 0.8em;
  color: #fff;
  margin: 5px 0;
`;
const User = styled.span`
  color: #2980b9;
  font-size: 1.1em;
  > p {
    display: inline-block;
    color: #fff;
  }
`;
const Time = styled.p`
  padding: 5px 0;
`;
