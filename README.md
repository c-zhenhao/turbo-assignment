# Turborepo demo
This app was created with turborepo [https://turbo.build/repo/docs/getting-started/installation], pnpm is the chosen package manager, so please have it installed in order to run this repo.

To get this working, `git clone {this repo}`

`pnpm i` to install the necessary dependencies

once that is done, run the following command in the root of the folder, which will boot up the 3 repos (apps/native, apps/web and packages/ui)
`turbo dev`

## Basic demo video
https://github.com/user-attachments/assets/9b2b3d8c-361f-42d7-9338-5d921c6d58e0

## Things that are planned to be implemented
- a custom LinearGradient on the header text
    - implementation would be `react-native-masked-view` & `expo-gradient`
- `expo-video` to play the map video
- `react-native-stagger-view` to implement the merchant images
    - creating a custom grid is possible but it would have to be rescaled everytime and didn't seem feasible
    - <img width="1288" alt="image" src="https://github.com/user-attachments/assets/1f8dca9c-c312-4c8a-8391-17b2c9b8bf1e" />
