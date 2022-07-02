import { MessageEmbed } from "discord.js";

export const commands = [
  {
    name: "ping",
    description: "Replies with :ping_pong: pong",
    execute: message => message.reply(":ping_pong: Pong"),
  },
  {
    name: "help",
    description: "Replies with a list of commands",
    execute: message => {
      const embed = new MessageEmbed()
        .setColor("#b02e2e")
        .setTitle("Commands")
        .setDescription("List of commands available for Virtual Hunter.")
        .addFields(...commands.map(command => ({ name: '%' + command.name, value: command.description })));

      return message.channel.send({ embeds: [embed] });
    }
  }
]

export const executeCommand = (command, message) => {
  console.log("Executing command: " + command + " with message: " + message);
  const commandToExecute = commands.find(c => c.name === command);

  if (commandToExecute) {
    return commandToExecute.execute(message);
  }

  throw new Error(`Command "${command}" not found. Type "%help" for a list of commands.`);
}