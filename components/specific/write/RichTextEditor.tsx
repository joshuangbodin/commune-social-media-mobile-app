import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  actions,
  RichToolbar,
  RichEditor,
} from "react-native-pell-rich-editor";
import { theme } from "@/constant/theme";

interface props {
  editorRef: any;
  onChange: (p: any) => void;
}

const RichTextEditor = ({ editorRef, onChange }: props) => {
  return (
    <View style={{ minHeight: 300 }}>
      <ScrollView>
        <RichToolbar
          actions={[
            actions.setStrikethrough,
            actions.setBold,
            actions.setItalic,
            actions.insertOrderedList,
            actions.blockquote,
            actions.alignCenter,
            actions.alignRight,
            actions.line,
            actions.heading1,
            actions.heading4,
          ]}
          iconMap={{
            [actions.heading1]: ({ tintColor }: any) => (
              <Text style={{ color: tintColor }}>H1</Text>
            ),
            [actions.heading4]: ({ tintColor }: any) => (
              <Text style={{ color: tintColor }}>H4</Text>
            ),
          }}
          disabled={false}
          style={{}}
          flatContainerStyle={{ backgroundColor: theme.primary.white }}
          editor={editorRef}
        />
        
      </ScrollView>
    </View>
  );
};

export default RichTextEditor;

const styles = StyleSheet.create({});
