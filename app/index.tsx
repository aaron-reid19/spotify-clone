import { View, StyleSheet } from "react-native";
import LibraryHeader from "../components/header-components/library-header";
import FilterBar from "../components/header-components/filter-bar";
import LibraryPage from "../components/song-library/library-page";
import NavigationBar from "@/components/navigation/nav";
import SongPlayer from "@/components/navigation/song-player";
import AlertButton from "@/components/navigation/alert";

// Index Page Rendering
export default function Index() {
  return (
    <View
      style={styles.container}>
        <LibraryHeader/>
        <FilterBar/>
        <LibraryPage/>
        <SongPlayer/>
        <AlertButton/>
        <NavigationBar/>
    </View>
  );
}

// Index Page Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
});
