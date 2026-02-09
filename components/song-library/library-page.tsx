import { useState } from 'react';
import { Image, LayoutChangeEvent, StyleSheet, Text, View } from 'react-native';

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
    playlistName: "Elevator Music",
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
    playlistName: "2025 Rewind",
    playlistOwner: "aar.reid",
  },
  {
    id: "6",
    coverImage: require("../../assets/images/modernJazz.png"), // placeholder
    playlistName: "You Like Jazz?",
    playlistOwner: "aar.reid",
  },
  {
    id: "7",
    coverImage: require("../../assets/images/danceparty.png"), // placeholder
    playlistName: "Dance Party",
    playlistOwner: "aar.reid",
  },
  {
    id: "8",
    coverImage: require("../../assets/images/daylist.png"), // placeholder
    playlistName: "Daylist",
    playlistOwner: "Maria Rivera",
  },
  {
    id: "9",
    coverImage: require("../../assets/images/popmix.png"), // placeholder
    playlistName: "Alt Pop Mix",
    playlistOwner: "aar.reid",
  },
];
const GAP = 8;
const PADDING = 12;
const TEXT_HEIGHT = 19; // fontSize 13 + marginTop 6
const LibraryPage = () => {
  const [cardSize, setCardSize] = useState(0);
  const rows = [playlist.slice(0, 3), playlist.slice(3, 6), playlist.slice(6, 9)];

  const handleLayout = (e: LayoutChangeEvent) => {
    const { width, height } = e.nativeEvent.layout;
    const contentWidth = width - PADDING * 2;
    const contentHeight = height - PADDING * 2;
    const maxFromWidth = (contentWidth - GAP * 2) / 3;
    const maxFromHeight = (contentHeight - GAP * 2 - TEXT_HEIGHT * 3) / 3;
    setCardSize(Math.min(maxFromWidth, maxFromHeight));
  };

  return (
    <View style={styles.gridContainer} onLayout={handleLayout}>
      {cardSize > 0 && rows.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((item) => (
            <View key={item.id} style={styles.playlistContainer}>
              <Image source={item.coverImage} style={[styles.coverImage, { width: cardSize, height: cardSize }]} />
              <Text style={styles.playlistName} numberOfLines={1}>
                {item.playlistName}
              </Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  )
}

export default LibraryPage

const styles = StyleSheet.create({
  gridContainer: {
    flex: 1,
    padding: PADDING,
    gap: GAP,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    gap: GAP,
    justifyContent: 'center',
  },
  playlistContainer: {
    alignItems: 'center',
  },

  coverImage: {
    borderRadius: 6,
  },

  playlistName: {
    marginTop: 6,
    fontWeight: "600",
    color: "white",
    fontSize: 13,
  },

})