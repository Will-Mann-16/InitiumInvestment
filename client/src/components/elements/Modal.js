import React, { Component } from 'react'
import styled from 'styled-components';
import { Portal } from '../utilities/index';
import { animated, config } from 'react-spring';
import { Transition } from 'react-spring/renderprops';
import Icon from './Icon';
import { Card } from './Card';

export default class Modal extends Component {
  render() {
    const { children, toggle, on, animated } = this.props;
    return animated ? (
      <Portal>
        <Transition
        items={on}
          native
          config={config.gentle}
          from={{ opacity: 0, bgOpacity: 0, y: '-50px' }}
          enter={{ opacity: 1, bgOpacity: 0.5, y: '0px' }}
          leave={{ opacity: 0, bgOpacity: 0, y: '50px' }}
        >
          {on => on && (styles => (
              <ModalWrapper>
                <ModalCard
                  style={{
                    transform: styles.y.interpolate(
                      y => `translate3d(0, ${y}, 0)`
                    ),
                    ...styles
                  }}
                >
                  <CloseButton onClick={toggle}>
                    <Icon icon="fas fa-times" />
                  </CloseButton>
                  <div>{children}</div>
                </ModalCard>
                <Background
                  style={{
                    opacity: styles.bgOpacity.interpolate(
                      bgOpacity => bgOpacity
                    )
                  }}
                  onClick={toggle}
                />
              </ModalWrapper>
          ))}
        </Transition>
      </Portal>
    ) : <Portal>
      {on && <ModalWrapper>
                <ModalCard>
                  <CloseButton onClick={toggle}>
                    <Icon icon="fas fa-times" />
                  </CloseButton>
                  <div>{children}</div>
                </ModalCard>
                <Background
                  onClick={toggle}
                />
      </ModalWrapper>}
    </Portal>;
  }
}

const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 5vmin;
  overflow: auto;
`;

const AnimCard = Card.withComponent(animated.div);

const ModalCard = styled(AnimCard)`
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const CloseButton = styled.button`
  border: none;
  background: transparent;
  padding: 10px;
      position: absolute;
      top: 0;
      right: 0;
      cursor: pointer;
`;

const Background = styled(animated.div)`
      position: absolute;
      top: 0;
      left: 0;
  width: 100%;
  height: 100%;
  background: #7f8c8d;
  opacity: 0.5;
    z-index: 2;
`;
