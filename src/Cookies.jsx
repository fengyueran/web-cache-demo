import React, { Component } from 'react';
import styled from 'styled-components';
import { LineBox, VerticalBox, Button } from '@xinghunm/widgets';


const Container = styled(VerticalBox)`
  padding: 20px;
  background: antiquewhite;
`;

const Text = styled.span`
  color: #000000;
`;

const Welcome = styled.span`
  margin-top:10px;
  color: blue;
`;

const Input = styled.input`
  width: 200px;
  height: 34px;
  border-radius: 5px;
  outline: none;
  font-size: 14px;
`;

// document.cookie = "username=xhm; expires=Tue Dec 11 2018 14:51:13 GMT+0800";
const setCookies = (cname, cvalue, duration) => {
  const date = new Date();
  date.setTime(date.getTime() + duration);
  const expires = `expires=${date.toGMTString()}`;
  // 不会覆盖cookie
  document.cookie = `${cname}=${cvalue};${expires}`;
};

const getCookie = (cname) => {
  const cookies = document.cookie.split(';');
  const foundCookie = cookies.find(cookie => cookie.includes(cname));

  let value;
  if (foundCookie) {
    const match = foundCookie.match(/.*=(.*)/);
    if (match && match.length > 1) {
      value = match[1];
    }
    console.log('cookies:', value);
  }
  return value;
};

const checkCookie = () => {
  const user = getCookie('username');
  return user;
};

class Cookies extends Component {
  componentWillMount() {
    const user = checkCookie();
    this.setState({ user });
  }

  getInput = (ref) => {
    this.input = ref;
  }

  handleSubmit = () => {
    const xhr = new XMLHttpRequest();
    // xhr.open('GET', 'http://localhost:8080/submit?username=xhm', true);
    xhr.open('POST', 'http://localhost:8080/postSubmit', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    const data = `username=xhm`;
    xhr.send(data);
  }

  handleClick = () => {
    const value = this.input.value;
    const duration = 24 * 60 * 60; // 1 day
    setCookies('username', value, duration);
  }

  render() {
    const { user } = this.state;
    return (
      <Container>
        <Text>Cookies</Text>
        {
          user 
            ? (
              <LineBox>
                <Welcome>{`Welcome ${user}`}</Welcome>
                <Button onClick={this.handleSubmit}>Submit</Button>
              </LineBox>)
            : (
              <LineBox>
                <Input innerRef={this.getInput} placeholder="请输入用户名" />
                <Button onClick={this.handleClick}>确定</Button>
              </LineBox>
            )
        }
      </Container>
    );
  }
}

export default Cookies;
