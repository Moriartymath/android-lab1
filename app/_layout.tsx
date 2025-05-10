import { DATABASE_NAME } from "@/constants/database";
import { Link, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SQLiteProvider } from "expo-sqlite";
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import migrations from "../drizzle/migrations";
import { Suspense } from "react";
import { ActivityIndicator } from "react-native-paper";
import { db } from "@/db/db";
import Toast from "react-native-toast-message";
import { View } from "lucide-react-native";

export default function RootLayout() {
  useMigrations(db, migrations);

  return (
    <Suspense fallback={<ActivityIndicator size={"large"} />}>
      <SQLiteProvider databaseName={DATABASE_NAME} useSuspense>
        <Stack
          screenLayout={(props) => {
            return (
              <>
                {props.children}
                <Toast autoHide />
              </>
            );
          }}
        >
          <Stack.Screen
            name="index"
            options={{
              title: "Home",
              headerShown: true,
              headerRight(props) {
                return <Link href={"/records"}>Open</Link>;
              },
            }}
          />
          <Stack.Screen
            name="records/index"
            options={{ title: "Home", headerShown: true }}
          />
        </Stack>
      </SQLiteProvider>
      <StatusBar style="auto" />
    </Suspense>
  );
}
