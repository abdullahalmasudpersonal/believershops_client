import { faAngellist } from '@fortawesome/free-brands-svg-icons';
import { faAnglesUp, faAngleUp, faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ScrollingBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <Wrapper>
      {isVisible && (
        <div className="top-btn" onClick={goToBtn}>
          <FontAwesomeIcon icon={faAngleUp} />
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .top-btn:hover{
      background-color:orange;
    }
    .top-btn {
      font-size: 20px;
       width: 40px;
       height: 40px;
      color: white;
      padding:10px;
      background-color: gray;
      box-shadow: gray;
      border-radius: 50%;
      position: fixed;
      bottom: 5rem;
      right: 5rem;
      z-index: 999;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition:.4s;
      &--icon {
        animation: gototop 1.2s linear infinite alternate-reverse;
      }
      @keyframes gototop {
        0% {
          transform: translateY(-0.5rem);
        }
        100% {
          transform: translateY(1rem);
        }
      }
    }
    @media (max-width: 400px) {
      .top-btn {
        right: 0;
        left: 40%;
      }
    }
  `;
export default ScrollingBtn;