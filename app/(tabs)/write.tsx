import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useRef, useState } from "react";
import ScreenWrapper from "@/components/general/ScreenWrapper";
import ImageCont from "@/components/specific/write/ImageCont";
import CustomText from "@/components/general/text";
import { theme } from "@/constant/theme";
import { vh } from "@/helpers/responsivesizes";
import WriteForm from "@/components/specific/write/WriteForm";
import RichTextEditor from "@/components/specific/write/RichTextEditor";

const write = () => {
  const editorRef = useRef(null);
  const [content, setContent] = useState("");

  return (
    <ScreenWrapper>
      <ScrollView
        style={{ paddingBottom: 200 }}
        showsVerticalScrollIndicator={false}
      >
        {/* greetings */}
        <View style={[styles.greeting, styles.paddingHorizontal]}>
          <CustomText style={{ color: theme.gray[700] }} size={vh(2)} isheader>
            Create New Article
          </CustomText>
        </View>
        {/* Image */}
        <ImageCont />
        {/* form 1 */}
        <View>
          <WriteForm />
        </View>
        {/* editor */}
        <RichTextEditor
          editorRef={editorRef}
          onChange={(body) => setContent(body)}
        />
      </ScrollView>
    </ScreenWrapper>
  );
};

export default write;

const styles = StyleSheet.create({
  paddingHorizontal: {
    paddingHorizontal: 10,
  },
  paddingLeft: {
    paddingLeft: 10,
  },
  greeting: {
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});
