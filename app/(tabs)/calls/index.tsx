import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
import React from "react";
import { Stack } from "expo-router";
import Colors from "@/constants/Colors";
import calls from "@/assets/data/calls.json";
import { defaultStyles } from "@/constants/Styles";
import { Ionicons } from "@expo/vector-icons";
import { format } from "date-fns";
import { SegmentedControl } from "@/components/SegmentedControl";
import Animated, { CurvedTransition, FadeInUp, FadeOutUp } from "react-native-reanimated";

const transition = CurvedTransition.delay(100);

const Index = () => {
  const [editing, setEditing] = React.useState(false);
  const [items, setItems] = React.useState(calls);
  const [selectedOption, setSelectedOption] = React.useState("All");

  const onEdit = () => {
    setEditing(!editing);
  };

  React.useEffect(() => {
    if (selectedOption === "Missed") {
      setItems(calls.filter((call) => call.missed));
    } else {
      setItems(calls);
    }
  }, [selectedOption]);

  return (
    <View style={{ flex: 1, backgroundColor: Colors.background }}>
      <Stack.Screen
        options={{
          headerTitle: () => (
            <SegmentedControl
              options={["All", "Missed"]}
              selectedOption={selectedOption}
              onOptionPress={setSelectedOption}
            />
          ),
          headerLeft: () => {
            return (
              <TouchableOpacity onPress={onEdit}>
                <Text style={{ color: Colors.primary, fontSize: 18 }}>
                  {editing ? "Done" : "Edit"}
                </Text>
              </TouchableOpacity>
            );
          },
        }}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{ paddingBottom: 14 }}
      >
        <Animated.View style={defaultStyles.block} layout={transition}>
          <Animated.FlatList
            data={items}
            scrollEnabled={false}
            itemLayoutAnimation={transition}
            skipEnteringExitingAnimations
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item, index }) => (
              <Animated.View entering={FadeInUp.delay(index * 10)} exiting={FadeOutUp}>
                <View style={[defaultStyles.item]}>
                  <Image source={{ uri: item.img }} style={styles.avatar} />

                  <View style={{ flex: 1, gap: 2 }}>
                    <Text style={{ fontSize: 18, color: item.missed ? Colors.red : "#000" }}>
                      {item.name}
                    </Text>
                    <View style={{ flexDirection: "row", gap: 4 }}>
                      <Ionicons
                        name={item.video ? "videocam" : "call"}
                        size={16}
                        color={Colors.gray}
                      />
                      <Text style={{ color: Colors.gray, flex: 1 }}>
                        {item.incoming ? "Incoming" : "Outgoing"}
                      </Text>
                    </View>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      gap: 6,
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ color: Colors.gray }}>{format(item.date, "MM.dd.yy")}</Text>
                    <Ionicons name="information-circle-outline" size={24} color={Colors.primary} />
                  </View>
                </View>
              </Animated.View>
            )}
          />
        </Animated.View>
      </ScrollView>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
