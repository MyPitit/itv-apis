import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      channels: []
    }
  }

  sendRequest () {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        this.setState({
          channels: JSON.parse(xhr.responseText)._embedded.channels
        });
      }
    }
    xhr.open('get', '/itv');
    xhr.send();
  }

  componentWillMount() {
    this.sendRequest();
  }

  render () {
    return (
      <ul>
        {
          this.state.channels.map((channel, i) => {
            return (
              <li key={i} style={styles}>
                <p><span>channel: </span>{channel.channel}</p>
                <p><a href={channel._links.productions.href}>link</a></p>
              </li>
            );
          })
        }
      </ul>
    )
  }
}

const styles = {
  listStyleType: 'none'
}

export default App;