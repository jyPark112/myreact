import styled from "styled-components";

const Bigbox1 = styled.div`
  text-align: center;
  color: blue;
  font-size: 1.5rem;
  font-weight: bold;
`;
const Bigbox2 = styled.div`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 60% 40%;
  margin-top: 20px;
  .b1 img {
    width: 80%;
    margin-top: 15px;
  }
  .b2 {
    font-size: 1.5rem;
    padding: 15px;
  }
`;
const Bigbox3 = styled.div`
  width: 80%;
  gap: 10px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 33% 33% 33%;
  margin-top: 15px;
  img {
    width: 100%;
    height: 50vh;
    object-fit: cover;
  }
  p {
    font-size: 0.5rem;
    padding: 15px;
  }
`;

export function Session() {
  return (
    <>
      <Bigbox1>Hello world</Bigbox1>
      <Bigbox2>
        <div class="b1">
          <img src="https://picsum.photos/id/35/300/200" />
        </div>
        <div class="b2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis
          iaculis felis. Nulla nec lectus id arcu tristique fermentum.
          Pellentesque pretium quam vitae nisl lobortis lacinia. Aliquam aliquam
          ligula et arcu ullamcorper imperdiet.
        </div>
      </Bigbox2>
      <Bigbox3>
        <div class="smallbox1">
          <div>
            <img src="https://picsum.photos/id/17/300/200" />
          </div>
          <p>
            Fusce vitae commodo est, vel faucibus sem. Nullam rutrum viverra
            justo, eget bibendum ligula tincidunt at.
          </p>
        </div>
        <div class="smallbox2">
          <div>
            <img src="https://picsum.photos/id/18/300/200" />
          </div>
          <p>
            Vivamus auctor eleifend venenatis. Aenean vulputate, nisi nec
            hendrerit pellentesque, ante magna fermentum sapien, a mattis tortor
            dui vel urna.
          </p>
        </div>
        <div class="smallbox3">
          <div>
            <img src="https://picsum.photos/id/25/300/200" />
          </div>
          <p>Ut nec neque nec ligula porttitor malesuada.</p>
        </div>
      </Bigbox3>
    </>
  );
}
