import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Link } from "expo-router";
import useFetch from "@/services/useFetch";
import { fetchAuthorDetails, fetchAuthors } from "@/services/api";

interface props {
  title: string;
  author: string;
  poster_path: string;
  work_key: string;
}

const SearchView = ({ title, author, poster_path, work_key }: props) => {

  const { data: authors, error: authorsError } = useFetch(() => fetchAuthors(work_key));
  const [authorDetails, setAuthorDetails] = useState<any>(null);

  useEffect(() => {
    if (authors?.authors?.[0]?.author?.key) {
      const authorKey = authors.authors[0].author.key;

      const fetchDetails = async () => {
        try {
          const details = await fetchAuthorDetails(authorKey);
          setAuthorDetails(details);
        } catch (error) {
          console.error("Error fetching author details:", error);
        }
      };

      fetchDetails();
    }
  }, [authors]); // Runs when `authors` updates

  return (
    <Link href={{
      pathname: '/books/[id]',
      params: {
        id: work_key,
        title: title,
        author: authorDetails?.alternate_names?.[0] || author || "N/A",
        cover_id: poster_path,
      },
    }}
    asChild>
      <TouchableOpacity className="w-32 relative">
        <View
          className="w-[13rem] h-[23rem] relative bg-white"
          style={styles.shadow}
        >
          <Image
            source={{
              uri: poster_path
                ? `https://covers.openlibrary.org/b/id/${poster_path}-M.jpg`
                : "https://placehold.co/600x400",
            }}
            className="w-full h-[17rem] relative"
            resizeMode="cover"
          />
          <View className="w-full h-full p-2">
            <Text
              className="text-2xl font-bold mt-2 text-light-200"
              numberOfLines={1}
            >
              {title ? title : "N/A"}
            </Text>
            <Text className="text-lg mt-2 text-light-200" numberOfLines={1}>
              {authorDetails?.alternate_names?.[0] || author || "N/A"}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default SearchView

const styles = StyleSheet.create({
  shadow: {
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.01,
    shadowRadius: 5,
    elevation: 2,
  },
});
