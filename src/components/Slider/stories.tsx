import { Story, Meta } from '@storybook/react'
import { Settings } from 'react-slick'
import styled from 'styled-components'
import Slider from '.'

export default {
  title: 'Slider',
  component: Slider
} as Meta

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
}

const verticalSettings: Settings = {
  vertical: true,
  verticalSwiping: true,
  dots: true,
  infinite: false,
  slidesToShow: 1
}

const Slide = styled.div`
  background: gray;
  width: 30rem;
  padding: 10rem 0;
  border: 0.1rem solid red;
  color: white;
  text-align: center;
`

export const Horizontal: Story = () => (
  <Slider settings={settings}>
    <Slide>Slide 1</Slide>
    <Slide>Slide 2</Slide>
    <Slide>Slide 3</Slide>
    <Slide>Slide 4</Slide>
    <Slide>Slide 5</Slide>
    <Slide>Slide 6</Slide>
    <Slide>Slide 7</Slide>
  </Slider>
)

export const Vertical: Story = () => (
  <Slider settings={verticalSettings}>
    <Slide>Slide 1</Slide>
    <Slide>Slide 2</Slide>
    <Slide>Slide 3</Slide>
    <Slide>Slide 4</Slide>
    <Slide>Slide 5</Slide>
    <Slide>Slide 6</Slide>
    <Slide>Slide 7</Slide>
  </Slider>
)
