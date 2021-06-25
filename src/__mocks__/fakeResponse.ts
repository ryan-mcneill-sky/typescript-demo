export enum Status {
  TODO = "Not started",
  INPROGRESS = "In progress",
  COMPLETE = "Complete"
}

export const fakeResponse = {
  loading: false,
  error: false,
  data: {
    characters: {
      rebels: [
        {
          id: 0,
          value: "Luke Skywalker"
        },
        {
          id: 1,
          value: "Leia Organa"
        },
        {
          id: 0,
          value: "Han Solo"
        },
        {
          id: 0,
          value: "Chewbacca"
        },
        {
          id: 0,
          value: "Mon Mothma"
        },
        {
          id: 0,
          value: "Wedge Antilles"
        }
      ],
      imperials: [
        {
          id: 0,
          value: "Emperor Palpatine"
        },
        {
          id: 1,
          value: "Darth Vader"
        },
        {
          id: 0,
          value: "Grand Moff Tarkin"
        },
        {
          id: 0,
          value: "Admiral Piett"
        },
        {
          id: 0,
          value: "General Veers"
        },
        {
          id: 0,
          value: "General Madine"
        }
      ]
    },
    isVisible: true,
    status: Status.INPROGRESS
  }
};
