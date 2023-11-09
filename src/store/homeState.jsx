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
          newData.push([
            fetchData[i].profile.full_name,
            `Batch ${fetchData[i].profile.batch.batch_number}`,
          ]);
        }

        return newData;
      },
      detail: (data, tmp) => {
        const detailData = data.find(
          ({ profile }) => profile.full_name === tmp
        );

        return detailData;
      },
      detailScreen: "StudentDetail",
    },
    {
      head: ["Batch Name", "Total Student"],
      data: [],
      fullData: null,
      filtering: (fetchData) => {
        const newData = [];

        for (let i = 0; i < fetchData.length; i++) {
          newData.push([
            `Batch ${fetchData[i].batch_number}`,
            fetchData[i].profiles.length,
          ]);
        }

        return newData;
      },
      detail: (data, tmp) => {
        const detailData = data.find(
          ({ batch_number }) => batch_number === tmp
        );

        return detailData;
      },
      detailScreen: "BatchDetail",
    },
  ],
});

export { homeScreenState };
