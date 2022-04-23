import { defineStore } from "pinia";

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useWords = defineStore("storeId", {
  state: () => {
    return {
      voice: "male",
      words: [
        {
          id: 1,
          file: "https://firebasestorage.googleapis.com/v0/b/sleepy-words.appspot.com/o/Bright%20Vocal.wav?alt=media&token=d88f8783-023b-4d71-876c-c415bf8f3f15",
          tags: ["nature", "animals"],
        },
        {
          id: 2,
          file: "https://firebasestorage.googleapis.com/v0/b/sleepy-words.appspot.com/o/Bright%20Vocal_1.wav?alt=media&token=fbc63d10-c83b-4350-9c01-21463d721bc7",
          tags: ["nature", "animals"],
        },
        {
          id: 3,
          file: "https://firebasestorage.googleapis.com/v0/b/sleepy-words.appspot.com/o/Bright%20Vocal_10.wav?alt=media&token=dc94131c-4392-4ebc-bfeb-1944d21a4b26",
          tags: ["sports"],
        },
        {
          id: 4,
          file: "https://firebasestorage.googleapis.com/v0/b/sleepy-words.appspot.com/o/Bright%20Vocal_11.wav?alt=media&token=75138238-5d29-4300-a993-69227203c7c2",
          tags: ["cars", "nature"],
        },
        {
          id: 5,
          file: "https://firebasestorage.googleapis.com/v0/b/sleepy-words.appspot.com/o/Bright%20Vocal_12.wav?alt=media&token=daa25495-44cf-4cae-b23f-c82b6ca9d364",
          tags: ["cars", "nature", "balls"],
        },
        {
          id: 6,
          file: "https://firebasestorage.googleapis.com/v0/b/sleepy-words.appspot.com/o/Bright%20Vocal_13.wav?alt=media&token=5d9f495e-0001-4faa-a4cf-cb4ad4aee2a0",
          tags: ["cars", "nature"],
        },
        {
          id: 7,
          file: "https://firebasestorage.googleapis.com/v0/b/sleepy-words.appspot.com/o/Bright%20Vocal_14.wav?alt=media&token=1539fbd0-ddb6-44f7-a10a-a62d284e01c3",
          tags: ["cars", "nature"],
        },
        {
          id: 8,
          file: "https://firebasestorage.googleapis.com/v0/b/sleepy-words.appspot.com/o/Bright%20Vocal_15.wav?alt=media&token=5d8c4dc1-e06b-470e-8159-32dffacf4b52",
          tags: ["cars", "nature"],
        },
        {
          id: 9,
          file: "https://firebasestorage.googleapis.com/v0/b/sleepy-words.appspot.com/o/Bright%20Vocal_16.wav?alt=media&token=e11818ba-e8bd-4872-a4e8-11f352367875",
          tags: ["cars", "nature"],
        },
        {
          id: 10,
          file: "https://firebasestorage.googleapis.com/v0/b/sleepy-words.appspot.com/o/Bright%20Vocal_17.wav?alt=media&token=9e4213ad-42c9-4003-97a7-ebc819777d98",
          tags: ["cars", "nature"],
        },
        {
          id: 11,
          file: "https://firebasestorage.googleapis.com/v0/b/sleepy-words.appspot.com/o/Bright%20Vocal_18.wav?alt=media&token=2b9aec6b-a506-4eef-86db-e37c920232c6",
          tags: ["cars", "nature"],
        },
        {
          id: 12,
          file: "https://firebasestorage.googleapis.com/v0/b/sleepy-words.appspot.com/o/Bright%20Vocal_19.wav?alt=media&token=7b8d92d8-8bdd-4c41-95c3-fd2750788a2c",
          tags: ["cars", "nature"],
        },
        {
          id: 13,
          file: "https://firebasestorage.googleapis.com/v0/b/sleepy-words.appspot.com/o/Bright%20Vocal_2.wav?alt=media&token=939b9f6a-df53-4732-98cc-8e89c5a4ce72",
          tags: ["cars", "nature"],
        },
        {
          id: 14,
          file: "https://firebasestorage.googleapis.com/v0/b/sleepy-words.appspot.com/o/Bright%20Vocal_20.wav?alt=media&token=1c799c9d-b68d-4614-b250-583b5e763af8",
          tags: ["cars", "nature"],
        },
        {
          id: 15,
          file: "https://firebasestorage.googleapis.com/v0/b/sleepy-words.appspot.com/o/Bright%20Vocal_21.wav?alt=media&token=0cd89cef-5a30-4b19-abfd-b57ecbc4d0a6",
          tags: ["cars", "nature"],
        },
        {
          id: 16,
          file: "https://firebasestorage.googleapis.com/v0/b/sleepy-words.appspot.com/o/Bright%20Vocal_22.wav?alt=media&token=8cedccce-6579-4de1-87cc-db40c2d17f4d",
          tags: ["cars", "nature"],
        },
        {
          id: 17,
          file: "https://firebasestorage.googleapis.com/v0/b/sleepy-words.appspot.com/o/Bright%20Vocal_23.wav?alt=media&token=b0be2551-bde9-4bfd-b300-7b3742e3e99c",
          tags: ["cars", "nature"],
        },
        {
          id: 18,
          file: "https://firebasestorage.googleapis.com/v0/b/sleepy-words.appspot.com/o/Bright%20Vocal_24.wav?alt=media&token=3b699bc7-b808-4c6f-afb2-2393de44b147",
          tags: ["cars", "nature"],
        },
        {
          id: 19,
          file: "https://firebasestorage.googleapis.com/v0/b/sleepy-words.appspot.com/o/Bright%20Vocal_25.wav?alt=media&token=1b95a705-d416-483e-abdd-bb8ed35e4a7e",
          tags: ["cars", "nature"],
        },
        {
          id: 20,
          file: "https://firebasestorage.googleapis.com/v0/b/sleepy-words.appspot.com/o/Bright%20Vocal_26.wav?alt=media&token=e6d933bb-f9c4-4f80-bbd9-833bbaf8444c",
          tags: ["cars", "nature"],
        },
        {
          id: 21,
          file: "https://firebasestorage.googleapis.com/v0/b/sleepy-words.appspot.com/o/Bright%20Vocal_27.wav?alt=media&token=95d743dc-20b4-4ef3-9985-16db69e6b0f9",
          tags: ["cars", "nature"],
        },
        {
          id: 22,
          file: "https://firebasestorage.googleapis.com/v0/b/sleepy-words.appspot.com/o/Bright%20Vocal_28.wav?alt=media&token=3db82ed2-eed2-4abb-a430-619d327a10dd",
          tags: ["cars", "nature"],
        },
        {
          id: 23,
          file: "https://firebasestorage.googleapis.com/v0/b/sleepy-words.appspot.com/o/Bright%20Vocal_3.wav?alt=media&token=1e96b06a-9e1c-4822-a69c-19c85f5a3cc9",
          tags: ["cars", "nature"],
        },
        {
          id: 24,
          file: "https://firebasestorage.googleapis.com/v0/b/sleepy-words.appspot.com/o/Bright%20Vocal_30.wav?alt=media&token=099b37ac-1f3a-416d-9325-129b34ed2345",
          tags: ["cars", "nature"],
        },
        {
          id: 25,
          file: "https://firebasestorage.googleapis.com/v0/b/sleepy-words.appspot.com/o/Bright%20Vocal_4.wav?alt=media&token=89f9d125-74e7-47fc-8afd-4b1b26e6190e",
          tags: ["cars", "nature"],
        },
        {
          id: 26,
          file: "https://firebasestorage.googleapis.com/v0/b/sleepy-words.appspot.com/o/Bright%20Vocal_5.wav?alt=media&token=6ea7fbf3-e8b2-429e-9043-4b0877324462",
          tags: ["cars", "nature"],
        },
        {
          id: 27,
          file: "https://firebasestorage.googleapis.com/v0/b/sleepy-words.appspot.com/o/Bright%20Vocal_6.wav?alt=media&token=ef00851f-1b40-4573-a581-0d719de71e97",
          tags: ["cars", "banana", "nature"],
        },
        {
          id: 28,
          file: "https://firebasestorage.googleapis.com/v0/b/sleepy-words.appspot.com/o/Bright%20Vocal_7.wav?alt=media&token=69ab62e0-4be8-438a-8b78-8fe96a756a1f",
          tags: ["cars", "nature", "banana", "sports"],
        },
        {
          id: 29,
          file: "https://firebasestorage.googleapis.com/v0/b/sleepy-words.appspot.com/o/Bright%20Vocal_8.wav?alt=media&token=0aeb7e7e-6c9b-4fda-825f-5db3773223a2",
          tags: ["cars", "banana", "nature"],
        },
        {
          id: 30,
          file: "https://firebasestorage.googleapis.com/v0/b/sleepy-words.appspot.com/o/Bright%20Vocal_9.wav?alt=media&token=fef16ea0-ecc3-43b8-be5f-8533c437afe2",
          tags: ["cars", "banana", "nature"],
        },
      ],
    };
  },
  getters: {
    wordPlaylist: (state) => {
      let newWords = [];
      return (tag) => {
        let newArray = state.words.filter((word) => word.tags.includes(tag));
        newArray.forEach((word) => {
          newWords.push(word.file);
        });
        return newWords;
      };
    },
  },
  actions: {
    increment() {
      this.counter++;
    },
  },
});
