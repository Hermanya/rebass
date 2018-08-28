import React from 'react'
import { connect } from 'refunk'
import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

import {
  Flex,
  Box,
  Container,
  Banner,
  Heading,
  Text,
  Lead,
  Button,
  Pre,
  BlockLink,
  Image,
  Blockquote,
    NavLink,
    Measure,
    Link
} from 'rebass'
import { docs, install } from './_constants'

const PrimaryButton = styled(Button)({
  transition: 'background-color .2s ease-out',
  '&:hover': {
    backgroundColor: 'magenta'
  }
})

const SecondaryButton = styled(Button)({
  transition: '.2s ease-out',
  transitionProperty: 'color, box-shadow',
  backgroundColor: 'transparent',
  boxShadow: 'inset 0 0 0 2px',
  '&:hover': {
    color: 'magenta',
    backgroundColor: 'transparent',
    boxShadow: 'inset 0 0 0 2px magenta'
  }
})

const Title = styled(Heading)([])

const Hero = connect(props => (
  <Banner
    py={[ 4, 5 ]}
    color='white'
    bg='black'>
    <Flex
      flexDirection='column'
      alignItems='center'>
        <Title
          is='h1'
          fontSize={[ 6, 7, 8 ]}>
          Rebass Native
        </Title>
        {/* <Pre mb={2} color=''>v{props.pkg.version}</Pre> */}
        <Lead mb={3} fontWeight='bold' color=''>
          {/* {props.pkg.description} */}
        </Lead>
        <Flex
          mb={4}
          alignItems='center'>
          <PrimaryButton
            is={RouterLink}
            to={docs}
            fontSize={2}
            children='Docs'
            mr={3}
          />
          <SecondaryButton
            is='a'
            href='https://github.com/hermanya/rebass-native'
            fontSize={2}
            color='white'
            children='GitHub'
            mr={3}
          />
          <Pre color='magenta'>{install}</Pre>
        </Flex>
        <Flex
          alignItems='center'>
          <BlockLink
            mr={2}
            py={2}
            href='https://travis-ci.org/hermanya/rebass-native'>
            <Image
              src='https://img.shields.io/travis/hermanya/rebass-native/master.svg'
            />
          </BlockLink>
          <BlockLink
            ml={2}
            mr={3}
            py={2}
            href='https://github.com/hermanya/rebass-native'>
            <Image
              src='https://img.shields.io/github/stars/hermanya/rebass-native.svg?style=social&label=Star'
            />
          </BlockLink>
        </Flex>
    </Flex>
  </Banner>
))


const Intro = props =>
  <React.Fragment>
    <Text
      is='p'
      fontSize={4}
      fontWeight='bold'
      my={5}
    >
      <Measure>
        Rebass Native is a port of Rebass for <em>React Native</em>. It's a library of highly-composable, primitive UI components for React,
        built with styled-system to make building consistent, responsive web apps simpler and faster.
      </Measure>
    </Text>
    <Heading>
      Features
    </Heading>
    <Flex
      mx={-3}
      mb={5}
      flexWrap='wrap'>
      {[
        'Functional stateless UI components',
        'Style encapsulation with CSS-in-JS and styled-components',
        'Configurable theming',
        'Extensible base components',
        'Design-system based consistency',
        'Built for responsive web design',
        'Write less custom CSS',
      ].map(feat => (
        <Box
          key={feat}
          width={[ 1/2, null, 1/4 ]}
          p={3}>
          <Text fontWeight='bold'>
            {feat}
          </Text>
        </Box>
      ))}
    </Flex>

    <Flex flexWrap='wrap' mx={-3} mb={5}>
      {quotes.map(({ text, name, href }) => (
        <Box key={name} width={[ 1, null, 1/2 ]} px={3} py={4}>
          <Blockquote
            mb={2}
            fontSize={3}
            fontWeight='bold'>
            {text}
          </Blockquote>
          <Link fontSize={1} href={href}>{name}</Link>
        </Box>
      ))}
    </Flex>
  </React.Fragment>

const quotes = [
//   {
//     text: '“One of the best React component libs out there”',
//     name: 'Max Stoiber',
//     href: 'https://twitter.com/mxstbr/status/882657561111080960'
//   },
]


const CTA = props =>
  <Box py={5}>
    <Flex flexWrap='wrap' alignItems='center'>
      <Box>
        <Heading mb={2}>
          Getting Started
        </Heading>
        <Text fontWeight='bold' mb={3}>
          Install Rebass Native now and read the docs to get started
        </Text>
        <Pre mb={3}>{install}</Pre>
      </Box>
      <Box mx='auto' />
      <Box>
        <Button
          is={RouterLink}
          fontSize={2}
          py={3}
          to={docs}>
          Documentation
        </Button>
      </Box>
      <Box mx='auto' />
    </Flex>
  </Box>

const Footer = props =>
  <Flex mx={-2}>
    <NavLink href='https://github.com/hermanya/rebass-native'>
      GitHub
    </NavLink>
    <NavLink href='https://github.com/jxnblk/rebass'>
      Rebass for web
    </NavLink>
    <NavLink href='https://jxnblk.com'>
      Based on work of Jxnblk
    </NavLink>
  </Flex>


export default class extends React.Component {
  static defaultProps = {
    layout: false
  }

  render () {
    return (
      <React.Fragment>
        <Hero />
        <Container maxWidth={1280} pb={6}>
          <Intro />
          <CTA />
          <Footer />
        </Container>
      </React.Fragment>
    )
  }
}