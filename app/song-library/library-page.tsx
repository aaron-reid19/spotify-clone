import { Dimensions, FlatList, Image, StyleSheet, Text, View, } from 'react-native';

const PlayListIcon = {
  pinned: require("../../assets/images/pinned.png"),
  downloaded: require("../../assets/images/downloaded.png")
}as const;

type PlaylistIconKey = keyof typeof PlayListIcon;

type PlayList = { 
  id: string;
  coverImage: any;
  playlistName: string;
  playlistOwner?: string;
  description?:  string;
  songNumber?: number;
  icons?: PlaylistIconKey[];
}

const playlist:PlayList[]= [
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
    coverImage: require("../../assets/images/dj-matlab.jpg"), // placeholder
    playlistName: "Dj Matlab House Playlist",
    playlistOwner: "Juan Pablo Borg...",
  },
  {
    id: "4",
    coverImage: require("../../assets/images/dJBeta.jpg"), // placeholder
    playlistName: "DJ",
    description: "Tap to start",
  },
  {
    id: "5",
    coverImage: require("../../assets/images/suelito.jpg"), // placeholder
    playlistName: "Suelto",
    playlistOwner: "aar.reid",
  },
  {
    id: "6",
    coverImage: require("../../assets/images/whatItDo.png"), // placeholder
    playlistName: "what it do",
    playlistOwner: "aar.reid",
  },
  {
    id: "7",
    coverImage: require("../../assets/images/paraMiAlma.png"), // placeholder
    playlistName: "Para mi alma",
    playlistOwner: "aar.reid",
  },
  {
    id: "8",
    coverImage: require("../../assets/images/rawr.png"), // placeholder
    playlistName: "Rawr",
    playlistOwner: "Maria Rivera",
  },
  {
    id: "9",
    coverImage: require("../../assets/images/uk.png"), // placeholder
    playlistName: "Uk",
    playlistOwner: "aar.reid",
  },
];
const CARD_WIDTH =
  (Dimensions.get("window").width - 12 * (3 + 1)) /3;
const LibraryPage = () => {
  return (
    <FlatList
    data = {playlist}
    keyExtractor={(item) =>item.id}
    numColumns={3}
    columnWrapperStyle ={{gap:12}}
    contentContainerStyle={{paddingHorizontal: 12}}
    renderItem={({item}) =>(
      <View style = {styles.playlistContainer}>
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
    marginBottom: 16,         
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