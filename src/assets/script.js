async function getP() {
  try {
    const response = await fetch(
      "https://gist.githubusercontent.com/Mahakchhipa/0a9700fb0ca5dea48f959969e0294b9c/raw/e71e431c836bc5353a720b24c46d425cc80b032c/productdata.json"
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      throw new Error("Failed to fetch data");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}
getP();