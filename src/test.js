import { Transition, animated } from 'react-spring/renderprops'
import React from 'react'


const animateMe = () => {
    return (
        <Transition
          native
          from={{ position: 'absolute', overflow: 'hidden', height: 0 }}
          enter={[{ height: 'auto' }]}
          leave={{ height: 0 }}>
          {show =>
            show && (props => <animated.div style={props}>hello</animated.div>)
          }
        </Transition>
    )
}

export default animateMe

