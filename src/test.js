'use strict'

var React = require('react')
var ReactDOM = require('react-dom')
var Scroll = require('react-scroll')

var Link = Scroll.Link
var DirectLink = Scroll.DirectLink
var Element = Scroll.Element
var Events = Scroll.Events
var scroll = Scroll.animateScroll
var scrollSpy = Scroll.scrollSpy

var durationFn = function(deltaTop) {
  return deltaTop
}

export default class Test extends React.Component {
  constructor(props) {
    super(props)
    this.scrollToTop = this.scrollToTop.bind(this)
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', function() {
      console.log('begin', arguments)
    })

    Events.scrollEvent.register('end', function() {
      console.log('end', arguments)
    })

    scrollSpy.update()
  }

  scrollToFirstElement = () => {
    //alert(5)
    Scroll.scroller.scrollTo('secondInsideContainer', {
      duration: 150,
      // delay: 100,
      smooth: true,
      containerId: 'containerElement',
      offset: 0, // Scrolls to element + 50 pixels down the page
    })
  }

  scrollToTop() {
    scroll.scrollToTop()
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin')
    Events.scrollEvent.remove('end')
  }
  render() {
    return (
      <div>
        <div id="anchor" className="element">
          test 6 (anchor)
        </div>

        <Link
          activeClass="active"
          to="firstInsideContainer"
          spy={true}
          smooth={true}
          duration={250}
          containerId="containerElement"
          style={{ display: 'inline-block', margin: '20px' }}
        >
          Go to first element inside container
        </Link>

        <Link
          activeClass="active"
          to="secondInsideContainer"
          spy={true}
          smooth={true}
          duration={250}
          containerId="containerElement"
          style={{ display: 'inline-block', margin: '20px' }}
        >
          Go to second element inside container
        </Link>
        <button onClick={this.scrollToFirstElement}>
          scroll to second element
        </button>
        <Element
          name="test7"
          className="element"
          id="containerElement"
          style={{
            position: 'fixed',
            height: '200px',
            overflow: 'scroll',
            marginBottom: '100px',
            backgroundColor: 'green',
          }}
        >
          test 7 (duration and container)
          <Element
            name="firstInsideContainer"
            style={{
              marginBottom: '200px',
            }}
          >
            first element inside container
          </Element>
          <Element
            name="secondInsideContainer"
            style={{
              marginBottom: '200px',
            }}
          >
            second element inside container
          </Element>
        </Element>

        <Element id="same" className="element">
          Two links point to this
        </Element>

        <a onClick={this.scrollToTop}>To the top!</a>
      </div>
    )
  }
}
