import styled from "styled-components";

export default function Dice({toggle}) {
    return (
        <Container>
           
            <div>
                <img src="/images/dices 1.png" alt="dice" />
            </div>
            <div>
                <h1 className="Content">
                    DICE GAME
                </h1>
                <Button onClick={toggle}>let's play</Button>
            </div>
        </Container>
    );
}

const Container = styled.div`
    max-width: 1180px;
    display: flex;
    margin: 0 auto;
    align-items: center;
    height: 100vh;

    .Content {
        font-size: 96px;
        white-space: nowrap;
    }
`;

const Button = styled.button`
    background-color: black;
    color: white;
    border-radius: 5px;
    padding: 10px 18px;
    min-width: 220px;
    border: none;
    font-size: 16px;
    border: 1px solid transparent;
    cursor: pointer;
    transition: 0.4s background ease-in;
    
    &:hover {
        background-color: white;
        border: 1px solid black;
        color: black;
        transition: 0.3s background ease-in;
    }
`;
