import { View, StyleSheet } from "react-native";
import LibraryHeader from "../components/header-components/library-header";
import FilterBar from "../components/header-components/filter-bar";
import LibraryPage from "../components/song-library/library-page";

// Index Page Rendering
export default function Index() {
  return (
    <View
      style={styles.container}>
        <LibraryHeader/>
        <FilterBar/>
        <LibraryPage/>
        {/* TODO: Kaley's Footer */}
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
