import styled from "styled-components";
import { useState, useEffect } from "react";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  width: 500px;
  height: 300px;
  background: linear-gradient(90deg, lightblue, dodgerblue);
  color: white;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Icon = styled.div`
  text-align: center;
  img {
  }
`;
const Weather = styled.div`
  display: flex;
  flex-direction: column;
  text-align: end;
  padding-top: 25px;
  padding-right: 30px;
`;
const Temp = styled.div`
  margin-top: 20px;
  font-size: 5rem;
  i {
    font-size: 3.5rem;
  }
`;
const City = styled.div`
  font-size: 2.5rem;
`;
const Info = styled.div`
  font-size: 1.5rem;
  margin-top: 30px;
`;

export function OpenWeather({ cityName }) {
  const API_KEY = "9a3f6122e86b31486d8177d82f910822";
  const API_KEY_NINJA = "P2vwnJwCcW41yc2IXcvdfA==ToIEDwypPnqWBOEs";

  const [icon, setIcon] = useState(null);
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");

  useEffect(() => {
    if (cityName) {
      // 닌자한테 해당 도시의 위도, 경도를 요청
      const urlToNinja = `https://api.api-ninjas.com/v1/city?name=${cityName}`;
      fetch(urlToNinja, {
        headers: {
          "X-Api-Key": API_KEY_NINJA,
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          const position = {
            coords: {
              latitude: data[0].latitude,
              longitude: data[0].longitude,
            },
          };
          geoOK(position);
        })
        .catch((error) => {
          geoError(error);
        });
    } else {
      // 특정도시 이름을 입력하지 않았으므로 그냥 현재 위치를 요청
      navigator.geolocation.getCurrentPosition(geoOK, geoError);
    }
  }, []);

  function geoOK(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setCity(data.name);
        setTemp(parseInt(data.main.temp));
        setIcon(data.weather[0].icon);
        setWeather(data.weather[0].main);
      })
      .catch((error) => {
        console.log("요청이 실패했습니다.", error);
      });
  }

  function geoError() {
    alert("현재 위치정보를 찾을 수 없습니다.");
  }
  return (
    <>
      <Container>
        <Card>
          <Icon>
            <img src={` https://openweathermap.org/img/wn/${icon}@2x.png`} />
          </Icon>
          <Weather>
            <Temp>
              {temp}
              <i className="ti ti-temperature-celsius"></i>
            </Temp>
            <City>{city}</City>
            <Info>{weather}</Info>
          </Weather>
        </Card>
      </Container>
    </>
  );
}
