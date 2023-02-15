.buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;

  @media screen and (max-width: 350px) {
  }
  button {
    color: #000;
    background: #fff;
    padding: 0.65rem 1rem;
    border-radius: 10px;
    font-size: 0.85rem;
    text-transform: capitalize;
    cursor: pointer;
    border: none;
    margin-top: 1rem;
    font-family: 'Poppins';

    &.active {
      background: #8c12f0;
      color: #fff;
    }
  }
}

.workImages {
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media screen and(max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and(max-width: 600px) {
    grid-template-columns: 1fr;
  }

  .workImage {
    max-width: 380px;
    height: 250px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    @media screen and(max-width:600px) {
      max-width: 350px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: fill;
    }

    .hoverLayer {
      background: #8c12f0;
      width: 100%;
      height: 100%;
      z-index: 5;
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      gap: 1.5rem;
      justify-content: center;
      align-items: flex-start;
      .name {
        position: absolute;
        text-align: center;
        margin-top: 17%;
      }
      .selected {
        align-self: center;
        display: flex;
        :nth-child(2n) {
          margin-left: 5px;
        }
      }
      a {
        width: 40px;
        height: 40px;
        background: rgba(255, 255, 255, 0.25);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;

        svg {
          color: #fff;
          font-size: 1.5rem;
        }
      }
    }
  }
}

.talk {
  margin-top: 3rem;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-radius: 5px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  flex-wrap: wrap;
  gap: 1rem;

  .talk_left {
    h3 {
      font-size: 1.5rem;

      span {
        font-size: 3.5rem;
        color: #8c12f0;

        @media screen and (max-width: 599px) {
          font-size: 2rem;
        }

        @media screen and (max-width: 360px) {
          font-size: 1.5rem;
        }
      }
    }
  }
  .talk_right {
    align-self: flex-end;
    margin-bottom: 1.5rem;
    background: #8c12f0;
    padding: 0.65rem 1rem;
    border-radius: 10px;
    font-size: 0.85rem;

    a {
      text-decoration: none;
      color: #fff;
      text-transform: capitalize;
    }
  }
}
