import { DATABASE_NAME } from "@/constants/database";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { openDatabaseSync, SQLiteProvider } from "expo-sqlite";
import { drizzle } from "drizzle-orm/expo-sqlite";
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import migrations from "../drizzle/migrations";
import { Suspense, useEffect } from "react";
import { ActivityIndicator } from "react-native-paper";
import { db } from "@/db/db";

export default function RootLayout() {
  const { success, error } = useMigrations(db, migrations);

  return (
    <Suspense fallback={<ActivityIndicator size={"large"} />}>
      <SQLiteProvider databaseName={DATABASE_NAME} useSuspense>
        <Stack>
          <Stack.Screen
            name="index"
            options={{ title: "Home", headerShown: true }}
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
