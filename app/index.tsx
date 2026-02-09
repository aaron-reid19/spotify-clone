import { Text, View, StyleSheet } from "react-native";
import FilterBar from "../components/header-components/filter-bar";
import LibraryPage from "../components/song-library/library-page";

// Index Page Rendering
export default function Index() {
  return (
    <View
      style={styles.container}>
        {/* TODO: Header Component */}
        <FilterBar/>
        <LibraryPage/>
        {/* TODO: Kaley's Footer */}
    </View>
  );
}

// Index Page Styling

