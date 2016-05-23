import React from 'react';

class App extends React.Component {
  constructor () {
    super();

    this.state = {
      data:
      [
        {
          'id': 'ITV',
          'channel': 'channel',
          'productions': 'href'
        },
        {
          'id': 'ITV2',
          'channel': 'channel',
          'productions': 'href'
        },
        {
          'id': 'ITV3',
          'channel': 'channel',
          'productions': 'href'
        },
        {
          'id': 'ITV4',
          'channel': 'channel',
          'productions': 'href'
        }
      ]
    }
  };

  sendRequest () {
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        document.getElementById('itv').innerHTML = xhttp.responseText;
      }
    }
    xhr.open('get', '/itv')
    xhr.send()
  }

  render () {
    this.sendRequest()
    return (
      <div>
        <Header/>
        <table>
          <tbody>
            {this.state.data.map((channel, i) => <TableRow key = {i} data = {channel} />)}
          </tbody>
        </table>
      </div>
    )
  }
}

class TableRow extends React.Component {
  render () {
    return (
      <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.channel}</td>
        <td>{this.props.data.href}</td>
      </tr>
      <button id='itv' type='button' onclick='loadDoc()'>Change Content</button>
    )
  }
}

export default App;