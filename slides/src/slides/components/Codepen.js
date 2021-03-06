import React from 'react'
import styled from 'styled-components'
import Logo from './CodepenLogo.svg'

const codepenStyle = {
  position: 'absolute',
  width: '100vw',
  height: 'calc(100vh - 50px)', // leave space at the bottom for the twitter handle
  top: '0',
  marginLeft: '-50%'
}

const logoStyle = {
  width: '200px',
  display: 'block'
}

const LoadButton = styled.button([], {
  backgroundColor: 'purple',
  color: 'white',
  fontSize: '30px'
})

export default class Counter extends React.Component {
  state = { loadDemo: false }
  handleClick = () => {
    this.setState({ loadDemo: true })
  }
  render() {
    const { url, title } = this.props
    if (!this.state.loadDemo) {
      return (
        <div>
          <h1>{title || ''}</h1>
          <LoadButton onClick={this.handleClick}>
            Load <Logo style={logoStyle} /> Demo
          </LoadButton>
        </div>
      )
    }
    return <iframe src={url} style={codepenStyle} />
  }
}
