const fetchBusStations = async () => {
  const serviceKey =
    "ZuElxvAzFWk7d4ZNewsF3D0sUUOdkLj7H3AKlfclm6SXQlbstUAUgc4WgQP8Q5%2Bo13NhA19o17ts7Hn1bw%2FAkw%3D%3D";
  const url = `https://apis.data.go.kr/6410000/busstationservice/v2/list?serviceKey=${serviceKey}&keyword=수원역&page=1&size=10`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const result = await response.json(); // 또는 .text() 후 XML 파싱 필요
    console.log(result);
  } catch (error) {
    console.error("버스 정류소 데이터 요청 중 에러 발생:", error);
  }
};

fetchBusStations();
console.log("버스 정류소 데이터 요청 완료");
