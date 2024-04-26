console.clear();

const url = "https://swapi.py4e.com/api/people";

try {
  async function fetchData() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    console.log("R2D2", data.results[2]);
    console.log("R2D2 eyecolor: ", data.results[2].eye_color);
    return data;
  }
  fetchData();
} catch (error) {
  ("Something went wrong");
}

