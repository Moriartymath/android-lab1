import Message from "@/components/Message";
import { db } from "@/db/db";
import { messages } from "@/db/schema";
import { useLiveQuery } from "drizzle-orm/expo-sqlite";
import { FC } from "react";
import { FlatList, Text, View } from "react-native";

const RecordsPage: FC = () => {
  const { data } = useLiveQuery(db.select().from(messages));

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        paddingVertical: 20,
        justifyContent: "center",
      }}
    >
      <FlatList
        data={data}
        ListEmptyComponent={
          <Text style={{ fontSize: 20 }}>There are no records yet!</Text>
        }
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 6,
            }}
          />
        )}
        contentContainerStyle={{
          justifyContent: "center",
          flex: 1,
        }}
        renderItem={(props) => <Message data={props.item} />}
        keyExtractor={(item) => String(item.id)}
      />
    </View>
  );
};

export default RecordsPage;
