'use strict';

const { logger } = require('./');

const Discord = require('discord.js');
// Used for handling environment variables for api keys
const dotenv = require('dotenv');
// Load environment variables
const dotenvError = dotenv.config().error;
if (dotenvError) {
  throw dotenvError;
}

const args = process.argv.slice(2);

// Listens for and executes commands (separate into handler and listener?)
const { CommandHandler } = require('./handlers');

// Authentication info can be obtained on discordapp.com/developers
this.applicationID = process.env.APPLICATION_ID;
this.publicKey = process.env.APPLICATION_PUBLIC_KEY;
this.token = process.env.DISCORD_PRIVATE_TOKEN;

// Initialize Discord client
const client = new Discord.Client();
const commandHandler = new CommandHandler(this);
client.login(token)
  .catch(error => {
    logger.fatal(`Error logging in: ${error.message}`);
    return;
  });

// run once when bot is logged in to Discord
client.once('ready', () => {
  logger.info('Connected');
  logger.info(`Logged in as: ${client.user.username} - id:${client.user.id}`);
  logger.info('Ready to receive commands.');
});

// When the bot detects a message in a text channel, check if it's a command via commandHandler
client.on('message', (message) => {
  if (message.author.bot) return;
  commandHandler.runCommand(message);
});
