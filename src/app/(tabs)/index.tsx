import { FlatList, Image, Text, View } from "react-native";
import PostListItem from "../../components/PostListItem";
import posts from "../../../assets/data/posts.json";


export default function Home() {

  

  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <PostListItem post={item} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
