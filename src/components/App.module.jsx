import styled from '@emotion/styled';

export const Button = styled.button`
width: 120px;
height: 48px;

line-height: 100%;
text-align: center;
color: #ffffff;

border-radius: 12px;

background: linear-gradient(180deg, #00cfff 0%, #3ed598 100%);
box-shadow: 0px 2px 4px rgba(15, 218, 137, 0.3);
cursor: pointer;
transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);

:hover,
:focus {
  background: #286053;
}
margin-bottom: 15px;
`;

export const Grid = styled.ul`
display: grid;
max-width: calc(100vw - 48px);
grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
grid-gap: 16px;
margin-top: 0;
margin-bottom: 0;
padding: 16px;
list-style: none;
margin-left: auto;
margin-right: auto;
`;

export const GridItem = styled.li`
overflow: hidden;

max-width: 400px;

padding: 12px;

border-radius: 25px;

background: #30444e;
border: 1px solid #30444e;

transition: box-shadow 500ms cubic-bezier(0.4, 0, 0.2, 1);
transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

:hover,
:focus {
  box-shadow: 0px 1px 14px #19282f;
  border: 1px solid #f9f9f9;
}
`;

export const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100%;

  background-color: gray;

  border: 4px solid black;
  border-radius: 5px;
  overflow: hidden;
`;

export const Text = styled.p`
  font-size: 10px;
  font-weight: 700;

  text-align: left;
  margin-bottom: 10px;
`;

export const GalleryImg = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  border-radius: 12px;

  :hover {
    cursor: zoom-in;
  }
`;