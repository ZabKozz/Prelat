require("dotenv").config();

require("module-alias/register");

const { Client } = require('discord.js')
const client = new Client({
    intents: 32767,
    allowedMentions: {
        parse: ['users', 'roles'],
        repliedUser: true,
    },
});

client.login(process.env.client_Token);