import "./Skills.css"
import { useState, useRef } from 'react';
import { useTransition, useSpring, useChain, config } from 'react-spring';
import styled from 'styled-components';
import { animated } from 'react-spring'

const Container = styled(animated.div)`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 1fr));
  grid-gap: 25px;
  padding: 15px;
  background: white;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.05);
  will-change: width, height;
`
const ContainerHeader = styled(animated.div)`
  width: 100%;
  height: 100%; 
  text-align: center;
  
`
const Item = styled(animated.div)`
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 5px;
  will-change: transform, opacity;
  margin: auto;
  justify-items: center;
  justify-content: center;
  text-align: center;
`



export default function Skills(props) {
    const [open, set] = useState(false)

  const springRef = useRef()
  const { ...rest } = useSpring({
    ref: springRef,
    config: config.stiff,
    from: { width: '100%', height:'50px', background: '#d3e0ea' },
    to: { width: '100%', height: open ? '180px' : '50px', background: open ? 'white' : '#d3e0ea' }
  })

  const transRef = useRef()
  const transitions = useTransition(open ?props.data.sillset : [], item => item.name, {
    ref: transRef,
    unique: true,
    trail: 400 / props.data.sillset.length,
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0)' }
  })

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springRef, transRef] : [transRef, springRef], [0, open ? 0.1 : 0.6])

 
    return (
        <Container style={{ ...rest }} onClick={() => set(!open)}>            
        {!open? <ContainerHeader ><strong>{props.data.name}</strong> <i class="fas fa-info-circle"></i></ContainerHeader> : <></>}            
          {getSkillsSet(transitions )}
        </Container>
    )
  }

  function getSkillsSet(transitions){
    return transitions.map(({ item, key, props }) => (
        <Item key={key} style={{ ...props, background: item.css }} >
            {item.name}
        </Item>
     ))
  }