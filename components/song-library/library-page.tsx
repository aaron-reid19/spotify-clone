import { Dimensions, FlatList, Image, StyleSheet, Text, View, } from 'react-native';

const PlayListIcon = {
  pinned: require("../../assets/images/pinned.png"),
  downloaded: require("../../assets/images/downloaded.png")
} as const;

type PlaylistIconKey = keyof typeof PlayListIcon;

type PlayList = {
  id: string;
  coverImage: any;
  playlistName: string;
  playlistOwner?: string;
  description?: string;
  songNumber?: number;
  icons?: PlaylistIconKey[];
}

const playlist: PlayList[] = [
  {
    id: "1",
    coverImage: require("../../assets/images/likedSongs.jpg"),
    playlistName: "Liked Songs",
    songNumber: 2344,
    icons: ["pinned", "downloaded"]
  },
  {
    id: "2",
    coverImage: require("../../assets/images/bookmarked.png"),
    playlistName: "Your Episodes",
    description: "Playlist • Saved episodes",
    icons: ["pinned"],
  },
  {
    id: "3",
    coverImage: require("../../assets/images/elevatorMusic.png"), // placeholder
    playlistName: "Dj Matlab House Playlist",
    playlistOwner: "Juan Pablo Borg...",
  },
  {
    id: "4",
    coverImage: require("../../assets/images/DjBeta.jpg"), // placeholder
    playlistName: "DJ",
    description: "Tap to start",
  },
  {
    id: "5",
    coverImage: require("../../assets/images/top.png"), // placeholder
    playlistName: "Suelto",
    playlistOwner: "aar.reid",
  },
  {
    id: "6",
    coverImage: require("../../assets/images/modernJazz.png"), // placeholder
    playlistName: "what it do",
    playlistOwner: "aar.reid",
  },
  {
    id: "7",
    coverImage: require("../../assets/images/danceparty.png"), // placeholder
    playlistName: "Para mi alma",
    playlistOwner: "aar.reid",
  },
  {
    id: "8",
    coverImage: require("../../assets/images/daylist.png"), // placeholder
    playlistName: "Rawr",
    playlistOwner: "Maria Rivera",
  },
  {
    id: "9",
    coverImage: require("../../assets/images/popmix.png"), // placeholder
    playlistName: "Uk",
    playlistOwner: "aar.reid",
  },
];
const GAP = 8;
const PADDING = 12;
const CARD_WIDTH =
  (Dimensions.get("window").width - PADDING * 2 - GAP * 2) / 3;
const LibraryPage = () => {
  return (
    <FlatList
      style={{ flex: 1 }}
      data={playlist}
      keyExtractor={(item) => item.id}
      numColumns={3}
      columnWrapperStyle={{ gap: GAP }}
      contentContainerStyle={{ paddingHorizontal: PADDING }}
      renderItem={({ item }) => (
        <View style={styles.playlistContainer}>
          <Image source={item.coverImage} style={styles.coverImage} />
          <Text style={styles.playlistName} numberOfLines={1}>
            {item.playlistName}
          </Text>
        </View>
      )}
    ></FlatList>
  )
}

export default LibraryPage

const styles = StyleSheet.create({
  playlistContainer: {
    width: CARD_WIDTH,
    marginBottom: 8,
  },

  coverImage: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 6,
  },

  playlistName: {
    marginTop: 6,
    fontWeight: "600",
    color: "white",
    fontSize: 13,
  },

})