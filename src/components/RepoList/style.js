import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  flex-wrap: wrap;

  section {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 1200px;
  }

  .head {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    max-width: 90%;
    background: white;
    border-radius: 3px;
    flex-wrap: wrap;
    margin: 5px;

    img {
      max-width: 80px;
      max-height: 80px;
    }

    aside {
      display: flex;
      justify-content: center;
      align-items: center;

      span {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 5px;

        p {
          color: rgb(92, 119, 206);
        }

        small {
          margin-left: 5px;
        }
      }
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 10px;

      small {
        color: #666;
      }
    }
  }
`;

export const Favorite = styled.div`
  width: 250px;
  background: white;
  padding: 10px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 10px;
  position: relative;
  flex-wrap: wrap;

  small {
    color: #666;
  }

  header {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    margin-bottom: 20px;
    flex-wrap: wrap;
    padding: 0 20px;
  }

  img {
    width: 70px;
    margin-bottom: 5px;
  }

  ul {
    list-style: none;

    li {
      margin-bottom: 5px;
      padding: 10px;

      &:last-child {
        margin: 0;
      }

      &:nth-child(odd) {
        background: rgb(240, 243, 247);
      }
    }
  }

  button {
    position: absolute;
    width: 30px;
    height: 30px;
    border: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 3px;
    top: 3px;
    background: rgb(240, 243, 247);
    border-radius: 3px;
  }
  a {
    position: absolute;
    width: 30px;
    height: 30px;
    color: dodgerblue;
    border: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .link {
    left: 3px;
    top: 3px;
    /* background: dodgerblue; */
  }
`;
