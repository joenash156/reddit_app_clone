import { EvilIcons, FontAwesome6, SimpleLineIcons } from "@expo/vector-icons";
import { formatDistanceToNowStrict } from "date-fns";
import { Image, Text, View } from "react-native";
// import Posts from "../../assets/data/posts.json"
import { Post } from "../types";

type PostListItemProps = {
  post: Post;
}


export default function PostListItem({ post }: PostListItemProps) {

  return (
    <View className="px-2 py-4">
      {/* Post Header */}
      <View className="flex flex-row items-center justify-between">
        <View className="flex-row gap-2 items-center">
          <Image
            source={{
              uri: post.group.image
            }}
            style={{
              // width: 30,
              // height: 30,
              //borderRadius: 50,
            }}
            className="rounded-full w-8 h-8"
          />

          <View className="flex-row items-end justify-between gap-2">
            <Text className="font-bold text-gray-800">{post.group.name}</Text>
            <Text className="text-sm text-gray-500">{formatDistanceToNowStrict(new Date(post.created_at))}
            </Text>
          </View>

        </View>

        <View>
          <Text className="bg-blue-600 text-white px-2 py-0.5 rounded-full text-sm">
            <FontAwesome6
              name="add"
              size={12}
            />
            Join
          </Text>
        </View>

      </View>

      {/* Content */}
      <Text className="font-bold text-gray-800 tracking-[0.5px] my-1">{post.title}</Text>

      {post.image && (
        <Image
          source={{
            uri: post.image
          }}
          className="w-full rounded-lg"
          style={{
            aspectRatio: 4 / 3
          }}
        />
      )}

      {!post.image && post.description && (
        <Text
          numberOfLines={4}
          className="px-0.5"
        >
          {post.description}
        </Text>
      )}


      {/* Post footer */}
      <View className="flex-row items-center justify-between px-0.5 my-1">
        <View className="flex-row items-center gap-3">
          <View className="flex-row items-center gap-2  border-gray-300 rounded-3xl px-2 py-1">
            <View className="flex-row border-r border-gray-300 pr-2">
              <View className="flex-row gap-2">
                <SimpleLineIcons
                  name="like"
                  size={14}
                />
                <Text className="text-gray-700 text-xs">{post.upvotes}</Text>
              </View>

            </View>

            <SimpleLineIcons
              name="dislike"
              size={14}
              className="pl-0.5"
            />
          </View>

          <View className="flex-row border-gray-300 py-1 px-3 rounded-3xl">
            <EvilIcons
              name="comment"
              size={20}
            />
            <Text className="text-gray-700 text-xs">{post.nr_of_comments}</Text>
          </View>

        </View>

        <View className="flex-row gap-4 items-center">
          <View className="flex-row py-1 px-4">
            <SimpleLineIcons
              name="trophy"
              size={14}
            />
          </View>
          <View className="flex-row  py-1 px-2">
            <SimpleLineIcons
              name="share-alt"
              size={14}
            />
          </View>

        </View>

      </View>

    </View>
  );
}