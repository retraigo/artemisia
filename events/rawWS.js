import AbyssMessage from "../structures/AbyssMessage.js";
export default (client, packet) => {
  if (packet.t == "MESSAGE_CREATE") {
    if (!!packet.d.author.bot) return;
    const message = new AbyssMessage(packet.d, client);
    //        if (message.author.id !== this.user.id) this.emit('messageReceive', message)
//    client.emit("guildMemberAdd", message.channel.guild, message.member);
    return client.dispatcher.handleMessage(message);
  }
};
