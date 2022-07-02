import dotenv from "dotenv";
import { Client, Intents } from "discord.js";
import { hasPrefix, getCommand } from "./utils/index.js";
import { executeCommand } from "./commands/index.js";

dotenv.config();

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.once("ready", () => {
  console.log("BOT IS ONLINE");
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  if (!hasPrefix(message.content)) return;

  const command = getCommand(message.content.toLocaleLowerCase());

  try {
    return executeCommand(command, message);
  } catch (error) {
    message.reply(error.message);
  }
});

client.login(process.env.TOKEN);