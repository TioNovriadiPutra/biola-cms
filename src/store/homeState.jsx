const { atom } = require("recoil");

const homeScreenState = atom({
  key: "homeScreenState",
  default: [
    {
      head: ["Name", "Batch"],
      data: [],
      fullData: null,
      filtering: (fetchData) => {
        const newData = [];

        for (let i = 0; i < fetchData.length; i++) {
          newData.push([fetchData[i].profile.full_name, `Batch ${fetchData[i].profile.batch.batch_number}`]);
        }

        return newData;
      },
    },
    {
      head: ["Batch Name", "Total Student"],
      data: [],
      fullData: null,
      filtering: (fetchData) => {
        const newData = [];

        for (let i = 0; i < fetchData.length; i++) {
          newData.push([`Batch ${fetchData[i].batch_number}`, fetchData[i].profiles.length]);
        }

        return newData;
      },
    },
  ],
});

export { homeScreenState };
