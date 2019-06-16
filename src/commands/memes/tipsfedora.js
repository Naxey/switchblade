const { Command, SwitchbladeEmbed } = require('../../')

module.exports = class TipsFedora extends Command {
  constructor (client) {
    super(client, {
      name: 'tipsfedora',
      category: 'memes'
    })
  }

  run ({ author, channel }) {
    const embed = new SwitchbladeEmbed(author)
    embed.setImage('https://i.kym-cdn.com/photos/images/masonry/000/747/485/3a1.gif')
    channel.send(embed)
  }
}
