
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

const setItem = (key, value) => {
  localStorage.setItem(key, value);
};

const getItem = (key) => {
  const value = localStorage.getItem(key);
  return value;
};

const checkCookie = () => {
  const user = getItem('username');
  return user;
};

class LocalStorage extends Component {
  componentWillMount() {
    const user = checkCookie();
    this.setState({ user });
  }

  getInput = (ref) => {
    this.input = ref;
  }

  handleClick = () => {
    const value = this.input.value;
    setItem('username', value);
  }

  render() {
    const { user } = this.state;
    return (
      <Container>
        <Text>LocalStorage</Text>
        {
          user 
            ? <Welcome>{`Welcome ${user}`}</Welcome>
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

export default LocalStorage;
