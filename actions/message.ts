import { db } from "@/db/db";
import { messages } from "@/db/schema";
import { eq } from "drizzle-orm";
import Toast from "react-native-toast-message";

export const createMessage = async (content: string, fontSize: number) => {
  try {
    const res = await db
      .insert(messages)
      .values({ content, font_size: fontSize });
    Toast.show({ type: "success", text1: "You successfully created message!" });
  } catch (error) {
    Toast.show({ type: "error", text1: "Error while create message!" });
  }
};

export const deleteMessage = async (id: number) => {
  try {
    await db.delete(messages).where(eq(messages.id, id));
    Toast.show({ type: "success", text1: "You successfully deleted message!" });
  } catch (error) {
    Toast.show({ type: "error", text1: "Error while deleting message!" });
  }
};
